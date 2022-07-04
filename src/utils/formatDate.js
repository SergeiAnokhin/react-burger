export function formatDate(ISOString) {
  const millisecondsInDay = 86400000;
  const currentDate = new Date();
  const orderDate = new Date(ISOString);
  const beginOfCurrentDate =
    currentDate.getTime() - (currentDate.getTime() % millisecondsInDay);
  const diffInMsc = beginOfCurrentDate - new Date(ISOString).getTime();
  let diffDays = diffInMsc / millisecondsInDay;
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
