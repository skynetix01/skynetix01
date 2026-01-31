// components/Services.jsx
import styles from '../styles/Home.module.css'; // Adjusted to match Home component's CSS module path
import Link from 'next/link';

export const servicesData = [
  {
    id: 'website-development',
    name: 'web-development',
    icon: '🌐',
    title: 'Web Development',
    description: [
      'Responsive design for all devices',
      'Integration with modern frameworks (React, Vue, etc.)',
      'SEO optimization',
      'E-commerce solutions',
    ],
  },
  {
    id: 'digital-marketing',
    name: 'digital-marketing',
    icon: '📈',
    title: 'Digital Marketing',
    description: [
      'Social media campaigns',
      'PPC advertising',
      'Content marketing',
      'Analytics and reporting',
    ],
  },
  {
  id: 'graphic-design',
  name: 'graphic-design',
  icon: '🖌️',
  title: 'Graphic Design',
  description: [
    'Logo and brand identity design',
    'Social media creatives & banners',
    'Marketing posters and flyers',
    'Business cards, brochures & print designs',
  ],
}
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