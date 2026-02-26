// components/Services.jsx
import styles from '../styles/Home.module.css'; // Adjusted to match Home component's CSS module path
import Link from 'next/link';

export const servicesData = [
  {
    id: 'website-development',
    name: 'website-development',
    icon: '🌐',
    title: 'Website Development',
    description: [
      'Basic website and business website (4-6 pages)',
      'Basic and advanced e-commerce website development',
      'Mobile responsive and WhatsApp integration',
      'SEO-ready structure for stronger visibility',
    ],
  },
  {
    id: 'digital-marketing',
    name: 'digital-marketing',
    icon: '📈',
    title: 'Digital Marketing',
    description: [
      'Social media management (10/20 posts)',
      'Google Ads setup and lead campaigns',
      'Facebook and Instagram ad management',
      'Monthly complete digital marketing packages',
    ],
  },
  {
    id: 'graphic-designing',
    name: 'graphic-designing',
    icon: '🎨',
    title: 'Graphic Designing',
    description: [
      'Logo and complete brand identity assets',
      'Social media post and ad creatives',
      'Poster and banner design services',
      'Branding kits for growing businesses',
    ],
  },
  {
    id: 'website-marketing-combo',
    name: 'website-marketing-combo',
    icon: '🚀',
    title: 'Website + Marketing Combo',
    description: [
      'Basic website + digital marketing combo',
      '4-6 page business website + digital marketing',
      'Basic e-commerce + digital marketing combo',
      'Advanced e-commerce + digital marketing combo',
    ],
  },
];

export const Services = () => {
  return (
    <div className={styles.servicesFlex}>
      {servicesData.map((service) => (
        <div key={service.name} className={styles.serviceCard}>
          <div className={styles.serviceIcon}>{service.icon}</div>
          <h3>{service.title}</h3>
          <div className={styles.serviceDetails}>
            {service.description.map((detail, index) => (
              <div key={index} className={styles.serviceDetailItem}>
                <span className={styles.detailIcon}>✔</span>
                <span className={styles.detailText}>{detail}</span>
              </div>
            ))}
          </div>
          <div className={styles.learnMore}>

          <Link href={`/services/${service.id}`}>
            <p className={styles.serviceLink}>Know More</p>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;