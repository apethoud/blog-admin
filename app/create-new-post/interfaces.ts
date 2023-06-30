export interface Post {
  title: string;
  slug: string;
  paragraphs: {
    [key: string]: Paragraph
  }
}

interface Paragraph {
  body: string;
  uiOrder: number;
}