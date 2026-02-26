// app/services/page.jsx
import styles from '../../../styles/Service.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const servicesData = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Services',
    image: '/assets/service/digi-mar.jpg',
    price: 'Starting from ₹2,000 / month',
    features: [
      '10/20 posts social media management packages',
      'Google Ads and Meta ads campaign setup',
      'Complete marketing plans for monthly growth',
    ],
  },
  {
    id: 'website-development',
    title: 'Website Development Services',
    image: '/assets/service/web-dev.jpg',
    price: 'Starting from ₹2,000',
    features: [
      'Basic website, business website (4-6 pages)',
      'Basic e-commerce and advanced e-commerce websites',
      'Mobile responsive and SEO-ready development',
    ],
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing Services',
    image: '/assets/service/graphic-design.jpg',
    price: 'Starting from ₹150',
    features: [
      'Logo and branding design',
      'Social media post creatives',
      'Poster and banner design for campaigns',
    ],
  },
  {
    id: 'website-marketing-combo',
    title: 'Website + Digital Marketing Combo',
    image: '/assets/service/seo.jpg',
    price: 'Starting from ₹12,000 (first month)',
    features: [
      'All 4 combo packages in one service category',
      'Website + marketing plans for consistent growth',
      'Best for new and scaling businesses',
    ],
  },
];

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      <section className={`${styles.introSection} ${styles.visible}`}>
        <div className={styles.introContent}>
          <h1 className={styles.introTitle}>Our Services</h1>
          <p className={styles.introText}>Innovative solutions to propel your success.</p>
        </div>
      </section>

      <section className={`${styles.servicesSection} ${styles.visible}`}>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className={styles.serviceCard}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={200}
                    className={styles.serviceImage}
                    priority={index === 0}
                  />
                  <div className={styles.cardOverlay}></div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <ul className={styles.featureList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>{feature}</li>
                    ))}
                  </ul>
                  <div className={styles.cardFooter}>
                    <p className={styles.servicePrice}>{service.price}</p>
                    <Link href={`/services/${service.id}`} className={styles.serviceLink}>
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.ctaSection} ${styles.visible}`}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Looking for Something Unique?</h2>
          <p className={styles.ctaText}>
            Let’s craft a custom solution tailored to your vision.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}