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
  const { id } = useParams();

  const service = useMemo(() => {
    if (!id) return null;
    return servicesData[id];
  }, [id]);

  if (!service) {
    return (
      <div className={styles.serviceDetailPage}>
        <p style={{ textAlign: 'center', padding: '4rem' }}>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.serviceDetailPage}>

      {/* ===== HERO ===== */}
      <section className={styles.focusSection}>
        <div className={styles.focusContent}>
          <h1 className={styles.focusTitle}>{service.title}</h1>
          <p className={styles.focusSubtitle}>{service.subtitle}</p>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className={styles.pricingSection}>
        <div className={styles.pricingContainer}>
          <h2 className={styles.sectionTitle}>Pricing</h2>
          <div className={styles.pricingRow}>
            {service.pricing.map((item, index) => (
              <div key={index} className={styles.pricingItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOTE ===== */}
      {service.note && (
        <section className={styles.noteSection}>
          <div className={styles.noteContainer}>
            <p className={styles.noteText}>⚠️ {service.note}</p>
          </div>
        </section>
      )}

      {/* ===== EXAMPLES ===== */}
      <section className={styles.examplesSection}>
        <div className={styles.examplesContainer}>
          <h2 className={styles.sectionTitle}>Examples of Our Work</h2>
          <div className={styles.examplesGrid}>
            {service.examples.map((example, index) => (
              <div key={index} className={styles.exampleItem}>
                <Image
                  src={example.src}
                  alt={example.caption}
                  width={400}
                  height={300}
                  className={styles.exampleImage}
                />
                <p className={styles.exampleCaption}>{example.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REQUEST FORM ===== */}
      <section className={styles.requestSection}>
        <div className={styles.requestContainer}>
          <h2 className={styles.sectionTitle}>Request This Service</h2>
          <ServiceRequestForm serviceTitle={service.title} />
        </div>
      </section>

    </div>
  );
}