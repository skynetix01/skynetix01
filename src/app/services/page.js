// app/services/page.jsx
import styles from '../../../styles/Service.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const servicesData = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Services',
    image: '/assets/service/digi-mar.jpg',
    features: [
      'Targeted online campaigns',
      'PPC and email marketing',
      'Data-driven growth strategies',
    ],
  },
  {
    id: 'website-development',
    title: 'Website Development Services',
    image: '/assets/service/web-dev.jpg',
    features: [
      'Custom, responsive websites',
      'E-commerce and CMS solutions',
      'Optimized for performance',
    ],
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing Services',
    image: '/assets/service/graphic-design.jpg',
    features: [
      'Branding and logo design',
      'Social media graphics',
      'Print and digital assets',
    ],
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    image: '/assets/service/seo.jpg',
    features: [
      'Keyword research and optimization',
      'On-page and off-page SEO',
      'Improved search rankings',
    ],
  },
  // {
  //   id: 'social-media-management',
  //   title: 'Social Media Management',
  //   image: '/assets/service/smm.jpg',
  //   features: [
  //     'Content scheduling and posting',
  //     'Audience engagement strategies',
  //     'Analytics and growth tracking',
  //   ],
  // },
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
                  <Link href={`/services/${service.id}`} className={styles.serviceLink}>
                    Know More
                  </Link>
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