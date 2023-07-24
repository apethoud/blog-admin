import dayjs from "dayjs";
import { InProgressPostElements } from "./create-new-post/interfaces";

export const formatDate = (date, dateTokenString) => {
  return dayjs(date).format(dateTokenString || 'MMM D YYYY');
}

export const convertTitleToSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/[ ]/g, "-")
}

export const convertTextBodyToParagraphs = (body: string): { body: string; type: "paragraph" }[] => {
  const arrayOfStrings = body.split(/\r\n|\r|\n/).filter(item => item !== "");
  return arrayOfStrings.map((str, index) => {
    return { body: str, type: "paragraph" }
  })
}

export const addUiOrderAndPostId = (newPostElements: InProgressPostElements, postId: number) => {
  return newPostElements.map((postElement, index) => {
    postElement.post_id = postId;
    postElement.ui_order = index;
    return postElement;
  })
}

export const filterPostElementsByType = (postElements: InProgressPostElements, type: ("paragraph" | "image")) => {
  const filtered = postElements.filter(postElement => postElement.type === type)
  return filtered.map(({ type, ...remaining}) => remaining)
}