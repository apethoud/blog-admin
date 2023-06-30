import dayjs from "dayjs";

export const formatDate = (date, dateTokenString) => {
  return dayjs(date).format(dateTokenString || 'MMM D YYYY');
}

export const convertTitleToSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/[ ]/g, "-")
}

export const convertTextBodyToParagraphs = (body: string) => {
  return body.split(/\r\n|\r|\n/).filter(item => item !== "")
}