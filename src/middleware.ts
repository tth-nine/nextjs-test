import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['da', 'en'],
  defaultLocale: 'da',
  localePrefix: 'as-needed'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(da|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};