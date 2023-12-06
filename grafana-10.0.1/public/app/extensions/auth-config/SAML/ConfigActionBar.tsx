import { css } from '@emotion/css';
import React from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { useStyles2, Badge, Button, BadgeProps, Icon, Tooltip } from '@grafana/ui';

interface Props {
  enabled: boolean;
  configFoundInIniFile?: boolean;
  isNewConfig: boolean;
  onSave: () => void;
  onSaveAndEnable: () => void;
  onEnable: () => void;
  onDisable: () => void;
  onRemove: () => void;
}

export const ConfigActionBar = ({
  enabled,
  configFoundInIniFile,
  isNewConfig,
  onSave,
  onEnable,
  onSaveAndEnable,
  onDisable,
  onRemove,
}: Props): JSX.Element => {
  const styles = useStyles2(getStyles);

  let badgeProps: BadgeProps = { text: 'Disabled', color: 'red', icon: 'times' };
  if (enabled) {
    badgeProps = { text: 'Enabled', color: 'green', icon: 'check' };
  } else if (!isNewConfig) {
    badgeProps = { text: 'Not enabled', color: 'blue' };
  }

  return (
    <>
      <div className={styles.actionBarContainer}>
        <div className={styles.protocolContainer}>
          <span className={styles.protocolLabel}>Protocol</span>
          <span>SAML 2.0</span>
        </div>
        {!isNewConfig && (
          <div className={styles.statusContainer}>
            <span className={styles.statusLabel}>Status</span>
            <Badge {...badgeProps} className={styles.statusBadge} />
          </div>
        )}

        {!enabled && (
          <>
            <Button variant="secondary" onClick={onSave}>
              Save
            </Button>
            <Button variant="primary" onClick={onSaveAndEnable}>
              Save and enable
            </Button>
          </>
        )}
        {enabled && (
          <>
            <Button variant="primary" onClick={onSave}>
              Save and apply
            </Button>
            <Button variant="destructive" fill="outline" onClick={onDisable}>
              Disable
            </Button>
          </>
        )}
        {!isNewConfig && (
          <Button variant="destructive" onClick={onRemove}>
            Discard
          </Button>
        )}
      </div>
      {configFoundInIniFile && (
        <div className={styles.iniFileLabel}>
          <span className={styles.initext}>
            <Tooltip
              content={`Note: Settings enabled in the .ini configuration file may be overwritten by the current settings.`}
            >
              <Icon name="adjust-circle" />
            </Tooltip>
            Configuration found in .ini file
          </span>
        </div>
      )}
    </>
  );
};

const getStyles = (theme: GrafanaTheme2) => {
  return {
    actionBarContainer: css`
      display: flex;
      flexdirection: row;
      gap: ${theme.spacing(1)};
      align-items: center;
      justify-content: flex-end;
    `,
    iniFileLabel: css`
      display: flex;
      color: ${theme.colors.text.primary};
      justify-content: flex-end;
    `,
    tooltipContainer: css`
      padding: ${theme.spacing(0, 1)};
    `,
    statusContainer: css`
      display: flex;
      flex-direction: column;
      font-size: ${theme.typography.bodySmall.fontSize};
      border-left: 1px solid ${theme.colors.border.medium};
      padding: ${theme.spacing(0, 2)};
    `,
    statusBadge: css`
      span {
        font-size: ${theme.typography.size.xs};
      }
    `,
    statusLabel: css`
      color: ${theme.colors.text.secondary};
    `,
    protocolContainer: css`
      display: flex;
      flex-direction: column;
      font-size: ${theme.typography.bodySmall.fontSize};
      padding-right: ${theme.spacing(1)};
    `,
    protocolLabel: css`
      color: ${theme.colors.text.secondary};
    `,
    initext: css`
      font-size: ${theme.typography.bodySmall.fontSize};
      color: ${theme.colors.text.secondary};
      padding: ${theme.spacing(1)} 0; // Add some padding
      max-width: 90%; // Add a max-width to prevent text from stretching too wide
    `,
  };
};
