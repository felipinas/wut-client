import createMiddleware from 'next-intl/middleware';

import { locales } from './intl/utils';
import { localePrefix } from './intl/navigation';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  localePrefix,

  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en)/:path*']
};
