import './globals.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { companyInfo } from '../data/companyData';

export const metadata = {
  metadataBase: new URL(companyInfo.website),
  alternates: {
    canonical: 'https://ameyy.in',
  },
  title: {
    default: 'Ameyy Digital Services | Software Development & IT Services',
    template: '%s | Ameyy Digital Services',
  },
  description:
    'Ameyy Digital Services is a Tamil Nadu-based software development and IT services enterprise building websites, web applications, e-commerce platforms and custom business software.',
  keywords: [
    'Ameyy Digital Services',
    'Software Development Company Chennai',
    'IT Services Nagapattinam',
    'Custom Web Application Development',
    'E-Commerce Development India',
    'Business Management Systems',
  ],
  authors: [{ name: 'Ameyy Digital Services', url: companyInfo.website }],
  creator: 'Ameyy Digital Services',
  publisher: 'Ameyy Digital Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Ameyy Digital Services | Software Development & IT Services',
    description:
      'Ameyy Digital Services is a Tamil Nadu-based software development and IT services enterprise building websites, web applications, e-commerce platforms and custom business software.',
    url: companyInfo.website,
    siteName: 'Ameyy Digital Services',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ameyy Digital Services | Software Development & IT Services',
    description:
      'Ameyy Digital Services is a Tamil Nadu-based software development and IT services enterprise building websites, web applications, e-commerce platforms and custom business software.',
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
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Ameyy Digital Services',
    url: 'https://ameyy.in',
    logo: 'https://ameyy.in/favicon.svg',
    image: 'https://ameyy.in/favicon.svg',
    description: 'Software development and IT services enterprise based in Chennai and Nagapattinam, Tamil Nadu.',
    telephone: '+918883280816',
    email: 'ameyy.support@gmail.com',
    priceRange: '$$',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'NO 55 NARAYANA SAMY NAGAR VILLAGE HIGH ROAD SHOLINGANALLUR',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        postalCode: '600119',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '1/176 Vairavan Kadu Kameswaram Thirupoondi-East',
        addressLocality: 'Nagapattinam',
        addressRegion: 'Tamil Nadu',
        postalCode: '611110',
        addressCountry: 'IN',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:30',
      closes: '18:30',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
