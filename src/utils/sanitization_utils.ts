const sanitize = (value: string): string => (
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim()
);

export const isSimilar = (value: string, search: string): boolean => (
  sanitize(value).includes(sanitize(search))
);