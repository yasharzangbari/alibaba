export const toPersianNumber = (
  number?: number | string
): string | undefined => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return number?.toString().replace(/\d/g, (x: any) => farsiDigits[x]);
};
