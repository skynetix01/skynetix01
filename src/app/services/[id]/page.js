'use client';

import styles from '../../../../styles/serviceDetail.module.css';
import Image from 'next/image';
import ServiceRequestForm from '../../../../components/ServiceRequestForm';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

const servicesData = {
  'digital-marketing': {
    title: 'Digital Marketing Services',
    subtitle: 'Driving your brand’s growth through strategic online campaigns.',
    pricing: [
      'Social Media Management (10 posts/month) – ₹2,000',
      'Social Media Management (20 posts/month) – ₹4,000',
      'Google Ads Setup + Campaign – ₹3,000',
      'Instagram/Facebook Ads – ₹2,500',
      'Complete Digital Marketing Package – ₹10,000 – ₹20,000+',
    ],
    examples: [
      { src: '/assets/work/g7.png', caption: 'Moti Mahal Delux Advertisement' },
      { src: '/assets/work/g11.png', caption: 'Festival Safety Campaign' },
      { src: '/assets/work/g19.png', caption: 'Food Promo Design' },
    ],
  },
  'website-development': {
    title: 'Website Development Services',
    subtitle: 'Building your digital presence with precision and creativity.',
    pricing: [
      '1 Page Landing Website – ₹2,000',
      '4 Page Business Website – ₹3,000',
      '6 Page Business Website – ₹5,000',
      'E-commerce Website (Basic) – ₹8,000',
      'E-commerce Website (Advanced) – ₹15,000+',
    ],
    examples: [
      { src: '/assets/work/w1.png', caption: 'Motion View Ventures Website' },
      { src: '/assets/work/w2.png', caption: 'WebXPRT Website' },
      { src: '/assets/work/w3.png', caption: 'Skynetix Website' },
    ],
  },
  'graphic-designing': {
    title: 'Graphic Designing Services',
    subtitle: 'Creating visuals that define your brand’s identity.',
    pricing: [
      'Logo Design – ₹1,000',
      'Social Media Post Design (1) – ₹150',
      'Social Media Post Design (10) – ₹1,200',
      'Poster / Banner Design – ₹500',
      'Complete Branding Kit – ₹5,000 – ₹10,000',
    ],
    examples: [
      { src: '/assets/work/g7.png', caption: 'Moti Mahal Delux Advertisement' },
      { src: '/assets/work/g11.png', caption: 'Festival Safety Campaign' },
      { src: '/assets/work/g19.png', caption: 'Food Promo Design' },
    ],
  },
  'seo-services': {
    title: 'SEO Services',
    subtitle: 'Boosting your visibility on search engines.',
    pricing: [
      'Basic SEO (5 keywords) – ₹1,500/month',
      'Standard SEO (10 keywords) – ₹3,000/month',
      'Advanced SEO (20 keywords) – ₹7,000/month',
      'Local SEO (Google Business Profile) – ₹2,000',
      'Complete SEO Package – ₹10,000+',
    ],
    examples: [
      { src: '/assets/work/s1.png', caption: 'Top Google Ranking' },
      { src: '/assets/work/s2.png', caption: 'Brand Awareness' },
      { src: '/assets/work/s3.png', caption: 'SEO Growth Report' },
    ],
  },
};

export default function ServiceDetail() {
  const params = useParams();

  const service = useMemo(() => {
    if (!params?.id) return null;
    return servicesData[params.id];
  }, [params]);

  if (!service) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.serviceDetailPage}>
      <h1>{service.title}</h1>
      <p>{service.subtitle}</p>

      {service.pricing.map((p, i) => (
        <div key={i}>{p}</div>
      ))}

      {service.examples.map((ex, i) => (
        <div key={i}>
          <Image src={ex.src} alt={ex.caption} width={400} height={300} />
          <p>{ex.caption}</p>
        </div>
      ))}

      <ServiceRequestForm serviceTitle={service.title} />
    </div>
  );
}