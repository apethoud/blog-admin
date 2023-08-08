import dayjs from "dayjs";
import { InProgressPostElements } from "./create-new-post/interfaces";

export const formatDate = (date: Date | undefined, dateTokenString?: string) => {
  return dayjs(date).format(dateTokenString || 'MMM D YYYY');
}

export const convertTitleToSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/[ ]/g, "-")
}

export const convertTextBodyToParagraphs = (body: string): { body: string, ui_order: number }[] => {
  const arrayOfStrings = body.split(/\n\n/).filter(item => item !== "");
  return arrayOfStrings.map((str, index) => {
    return { body: str, type: "paragraph", ui_order: index }
  })
}

export const addPostId = (newPostElements: InProgressPostElements, postId: number) => {
  return newPostElements.map((postElement) => {
    postElement.post_id = postId;
    return postElement;
  })
}

export const removeElementType = (postElements: InProgressPostElements, type: ("paragraph" | "image")) => {
  return postElements.map(({ type, ...remaining}) => remaining)
}
