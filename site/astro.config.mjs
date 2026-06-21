import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site: 'https://izenuae.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'ar'],
    routing: { prefixDefaultLocale: true }
  }
});
