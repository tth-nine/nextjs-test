import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['da', 'en'],
  defaultLocale: 'da'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(da|en)/:path*']
};