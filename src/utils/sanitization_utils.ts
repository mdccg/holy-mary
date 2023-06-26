const sanitize = (value: string): string => (
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim()
);

export const isSimilar = (value: string, search: string): boolean => (
  sanitize(value).includes(sanitize(search))
);

export const capitalize = (value: string) => value.at(0)?.toUpperCase() + value.slice(1);
