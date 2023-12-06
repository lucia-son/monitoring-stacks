import React from 'react';

import { Alert } from '@grafana/ui';
import { SettingsError } from 'app/types';

interface Props {
  error?: SettingsError;
  onReset?: () => void;
}

export const ValidationErrorContainer = ({ error, onReset }: Props): JSX.Element => {
  return (
    <div>
      {error && (
        <Alert title={error.message} onRemove={onReset} severity="warning">
          {error.errors?.map((e, i) => (
            <div key={i}>{e}</div>
          ))}
        </Alert>
      )}
    </div>
  );
};
