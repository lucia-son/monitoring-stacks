import { css } from '@emotion/css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, ConnectedProps } from 'react-redux';

import { GrafanaTheme2, SelectableValue } from '@grafana/data';
import { Field, Input, InputControl, Select, Switch, useStyles2 } from '@grafana/ui';
import { contextSrv } from 'app/core/core';

import { EnterpriseStoreState, SAMLFormData, SAMLStepKey } from '../../../types';
import { AssertionEditorRow } from '../../components/AssertionEditorRow';
import SAMLForm from '../SAMLForm';
import { settingsUpdated } from '../state/reducers';

const nameIdFormatOptions: Array<SelectableValue<string>> = [
  { label: 'Default', value: '' },
  { label: 'Unspecified', value: 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified' },
  { label: 'Email address', value: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress' },
  { label: 'Persistent', value: 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent' },
  { label: 'Transient', value: 'urn:oasis:names:tc:SAML:2.0:nameid-format:transient' },
];

type AssertionMappingData = Pick<
  SAMLFormData,
  | 'assertionAttributeName'
  | 'assertionAttributeLogin'
  | 'assertionAttributeEmail'
  | 'assertionAttributeRole'
  | 'assertionAttributeGroups'
  | 'assertionAttributeOrg'
  | 'roleValuesEditor'
  | 'roleValuesAdmin'
  | 'roleValuesGrafanaAdmin'
  | 'orgMapping'
  | 'allowedOrganizations'
  | 'nameIdFormat'
  | 'skipOrgRoleSync'
>;

function mapStateToProps(state: EnterpriseStoreState) {
  return {
    samlSettings: state.samlConfig.samlSettings,
  };
}

const mapDispatchToProps = {
  settingsUpdated,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type Props = ConnectedProps<typeof connector>;

export const AssertionMappingUnconnected = ({ samlSettings, settingsUpdated }: Props): JSX.Element => {
  const styles = useStyles2(getStyles);

  const {
    assertionAttributeName,
    assertionAttributeLogin,
    assertionAttributeEmail,
    assertionAttributeRole,
    assertionAttributeGroups,
    assertionAttributeOrg,
    roleValuesEditor,
    roleValuesAdmin,
    roleValuesGrafanaAdmin,
    orgMapping,
    allowedOrganizations,
    nameIdFormat,
    skipOrgRoleSync,
  } = samlSettings;
  const {
    handleSubmit,
    control,
    register,
    getValues,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      assertionAttributeName,
      assertionAttributeLogin,
      assertionAttributeEmail,
      assertionAttributeRole,
      assertionAttributeGroups,
      assertionAttributeOrg,
      roleValuesEditor,
      roleValuesAdmin,
      roleValuesGrafanaAdmin,
      orgMapping,
      allowedOrganizations,
      nameIdFormat: nameIdFormat || '',
      skipOrgRoleSync,
    },
  });

  const onSubmit = ({ ...settings }: AssertionMappingData) => {
    if (isDirty) {
      settingsUpdated({
        ...samlSettings,
        ...settings,
      });
    }
  };

  const { orgRole, isGrafanaAdmin } = contextSrv.user;
  const ableToEditGrafanaAdminFields = isGrafanaAdmin;
  const ableToEditAdminFields = orgRole === 'Admin' || ableToEditGrafanaAdminFields;
  const ableToEditEditorFields = orgRole === 'Editor' || ableToEditAdminFields;

  return (
    <SAMLForm
      activeStep={SAMLStepKey.AssertionMapping}
      onSubmit={handleSubmit(onSubmit)}
      confirmRedirect={isDirty}
      getFormData={getValues}
      className={styles.wrapper}
      label="User mapping"
    >
      <div className={styles.description}>
        Map SAML assertion attributes to the Grafana user attributes. Assertion attributes support template mappings.
        Team sync is available if groups attribute is configured.
      </div>
      <div className={styles.mappingContainer}>
        <div className={styles.mappingSection}>
          <div className={styles.mappingHeader}>Assertion attributes mappings</div>
          <InputControl
            name={'assertionAttributeName'}
            control={control}
            render={({ field: { ref, ...field } }) => {
              return <AssertionEditorRow {...field} label="Name attribute" placeholder="displayName" />;
            }}
          />
          <InputControl
            name={'assertionAttributeLogin'}
            control={control}
            render={({ field: { ref, ...field } }) => {
              return <AssertionEditorRow {...field} label="Login attribute" placeholder="mail" />;
            }}
          />
          <InputControl
            name={'assertionAttributeEmail'}
            control={control}
            render={({ field: { ref, ...field } }) => {
              return <AssertionEditorRow {...field} label="Email attribute" placeholder="mail" />;
            }}
          />
          <InputControl
            name={'assertionAttributeGroups'}
            control={control}
            render={({ field: { ref, ...field } }) => {
              return <AssertionEditorRow {...field} label="Groups attribute" />;
            }}
          />
          <InputControl
            name={'assertionAttributeRole'}
            control={control}
            render={({ field: { ref, ...field } }) => {
              return <AssertionEditorRow {...field} label="Role attribute" />;
            }}
          />
          {ableToEditAdminFields && (
            <InputControl
              name={'assertionAttributeOrg'}
              control={control}
              render={({ field: { ref, ...field } }) => {
                return <AssertionEditorRow {...field} label="Org attribute" />;
              }}
            />
          )}
        </div>
        <div className={styles.mappingSection}>
          {ableToEditEditorFields && (
            <>
              <div className={styles.mappingHeader}>Role mapping</div>
              <InputControl
                name={'roleValuesEditor'}
                control={control}
                render={({ field: { ref, ...field } }) => {
                  return <AssertionEditorRow {...field} label="Editor" width={60} />;
                }}
              />
            </>
          )}
          {ableToEditAdminFields && (
            <InputControl
              name={'roleValuesAdmin'}
              control={control}
              render={({ field: { ref, ...field } }) => {
                return <AssertionEditorRow {...field} label="Admin" width={60} />;
              }}
            />
          )}
          {ableToEditGrafanaAdminFields && (
            <InputControl
              name={'roleValuesGrafanaAdmin'}
              control={control}
              render={({ field: { ref, ...field } }) => {
                return <AssertionEditorRow {...field} label="Grafana Admin" width={60} />;
              }}
            />
          )}
        </div>
        {ableToEditGrafanaAdminFields && (
          <div className={styles.mappingSection}>
            <div className={styles.mappingHeader}>Org mapping</div>
            <InputControl
              name={'orgMapping'}
              control={control}
              render={({ field: { ref, ...field } }) => {
                return <AssertionEditorRow {...field} label="Org mapping" width={60} />;
              }}
            />
          </div>
        )}
      </div>
      <Field
        label="Allowed organizations"
        description="List of comma- or space-separated SAML organization names. User should be a member of at least one organization to log in."
      >
        <Input {...register('allowedOrganizations')} id="allowedOrganizations" width={60} />
      </Field>
      <Field
        label="Name identifier format"
        description="Name identifier formats control how the users at identity provider are mapped to users in Grafana"
      >
        <InputControl
          name={'nameIdFormat'}
          control={control}
          render={({ field: { ref, onChange, ...field } }) => {
            return (
              <Select
                {...field}
                onChange={(option: SelectableValue<string>) => {
                  onChange(option.value);
                }}
                width={30}
                options={nameIdFormatOptions}
              />
            );
          }}
        />
      </Field>
      <Field label="Skip organization role sync">
        <Switch {...register('skipOrgRoleSync')} defaultChecked={skipOrgRoleSync} id="skipOrgRoleSync" />
      </Field>
    </SAMLForm>
  );
};

const getStyles = (theme: GrafanaTheme2) => {
  return {
    wrapper: css`
      width: 100%;
    `,
    description: css`
      color: ${theme.colors.text.secondary};
      margin-bottom: ${theme.spacing(2)};
      font-size: ${theme.typography.bodySmall.fontSize};
      width: ${theme.spacing(80)};
    `,
    mappingContainer: css`
      background: ${theme.colors.background.secondary};
      padding: ${theme.spacing(2)};
      margin-bottom: ${theme.spacing(4)};
    `,
    mappingSection: css`
      margin-bottom: ${theme.spacing(2)};
    `,
    mappingHeader: css`
      margin-bottom: ${theme.spacing(2)};
    `,
    assertionEditorRow: css`
      display: flex;
      margin-bottom: ${theme.spacing(1)};
    `,
  };
};

export default connector(AssertionMappingUnconnected);
