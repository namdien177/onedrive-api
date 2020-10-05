export interface BaseParameters {
  // OneDrive access token
  accessToken: string;
  query?: string;
}

export interface DriveParameters {
  drive: DRIVE_TYPE;
  driveId: string;
}

export interface ParentParameters {
  parentId?: "root" | string;
  parentPath?: string;
}

export type BaseWithDrive = BaseParameters & DriveParameters;

export enum DRIVE_TYPE {
  me = "me",
  drive = "drive",
  group = "group",
  site = "site",
}

export type ITEM_ID = "root" | string;

export interface DownloadBytes {
  bytesFrom: 0 | number;
  bytesTo: number;
}
