import dayjs from "dayjs";

export const formatDate = (date, dateTokenString) => {
  return dayjs(date).format(dateTokenString || 'MMM D YYYY');
}