export function formatDate(value) {
  const msInDay = 86400000;
  const date = new Date();
  const orderDate = new Date(value);
  const beginOfDate = date.getTime() - (date.getTime() % msInDay);
  const diffInMs = beginOfDate - new Date(value).getTime();
  let diffDays = diffInMs / msInDay;
  let daysBetween;
  if (diffDays <= 0) {
    daysBetween = 'Сегодня';
  } else if (diffDays < 1) {
    daysBetween = 'Вчера';
  } else {
    daysBetween = `${Math.trunc(diffDays) + 1} дней назад`;
  }
  const hours = orderDate.getHours();
  const minutes = orderDate.getMinutes();
  return `${daysBetween}, ${hours}:${
    minutes > 9 ? minutes : '0' + minutes
  } i-GMT+3`;
}
