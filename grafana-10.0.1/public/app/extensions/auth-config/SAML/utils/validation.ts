import { SAMLFormData, SAMLStepKey } from 'app/extensions/types';

import { ValidationResult } from '../../../shared/types';
import { samlSteps } from '../../index';

const BEGIN_HEADER = '-----BEGIN';
const END_HEADER = '-----END';
const PEM_HEADER_END = '-----';

// Certificates and keys start with bytes 30 82 0x
const CERT_SIGNATURE = 'MII';

type ValidationFunc = (config: SAMLFormData) => ValidationResult;

function validateAndUpdateResult(func: ValidationFunc, config: SAMLFormData, result: ValidationResult) {
  updateValidationResult(result, func(config));
}

export function validateConfig(config: SAMLFormData): ValidationResult {
  const validationRes: ValidationResult = { valid: true, errors: [] };
  validateAndUpdateResult(validateConfigGeneral, config, validationRes);
  validateAndUpdateResult(validateConfigKeyCert, config, validationRes);
  validateAndUpdateResult(validateConfigConnectToIdP, config, validationRes);
  validateAndUpdateResult(validateConfigAssertionMapping, config, validationRes);
  return validationRes;
}

export function getMissingFields(config: SAMLFormData, step: SAMLStepKey) {
  switch (step) {
    case SAMLStepKey.General:
      return !validateConfigGeneral(config).valid;
    case SAMLStepKey.KeyCert:
      return !validateConfigKeyCert(config).valid;
    case SAMLStepKey.ConnectToIdP:
      return !validateConfigConnectToIdP(config).valid;
    case SAMLStepKey.AssertionMapping:
      return !validateConfigAssertionMapping(config).valid;
    default:
      return false;
  }
}

export function getValidationResults(formData: SAMLFormData) {
  const validationRes = {} as Record<SAMLStepKey, ValidationResult>;
  samlSteps.forEach(({ id }) => {
    switch (id) {
      case SAMLStepKey.General:
        validationRes[id] = validateConfigGeneral(formData);
        return;
      case SAMLStepKey.KeyCert:
        validationRes[id] = validateConfigKeyCert(formData);
        return;
      case SAMLStepKey.ConnectToIdP:
        validationRes[id] = validateConfigConnectToIdP(formData);
        return;
      case SAMLStepKey.AssertionMapping:
        validationRes[id] = validateConfigAssertionMapping(formData);
        return;
    }
  });
  return validationRes;
}

export function validateConfigGeneral(config: SAMLFormData): ValidationResult {
  const validationRes: ValidationResult = { valid: true, errors: [] };
  const { allowIdpInitiated, relayState } = config;

  if (allowIdpInitiated === true && !relayState) {
    setValidationError(validationRes, 'Relay state should be configured');
  }

  return validationRes;
}

export function validateConfigKeyCert(config: SAMLFormData): ValidationResult {
  const validationRes: ValidationResult = { valid: true, errors: [] };
  const { privateKey, privateKeyPath, certificate, certificatePath } = config;

  if (!privateKey && !privateKeyPath) {
    setValidationError(validationRes, 'Private key should be configured');
  }
  if (!certificate && !certificatePath) {
    setValidationError(validationRes, 'Certificate key should be configured');
  }
  if (privateKey && !privateKey.startsWith('***') && !validateBase64PEM(privateKey)) {
    setValidationError(validationRes, 'Not valid PEM private key');
  }
  if (certificate && !certificate.startsWith('***') && !validateBase64PEM(certificate)) {
    setValidationError(validationRes, 'Not valid PEM certificate');
  }

  return validationRes;
}

export function validateConfigConnectToIdP(config: SAMLFormData): ValidationResult {
  const validationRes: ValidationResult = { valid: true, errors: [] };
  const { idpMetadataUrl, idpMetadataPath, idpMetadata, metadataValueType } = config;
  if (
    (metadataValueType === 'base64' && !idpMetadata) ||
    (metadataValueType === 'url' && !idpMetadataUrl) ||
    (metadataValueType === 'path' && !idpMetadataPath) ||
    (!idpMetadataUrl && !idpMetadataPath && !idpMetadata)
  ) {
    setValidationError(validationRes, 'IdP metadata should be configured');
  }

  return validationRes;
}

export function validateConfigAssertionMapping(config: SAMLFormData): ValidationResult {
  const validationRes: ValidationResult = { valid: true, errors: [] };
  return validationRes;
}

function updateValidationResult(oldRes: ValidationResult, newRes: ValidationResult) {
  if (!newRes.valid) {
    oldRes.valid = false;
    oldRes.errors?.push(...newRes.errors!);
  }
}

function setValidationError(res: ValidationResult, error: string) {
  res.valid = false;
  res.errors?.push(error);
}

export function isValidDuration(value: string): boolean {
  const durationPattern = /^([0-9]*(\.[0-9]*)?[smh]+)+$/;
  return durationPattern.test(value);
}

// formatKeyCert trims PEM header and footer (-----BEGIN and -----END) and return base64 key/cert part
export function formatPEMKeyCert(data: string): string {
  let start = 0;
  let end = data.length - 1;
  start = data.indexOf(BEGIN_HEADER);
  if (start === -1) {
    return data;
  }
  start = data.indexOf(PEM_HEADER_END, start + BEGIN_HEADER.length);
  if (start === -1) {
    return '';
  }
  // trim whole header and new line char
  start += PEM_HEADER_END.length + 1;
  end = data.lastIndexOf(END_HEADER) - 1;

  return data.slice(start, end);
}

export function validateBase64PEM(data: string): boolean {
  try {
    const decoded = atob(data);
    const formatted = formatPEMKeyCert(decoded);
    return validatePEM(formatted);
  } catch (error) {
    return false;
  }
}

export function validatePEM(data: string): boolean {
  return data?.indexOf(CERT_SIGNATURE) === 0;
}
