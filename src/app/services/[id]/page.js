'use client';

import styles from '../../../../styles/serviceDetail.module.css';
import Image from 'next/image';
import ServiceRequestForm from '../../../../components/ServiceRequestForm';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

export const servicesData = {
  'website-development': {
    title: 'Website Development Services',
    subtitle: 'Complete website solutions from landing pages to advanced e-commerce stores.',
    description:
      'Choose the website package based on your business size and growth goals.',
    comparisonTitle: 'Website Development Services & Charges',
    typeTables: [
      {
        title: 'Basic Website (Landing Page)',
        headers: ['Service Type', 'Details', 'Pricing'],
        row: [
          'Basic Website (Landing Page)',
          'Single page, mobile responsive, contact/WhatsApp integration, basic SEO setup',
          '₹2,000',
        ],
      },
      {
        title: 'Business Website (4-6 Pages)',
        headers: ['Service Type', 'Details', 'Pricing'],
        row: [
          'Business Website (4-6 Pages)',
          'Home, About, Services, Gallery, Testimonials, Contact; advanced SEO structure',
          '₹5,000 - ₹7,000',
        ],
      },
      {
        title: 'Basic E-commerce Website',
        headers: ['Service Type', 'Details', 'Pricing'],
        row: [
          'Basic E-commerce Website',
          'Product listing, cart, and basic payment gateway integration',
          '₹8,000',
        ],
      },
      {
        title: 'Advanced E-commerce Website',
        headers: ['Service Type', 'Details', 'Pricing'],
        row: [
          'Advanced E-commerce Website',
          'Multiple secure payments, customer accounts, order tracking, coupons, inventory automation, advanced SEO',
          '₹15,000 - ₹20,000+',
        ],
      },
    ],
    planOptions: [
      'Basic Website (Landing Page) - ₹2,000',
      'Business Website (4-6 Pages) - ₹5,000 - ₹7,000',
      'Basic E-commerce Website - ₹8,000',
      'Advanced E-commerce Website - ₹15,000 - ₹20,000+',
    ],
    packages: [
      {
        title: 'Basic Website (Landing Page)',
        pricingLines: ['₹2,000'],
        listTitle: 'Includes',
        list: [
          'Single page layout',
          'Mobile responsive design',
          'Contact/WhatsApp integration',
          'Basic SEO setup',
        ],
        bestFor: 'New businesses starting online',
      },
      {
        title: 'Business Website (4-6 Pages)',
        recommended: true,
        pricingLines: ['₹5,000 - ₹7,000'],
        listTitle: 'Includes',
        list: [
          'Home, About, Services, Gallery, Testimonials, Contact',
          'Mobile responsive design',
          'Contact/WhatsApp integration',
          'Advanced SEO structure',
        ],
        bestFor: 'Growing professional businesses',
      },
      {
        title: 'Basic E-commerce Website',
        pricingLines: ['₹8,000'],
        listTitle: 'Includes',
        list: [
          'Product listing and cart',
          'Basic payment gateway setup',
          'Mobile responsive storefront',
          'Basic SEO setup',
        ],
        bestFor: 'Small businesses starting online sales',
      },
      {
        title: 'Advanced E-commerce Website',
        pricingLines: ['₹15,000 - ₹20,000+'],
        listTitle: 'Includes',
        list: [
          'Multiple secure payment options',
          'Customer accounts and order tracking',
          'Coupons and inventory automation',
          'Advanced SEO setup',
        ],
        bestFor: 'Growing and scalable online stores',
      },
    ],
    examples: [
      { src: '/assets/work/w1.png', caption: 'Motion View Ventures Website' },
      { src: '/assets/work/w2.png', caption: 'WebXPRT Website' },
      { src: '/assets/work/w3.png', caption: 'Skynetix Website' },
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing Services & Charges',
    subtitle: 'Result-focused campaigns to generate visibility, leads, and business growth.',
    description:
      'Our digital marketing services are designed for businesses that want measurable online performance.',
    comparisonTitle: 'Digital Marketing Services & Charges',
    typeTables: [
      {
        title: 'Social Media Management (10 posts/month)',
        headers: ['Service', 'Charge'],
        row: ['Social Media Management (10 posts/month)', '₹2,000 / month'],
      },
      {
        title: 'Social Media Management (20 posts/month)',
        headers: ['Service', 'Charge'],
        row: ['Social Media Management (20 posts/month)', '₹4,000 / month'],
      },
      {
        title: 'Google Ads Setup & Campaign',
        headers: ['Service', 'Charge'],
        row: ['Google Ads Setup & Campaign', '₹3,000'],
      },
      {
        title: 'Facebook / Instagram Ads Management',
        headers: ['Service', 'Charge'],
        row: ['Facebook / Instagram Ads Management', '₹2,500'],
      },
      {
        title: 'Complete Digital Marketing Package',
        headers: ['Service', 'Charge'],
        row: ['Complete Digital Marketing Package', '₹10,000 - ₹20,000 / month'],
      },
    ],
    planOptions: [
      'SMM (10 posts/month) - ₹2,000/month',
      'SMM (20 posts/month) - ₹4,000/month',
      'Google Ads Setup & Campaign - ₹3,000',
      'Facebook / Instagram Ads Management - ₹2,500',
      'Complete Digital Marketing Package - ₹10,000 - ₹20,000/month',
    ],
    packages: [
      {
        title: 'Social Media Management (10 posts/month)',
        pricingLines: ['₹2,000 / month'],
        listTitle: 'Includes',
        list: ['10 branded posts', 'Caption writing', 'Posting support', 'Basic growth guidance'],
      },
      {
        title: 'Social Media Management (20 posts/month)',
        pricingLines: ['₹4,000 / month'],
        listTitle: 'Includes',
        list: ['20 branded posts', 'Caption writing', 'Posting support', 'Engagement-focused content plan'],
      },
      {
        title: 'Google Ads Setup & Campaign',
        pricingLines: ['₹3,000'],
        listTitle: 'Includes',
        list: ['Campaign setup', 'Keyword targeting', 'Ad copy guidance', 'Conversion-focused launch'],
      },
      {
        title: 'Facebook / Instagram Ads Management',
        pricingLines: ['₹2,500'],
        listTitle: 'Includes',
        list: ['Audience setup', 'Ad set management', 'Creative coordination', 'Lead-focused optimization'],
      },
      {
        title: 'Complete Digital Marketing Package',
        recommended: true,
        pricingLines: ['₹10,000 - ₹20,000 / month'],
        listTitle: 'Includes',
        list: ['SMM + Ads management', 'Google visibility support', 'Lead generation planning', 'Monthly optimization'],
      },
    ],
    examples: [
      { src: '/assets/work/g7.png', caption: 'Moti Mahal Delux Advertisement' },
      { src: '/assets/work/g11.png', caption: 'Festival Safety Campaign' },
      { src: '/assets/work/g19.png', caption: 'Food Promo Design' },
    ],
  },
  'website-marketing-combo': {
    title: 'Digital Marketing + Website Development Combos',
    subtitle: 'Combined website and marketing plans designed for faster business growth.',
    description:
      'Choose the combo plan that matches your business stage and monthly growth targets.',
    cardSectionTitle: 'Combo Packages',
    packages: [
      {
        title: 'Basic Website + Digital Marketing',
        pricingLines: ['₹12,000 (First Month)', '₹10,000/month (From Second Month)'],
        listTitle: 'Includes',
        list: [
          'Landing Page Website',
          'Social Media Management',
          'Google Visibility Setup',
          'Lead Generation Support',
        ],
        bestFor: 'New businesses starting online presence',
      },
      {
        title: '4-6 Page Website + Digital Marketing',
        recommended: true,
        pricingLines: ['₹15,000 - ₹20,000 (First Month)', '₹10,000 - ₹13,000/month (From Second Month)'],
        listTitle: 'Includes',
        list: [
          'Professional 6 Page Business Website',
          'Advanced SEO Structure',
          'Social Media Management',
          'Google Ads / Lead Campaign Setup',
          'Conversion Optimization',
        ],
        bestFor: 'Businesses wanting consistent growth and inquiries',
      },
      {
        title: 'Basic E-commerce + Digital Marketing',
        pricingLines: ['₹18,000 (First Month)', '₹10,000/month (From Second Month)'],
        listTitle: 'Includes',
        list: [
          'Quick online store launch',
          'Immediate customer traffic via ads',
          'Brand awareness growth',
          'Ideal for new businesses',
        ],
      },
      {
        title: 'Advanced E-commerce + Digital Marketing',
        recommended: true,
        pricingLines: ['₹25,000 - ₹40,000+ (First Month)', '₹10,000 - ₹20,000/month (From Second Month)'],
        listTitle: 'Includes',
        list: [
          'High-conversion professional store',
          'Automated sales & order system',
          'Better Google ranking & visibility',
          'Retargeting ads for repeat customers',
          'Long-term scalable business growth',
        ],
      },
    ],
    planOptions: [
      'Basic Website + Digital Marketing - ₹12,000 (First Month)',
      '4-6 Page Website + Digital Marketing - ₹15,000 - ₹20,000 (First Month)',
      'Basic E-commerce + Digital Marketing - ₹18,000 (First Month)',
      'Advanced E-commerce + Digital Marketing - ₹25,000 - ₹40,000+ (First Month)',
    ],
    examples: [
      { src: '/assets/work/w1.png', caption: 'Business Growth Website Funnel' },
      { src: '/assets/work/w2.png', caption: 'Lead-Driven Business Website' },
      { src: '/assets/work/w3.png', caption: 'Professional Website for Brand Presence' },
      { src: '/assets/work/g11.png', caption: 'Campaign Creative for Lead Generation' },
      { src: '/assets/work/g7.png', caption: 'Graphic Ad Creative for Promotions' },
      { src: '/assets/work/g19.png', caption: 'Social Media Graphic Design for Engagement' },
    ],
  },
  'graphic-designing': {
    title: 'Graphic Designing Services',
    subtitle: 'Creative designs that strengthen your brand identity and marketing impact.',
    description:
      'Get polished brand graphics for social media, campaigns, and business promotion assets.',
    comparisonTitle: 'Graphic Designing Services',
    typeTables: [
      {
        title: 'Logo Design',
        headers: ['Service', 'Price'],
        row: ['Logo Design', '₹1,000'],
      },
      {
        title: 'Social Media Post Design (1)',
        headers: ['Service', 'Price'],
        row: ['Social Media Post Design (1)', '₹150'],
      },
      {
        title: 'Social Media Post Design (10)',
        headers: ['Service', 'Price'],
        row: ['Social Media Post Design (10)', '₹1,200'],
      },
      {
        title: 'Poster / Banner Design',
        headers: ['Service', 'Price'],
        row: ['Poster / Banner Design', '₹500'],
      },
      {
        title: 'Complete Branding Kit',
        headers: ['Service', 'Price'],
        row: ['Complete Branding Kit', '₹5,000 - ₹10,000'],
      },
    ],
    planOptions: [
      'Logo Design - ₹1,000',
      'Social Media Post Design (1) - ₹150',
      'Social Media Post Design (10) - ₹1,200',
      'Poster / Banner Design - ₹500',
      'Complete Branding Kit - ₹5,000 - ₹10,000',
    ],
    packages: [
      {
        title: 'Logo Design',
        pricingLines: ['₹1,000'],
        listTitle: 'Includes',
        list: ['Custom logo concept', 'Editable file delivery', 'Brand-ready format'],
      },
      {
        title: 'Social Media Post Design (1)',
        pricingLines: ['₹150'],
        listTitle: 'Includes',
        list: ['Single post creative', 'Brand color alignment', 'Platform-ready export'],
      },
      {
        title: 'Social Media Post Design (10)',
        pricingLines: ['₹1,200'],
        listTitle: 'Includes',
        list: ['10 social creatives', 'Consistent theme', 'High-quality export files'],
      },
      {
        title: 'Poster / Banner Design',
        pricingLines: ['₹500'],
        listTitle: 'Includes',
        list: ['Campaign-focused design', 'Print and digital friendly', 'Brand-aligned composition'],
      },
      {
        title: 'Complete Branding Kit',
        recommended: true,
        pricingLines: ['₹5,000 - ₹10,000'],
        listTitle: 'Includes',
        list: ['Logo + brand style assets', 'Social templates', 'Marketing-ready visual kit'],
      },
    ],
    examples: [
      { src: '/assets/work/g7.png', caption: 'Moti Mahal Delux Advertisement' },
      { src: '/assets/work/g11.png', caption: 'Festival Safety Campaign' },
      { src: '/assets/work/g19.png', caption: 'Food Promo Design' },
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
        <p style={{ textAlign: 'center', padding: '4rem' }}>Service not found</p>
      </div>
    );
  }

  const packageCards = service.packages || service.combos || [];

  return (
    <div className={styles.serviceDetailPage}>

      {/* ===== HERO ===== */}
      <section className={styles.focusSection}>
        <div className={styles.focusContent}>
          <h1 className={styles.focusTitle}>{service.title}</h1>
          <p className={styles.focusSubtitle}>{service.subtitle}</p>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.overviewContainer}>
          <h2 className={styles.sectionTitle}>Service Overview</h2>
          <p className={styles.overviewText}>{service.description}</p>
        </div>
      </section>

      {!!packageCards.length && (
        <section className={styles.comboSection}>
          <div className={styles.comboContainer}>
            <h2 className={styles.sectionTitle}>{service.cardSectionTitle || 'Service Packages'}</h2>
            <div className={styles.comboGrid}>
              {packageCards.map((combo) => (
                <div key={combo.title} className={styles.comboCard}>
                  {combo.recommended && <span className={styles.recommendedBadge}>Recommended</span>}
                  <h3 className={styles.comboTitle}>{combo.title}</h3>
                  <p className={styles.comboListTitle}>{combo.listTitle}:</p>
                  <ul className={styles.comboList}>
                    {combo.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {combo.bestFor && <p className={styles.comboBestFor}>Best For: {combo.bestFor}</p>}
                  {!!combo.pricingLines?.length && (
                    <div className={styles.comboPriceBox}>
                      <p className={styles.comboPriceTitle}>Pricing</p>
                      {combo.pricingLines.map((line) => (
                        <p key={line} className={styles.comboPriceLine}>
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
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
          <ServiceRequestForm serviceTitle={service.title} planOptions={service.planOptions} />
        </div>
      </section>

    </div>
  );
}
