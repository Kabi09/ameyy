import ServiceDetail from '../../../components/ServiceDetail/ServiceDetail';
import { allServicesDetailData, getServiceJsonLd } from '../../../data/servicesDetailData';

const serviceData = allServicesDetailData['ui-ux-development'];

export const metadata = {
  title: {
    absolute: serviceData.metaTitle,
  },
  description: serviceData.metaDescription,
  keywords: serviceData.keywords,
  alternates: {
    canonical: `https://www.ameyy.in/services/${serviceData.slug}`,
  },
  openGraph: {
    title: serviceData.metaTitle,
    description: serviceData.metaDescription,
    url: `https://www.ameyy.in/services/${serviceData.slug}`,
    siteName: 'Ameyy Digital Services',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: serviceData.metaTitle,
    description: serviceData.metaDescription,
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

export default function UiUxPage() {
  const jsonLdSchemas = getServiceJsonLd('ui-ux-development');
  const serviceWithSchemas = { ...serviceData, jsonLdSchemas };

  return <ServiceDetail service={serviceWithSchemas} />;
}
