import {VERSION} from '@ajf/core';

/** This ajf version will be used in footer and stackblitz. */
export const ajfVersion = VERSION.full;

/** Version information with title and redirect url */
export interface VersionInfo {
  url: string;
  title: string;
}
