/**
 * Formats today's date using the Persian calendar and locale.
 * @returns The localized Persian date string.
 */
export function getTodayPersianDate(): string {
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const [year, , day, , month, , weekday] = formatter.formatToParts(new Date())

  return `${weekday?.value}، ${month?.value} ${day?.value} ${year?.value}`
}
