import React from 'react'
import { useTranslations } from 'next-intl';

export default function MyComponent() {
    const t = useTranslations();
    return (
        <h1>{t('page.hello-world')}</h1>
    )
}
