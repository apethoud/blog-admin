export interface Post {
  title: string;
  slug: string;
}

export type InProgressPost = Partial<Post>

export interface Paragraph {
  body: string;
  ui_order: number;
  post_id: number;
}

export type Paragraphs = Array<Paragraph>

export type InProgressParagraphs = Partial<Paragraphs>