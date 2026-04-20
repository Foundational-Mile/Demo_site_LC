const BASE_URL = import.meta.env.BASE_URL ?? '/';
const normalizedBase = BASE_URL.endsWith('/') ? BASE_URL : `${BASE_URL}/`;
const baseWithoutTrailingSlash = normalizedBase.length > 1 ? normalizedBase.slice(0, -1) : '/';

const hasProtocol = (value: string) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(value);

export const withBase = (path: string): string => {
  if (!path) return normalizedBase;
  if (path.startsWith('#') || path.startsWith('?') || hasProtocol(path) || path.startsWith('//')) return path;
  if (
    baseWithoutTrailingSlash !== '/' &&
    (path === baseWithoutTrailingSlash || path.startsWith(`${baseWithoutTrailingSlash}/`))
  ) {
    return path;
  }

  const normalizedPath = path === '/' ? '' : path.replace(/^\/+/, '');
  return `${normalizedBase}${normalizedPath}`;
};

export const withoutBase = (path: string): string => {
  if (!path) return '/';
  if (baseWithoutTrailingSlash === '/') return path;
  if (path === baseWithoutTrailingSlash) return '/';
  if (path.startsWith(`${baseWithoutTrailingSlash}/`)) {
    return path.slice(baseWithoutTrailingSlash.length) || '/';
  }

  return path;
};
