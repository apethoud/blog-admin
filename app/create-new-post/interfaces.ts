export interface Post {
  title: string;
  slug: string;
  paragraphs: {
    [key: string]: Paragraph
  }
}

export type InProgressPost = Partial<Post>

interface Paragraph {
  body: string;
  uiOrder: number;
}