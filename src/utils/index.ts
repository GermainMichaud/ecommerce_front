/**
 * @param price Price in cents
 * @param currency Currency code
 * @returns Price
 */
export const formatPrice = (price: number, locale = 'fr-FR', currency = '€'): string => {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(price / 100);
};
