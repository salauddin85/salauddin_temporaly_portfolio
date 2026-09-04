export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'http://salauddin.vercel.app/sitemap.xml',
  };
}
