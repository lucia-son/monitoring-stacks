import { css } from '@emotion/css';
import React from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { InlineField, Input, useStyles2 } from '@grafana/ui';

interface Props {
  value?: string;
  label: string;
  placeholder?: string;
  width?: number;
  onChange: (value: string) => void;
}

export const AssertionEditorRow = ({ value, label, placeholder, width, onChange }: Props): JSX.Element => {
  const styles = useStyles2(getStyles);

  const onChangeInternal = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    onChange(value);
  };

  return (
    <div className={styles.assertionEditorRow}>
      <InlineField label={label} labelWidth={16}>
        <Input
          width={width || 30}
          id="assertionAttributeNameValue"
          value={value || ''}
          onChange={onChangeInternal}
          placeholder={placeholder}
        />
      </InlineField>
    </div>
  );
};

const getStyles = (theme: GrafanaTheme2) => {
  return {
    assertionEditorRow: css`
      display: flex;
      margin-bottom: ${theme.spacing(1)};
    `,
    inputLabel: css`
      color: ${theme.components.input.text};
      background: ${theme.components.input.background};
    `,
  };
};
