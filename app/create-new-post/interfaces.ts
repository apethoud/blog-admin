export interface Post {
  title: string;
  slug: string;
}

export type InProgressPost = Partial<Post>

export interface Paragraph {
  body: string;
  post_id: number;
  type?: "paragraph";
  ui_order: number;
}

export type InProgressParagraph = Partial<Paragraph>

export interface Image {
  post_id: number;
  type?: "image";
  ui_order: number;
  url: string;
}

export type InProgressImage = Partial<Image>

export type PostElement = (Paragraph | Image)

export type InProgressPostElement = (Partial<Paragraph> | Partial<Image>)

export type PostElements = (Paragraph | Image)[]

export type InProgressPostElements = (Partial<Paragraph> | Partial<Image>)[]

