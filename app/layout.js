import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('http://salauddin.vercel.app'),
  title: {
    default: 'MD. Salauddin — Software Engineer',
    template: '%s | MD. Salauddin',
  },
  description:
    'MD. Salauddin is a Software Engineer specializing in full-stack development, backend engineering, DevOps, AI-powered systems, and scalable web applications.',
  keywords: [
    'MD. Salauddin',
    'Software Engineer',
    'Full-Stack Developer',
    'Backend Engineer',
    'Django REST Framework',
    'Next.js',
    'React',
    'Python',
    'DevOps',
    'Docker',
    'AI Systems',
    'pgvector',
    'Bangladesh Software Engineer',
  ],
  authors: [{ name: 'MD. Salauddin', url: 'http://salauddin.vercel.app' }],
  creator: 'MD. Salauddin',
  alternates: {
    canonical: 'http://salauddin.vercel.app',
  },
  openGraph: {
    title: 'MD. Salauddin — Software Engineer',
    description:
      'MD. Salauddin is a Software Engineer specializing in full-stack development, backend engineering, DevOps, AI-powered systems, and scalable web applications.',
    url: 'http://salauddin.vercel.app',
    siteName: 'MD. Salauddin Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MD. Salauddin — Software Engineer',
    description:
      'MD. Salauddin is a Software Engineer specializing in full-stack development, backend engineering, DevOps, AI-powered systems, and scalable web applications.',
    creator: '@salauddin85',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0d12' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Inline script to prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  if (storedTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background-dark text-text-primary-dark transition-colors duration-200">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
