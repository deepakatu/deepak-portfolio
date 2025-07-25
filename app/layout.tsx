
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deepak Manoharan - Senior Data Scientist & ML Engineer',
  description: 'Senior Data Scientist with 9+ years experience in machine learning, AI, and analytics. Expert in Python, AWS, MLOps, and Generative AI. Currently at Watercare Services Limited, New Zealand.',
  keywords: [
    'Data Scientist',
    'Machine Learning Engineer',
    'Python',
    'AWS',
    'MLOps',
    'Generative AI',
    'New Zealand',
    'Deepak Manoharan',
    'Utilities Analytics',
    'Computer Vision',
    'Time Series Forecasting'
  ],
  authors: [{ name: 'Deepak Manoharan' }],
  creator: 'Deepak Manoharan',
  publisher: 'Deepak Manoharan',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepak-manoharan.github.io',
    title: 'Deepak Manoharan - Senior Data Scientist & ML Engineer',
    description: 'Senior Data Scientist with 9+ years experience in machine learning, AI, and analytics. Expert in Python, AWS, MLOps, and Generative AI.',
    siteName: 'Deepak Manoharan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deepak Manoharan - Data Scientist Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepak Manoharan - Senior Data Scientist & ML Engineer',
    description: 'Senior Data Scientist with 9+ years experience in ML, AI, and analytics. Expert in Python, AWS, MLOps.',
    images: ['/og-image.jpg'],
  },

  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://deepak-manoharan.github.io" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Deepak Manoharan",
              "jobTitle": "Senior Data Scientist & ML Engineer",
              "description": "Senior Data Scientist with 9+ years experience in machine learning, AI, and analytics",
              "url": "https://deepak-manoharan.github.io",
              "sameAs": [
                "https://linkedin.com/in/deepak-manoharan",
                "https://github.com/deepak-manoharan"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Watercare Services Limited"
              },
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "name": "University of Otago"
                },
                {
                  "@type": "CollegeOrUniversity", 
                  "name": "Anna University"
                }
              ],
              "knowsAbout": [
                "Machine Learning",
                "Data Science",
                "Python",
                "AWS",
                "MLOps",
                "Generative AI",
                "Computer Vision",
                "Time Series Forecasting"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        
        {/* Analytics scripts would go here */}
        {/* Google Analytics, Microsoft Clarity, etc. */}
      </body>
    </html>
  );
}
