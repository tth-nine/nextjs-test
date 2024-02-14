'use client'

import { Link, locales } from '@/navigation';
import { useTranslations, useLocale } from 'next-intl';

export default function LocaleSwitcher() {
  const t = useTranslations();
  const locale = useLocale();
  const differentLocale = locale === locales[0] ? "en": "da"
  return (
    <section>
      <Link locale={differentLocale} href="/" >{t('locales.change')}</Link>
    </section>
  )
}
