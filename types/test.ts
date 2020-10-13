import * as OneDrive from "./index";
import { DRIVE_TYPE } from "./interfaces";

function ab() {
  OneDrive.items.delete({
    accessToken: "123",
    itemId: "123",
    drive: DRIVE_TYPE.me,
    driveId: "123",
  });

  OneDrive.items.partialDownload({
    accessToken: "",
    bytesFrom: 0,
    bytesTo: 123,
    graphDownloadURL: "123",
    itemId: "123",
  });

  OneDrive.items.delete({
    accessToken: "",
    itemId: "",
  });
}
