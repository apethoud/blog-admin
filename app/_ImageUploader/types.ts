export interface ImageInfo {
  name: string;
  file: File
}

export type InProgressImageInfo = Partial<ImageInfo>