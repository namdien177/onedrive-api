// This file is the typescript definition of /lib/items/index.js
import { BaseParameters, BaseWithDrive, DownloadBytes, ITEM_ID, ParentParameters } from "./interfaces";

export * as TYPES from "./interfaces";

export declare namespace items {
  export function createFolder<returnType = any>(
    options: BaseParameters & {
      // New folder name
      name: string;
      // Item or folder id
      rootItemId?: ITEM_ID;
    }
  ): Promise<returnType>;

  export function createFolder<returnType = any>(
    options: BaseWithDrive & {
      // New folder name
      name: string;
      // Item or folder id
      rootItemId?: ITEM_ID;
    }
  ): Promise<returnType>;

  export function download(
    options: BaseParameters & {
      // the item id
      itemId: string;
    }
  ): Promise<NodeJS.ReadableStream>;

  export function getMetadata<itemMeta = any>(
    options: BaseParameters & {
      // the item id
      itemId: string;
    }
  ): Promise<itemMeta>;

  export function getMetadata<itemMeta = any>(
    options: BaseWithDrive & {
      // the item id
      itemId: string;
    }
  ): Promise<itemMeta>;

  /**
   * List children of a folder.
   * @param options
   */
  export function listChildren<returnType = any>(
    options: BaseParameters & {
      // Item or folder id
      itemId?: ITEM_ID;
    }
  ): Promise<returnType>;
  export function listChildren<returnType = any>(
    options: BaseWithDrive & {
      // Item or folder id
      itemId?: ITEM_ID;
    }
  ): Promise<returnType>;

  export function download<itemMeta = any>(
    options: BaseWithDrive & {
      // the item id
      itemId: string;
    }
  ): Promise<NodeJS.ReadableStream>;

  /**
   * Download item content partially. You must either provide
   * graphDownloadURL or the itemId to download the file.
   *
   * If only the itemId is provided, the function will try to get
   * the download URL for you with additional getMetadata() function call.
   * @param options
   */
  export function partialDownload(
    options: BaseParameters &
      DownloadBytes & {
        // the item id
        itemId: string;
      }
  ): Promise<NodeJS.ReadableStream>;

  /**
   * Download item content partially. You must either provide
   * graphDownloadURL or the itemId to download the file.
   *
   * If only the itemId is provided, the function will try to get
   * the download URL for you with additional getMetadata() function call.
   * @param options
   */
  export function partialDownload(
    options: BaseWithDrive &
      DownloadBytes & {
        // the item id
        itemId: string;
      }
  ): Promise<NodeJS.ReadableStream>;

  /**
   * Download item content partially. You must either provide
   * graphDownloadURL or the itemId to download the file.
   *
   * If only the itemId is provided, the function will try to get
   * the download URL for you with additional getMetadata() function call.
   * @param options
   */
  export function partialDownload(
    options: BaseParameters &
      DownloadBytes & {
        // @microsoft.graph.downloadUrl of the item
        graphDownloadURL: string;
        // the item id
        itemId?: string;
      }
  ): Promise<NodeJS.ReadableStream>;

  /**
   * Download item content partially. You must either provide
   * graphDownloadURL or the itemId to download the file.
   *
   * If only the itemId is provided, the function will try to get
   * the download URL for you with additional getMetadata() function call.
   * @param options
   */
  export function partialDownload(
    options: BaseWithDrive &
      DownloadBytes & {
        // @microsoft.graph.downloadUrl of the item
        graphDownloadURL: string;
        // the item id
        itemId?: string;
      }
  ): Promise<NodeJS.ReadableStream>;

  export function update<updatedItems = any>(
    options: BaseParameters & {
      // the item id
      itemId: string;
      // the object contains fields to update the item.
      toUpdate: object;
    }
  ): Promise<updatedItems>;

  export function update<updatedItems = any>(
    options: BaseWithDrive & {
      // the item id
      itemId: string;
      // the object contains fields to update the item.
      toUpdate: object;
    }
  ): Promise<updatedItems>;

  /**
   * Create file with session upload.
   * Use this for the files over 4MB.
   * This is a synchronous wrapper around asynchronous method,
   * which means that on the failed upload you can't resume
   * the upload but need to retry the implementation.
   * I am accepting PRs for asynchronous implementation
   * @param options
   * @param progress
   */
  export function uploadSession<uploadedItem = any>(
    options: BaseParameters & {
      // New folder name
      filename: string;
      // byte size
      fileSize: number;
      // the file stream
      readableStream: NodeJS.ReadableStream;
      /**
       * Chunks to upload per request.
       * More chunks per request requires more RAM
       */
      chunksToUpload?: number;
    },
    progress: (chunk: number) => void
  ): Promise<uploadedItem>;

  /**
   * Create file with session upload.
   * Use this for the files over 4MB.
   * This is a synchronous wrapper around asynchronous method,
   * which means that on the failed upload you can't resume
   * the upload but need to retry the implementation.
   * I am accepting PRs for asynchronous implementation
   * @param options
   * @param progress
   */
  export function uploadSession<uploadedItem = any>(
    options: BaseParameters &
      ParentParameters & {
        // New folder name
        filename: string;
        // byte size
        fileSize: number;
        // the file stream
        readableStream: NodeJS.ReadableStream;
        /**
         * Chunks to upload per request.
         * More chunks per request requires more RAM
         */
        chunksToUpload?: number;
      },
    progress: (chunk: number) => void
  ): Promise<uploadedItem>;

  /**
   * Create file with session upload.
   * Use this for the files over 4MB.
   * This is a synchronous wrapper around asynchronous method,
   * which means that on the failed upload you can't resume
   * the upload but need to retry the implementation.
   * I am accepting PRs for asynchronous implementation
   * @param options
   * @param progress
   */
  export function uploadSession<uploadedItem = any>(
    options: BaseWithDrive &
      ParentParameters & {
        // New folder name
        filename: string;
        // byte size
        fileSize: number;
        // the file stream
        readableStream: NodeJS.ReadableStream;
        /**
         * Chunks to upload per request.
         * More chunks per request requires more RAM
         */
        chunksToUpload?: number;
      },
    progress: (chunk: number) => void
  ): Promise<uploadedItem>;

  export function uploadSimple<uploadedItem = any>(
    options: BaseParameters & {
      // New folder name
      name: string;
      // the file stream
      readableStream: NodeJS.ReadableStream;
      // Item or folder id
      rootItemId?: ITEM_ID;
    }
  ): Promise<uploadedItem>;

  export function uploadSimple<uploadedItem = any>(
    options: BaseParameters &
      ParentParameters & {
        // New folder name
        name: string;
        // the file stream
        readableStream: NodeJS.ReadableStream;
        // Item or folder id
        rootItemId?: ITEM_ID;
      }
  ): Promise<uploadedItem>;

  export function uploadSimple<uploadedItem = any>(
    options: BaseWithDrive &
      ParentParameters & {
        // New folder name
        filename: string;
        // the file stream
        readableStream: NodeJS.ReadableStream;
        // Item or folder id
        rootItemId?: ITEM_ID;
      }
  ): Promise<uploadedItem>;

  function _delete(
    options: BaseParameters & {
      // the item id
      itemId: string;
    }
  ): Promise<void>;

  function _delete(
    options: BaseWithDrive & {
      // the item id
      itemId: string;
    }
  ): Promise<void>;

  export { _delete as delete };
}
