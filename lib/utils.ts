export function formatToTimeAgo(date: string) {
  const dayInMins = 1000 * 60 * 60 * 24;
  const time = new Date(date).getTime();
  const now = new Date().getTime();
  const diff = Math.round((time - now) / dayInMins);

  const formatter = new Intl.RelativeTimeFormat('ko');
  return formatter.format(diff, "days");
}

export function formatToWon(price: number) {
  return price.toLocaleString('ko-KR');
}