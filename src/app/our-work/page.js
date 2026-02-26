// app/our-work/page.jsx
import styles from '../../../styles/myWork.module.css';
import Image from 'next/image';

export const workData = {
  websiteDesign: [
    {
      name: 'motion-view-ventures',
      title: 'Motion View Ventures Website',
      category: 'websiteDesign',
      image: '/assets/work/w1.png',
      link: 'https://motionviewventures.in',
    },
    {
      name: 'webxprt-website',
      title: 'WebXPRT Website',
      category: 'websiteDesign',
      image: '/assets/work/w2.png',
      link: 'https://webxprt.in',
    },
    {
      name: 'branding-project',
      title: 'Skynetix Website',
      category: 'websiteDesign',
      image: '/assets/work/w3.png',
      link: 'https://skynetix.in',
    },
  ],
  graphicDesign: [
    {
      name: 'eye-care-morning-campaign',
      title: 'Morning Eye-Care Routine Campaign Graphic',
      category: 'graphicDesign',
      image: '/assets/work/g1.png',
      link: 'https://example.com/campaign-graphics',
    },
    {
      name: 'holi-health-safety-poster',
      title: 'Holi Festival Health & Safety Tips Poster',
      category: 'graphicDesign',
      image: '/assets/work/g2.png',
      link: 'https://example.com/logo-design-1',
    },
    {
      name: 'restaurant-biryani-promo',
      title: 'Moti Mahal Delux Hyderabadi Biryani Promotion',
      category: 'graphicDesign',
      image: '/assets/work/g3.png',
      link: 'https://example.com/social-media-set-1',
    },
    {
      name: 'custom-cake-shop-ad',
      title: 'MilkBar Custom Cake Shop Promotional Banner',
      category: 'graphicDesign',
      image: '/assets/work/g4.png',
      link: 'https://example.com/poster-design-1',
    },
    {
      name: 'travel-eye-care-infographic',
      title: 'Travel Eye-Care Protection Infographic',
      category: 'graphicDesign',
      image: '/assets/work/g5.png',
      link: 'https://example.com/infographic-1',
    },
    {
      name: 'nighttime-eye-care-brochure',
      title: 'Overnight Eye-Care Routine Brochure',
      category: 'graphicDesign',
      image: '/assets/work/g6.png',
      link: 'https://example.com/brochure-1',
    },
    {
      name: 'restaurant-branch-advert',
      title: 'Moti Mahal Delux Motihari Branch Advertisement',
      category: 'graphicDesign',
      image: '/assets/work/g7.png',
      link: 'https://example.com/banner-ad-1',
    },
    {
      name: 'cab-rental-pricing-ad',
      title: 'RoyaleCab Sedan/SUV Rental Pricing Banner',
      category: 'graphicDesign',
      image: '/assets/work/g8.png',
      link: 'https://example.com/packaging-1',
    },
    {
      name: 'cake-delivery-social-ad',
      title: 'MilkBar Midnight Cake Delivery Social Media Ad',
      category: 'graphicDesign',
      image: '/assets/work/g9.png',
      link: 'https://example.com/logo-design-2',
    },
    {
      name: 'car-rental-discount-promo',
      title: 'RoyaleCab Family/Tourist Rental Discount Offer',
      category: 'graphicDesign',
      image: '/assets/work/g10.png',
      link: 'https://example.com/social-media-set-2',
    },
    {
      name: 'festive-travel-promo',
      title: 'Happy Foli Festival Travel Safety Campaign Graphic',
      category: 'graphicDesign',
      image: '/assets/work/g11.png',
      link: 'https://example.com/flyer-1',
    },
    {
      name: 'restaurant-fried-chicken-ad',
      title: 'Moti Mahal Delux Original Fried Chicken Promotion',
      category: 'graphicDesign',
      image: '/assets/work/g12.png',
      link: 'https://example.com/infographic-2',
    },
    {
      name: 'home-icu-care-brochure',
      title: 'Why Choose Home ICU Care? Benefits Brochure',
      category: 'graphicDesign',
      image: '/assets/work/g13.png',
      link: 'https://example.com/poster-design-2',
    },
    {
      name: 'home-physiotherapy-infographic',
      title: 'Benefits of At-Home Physiotherapy Infographic',
      category: 'graphicDesign',
      image: '/assets/work/g14.png',
      link: 'https://example.com/branding-kit-1',
    },
    {
      name: 'eye-care-tablets-product-ad',
      title: 'Eye-Care Effervescent Tablets Product Launch Ad',
      category: 'graphicDesign',
      image: '/assets/work/g15.png',
      link: 'https://example.com/banner-ad-2',
    },
    {
      name: 'restaurant-chicken-wings-promo',
      title: 'Moti Mahal Delux Special Chicken Wings Offer',
      category: 'graphicDesign',
      image: '/assets/work/g17.png',
      link: 'https://example.com/social-media-set-3',
    },
    {
      name: 'restaurant-biryani-menu-ad',
      title: 'Moti Mahal Delux Chicken Biryani Menu Spotlight',
      category: 'graphicDesign',
      image: '/assets/work/g18.png',
      link: 'https://example.com/logo-design-3',
    },
    {
      name: 'restaurant-tandoori-chicken-ad',
      title: 'Spicy Tandoori Chicken with Masala Promo',
      category: 'graphicDesign',
      image: '/assets/work/g19.png',
      link: 'https://example.com/flyer-2',
    },
    {
      name: 'car-rental-partnership-banner',
      title: 'RoyaleCab Car Listing & Monthly Income Banner',
      category: 'graphicDesign',
      image: '/assets/work/g20.png',
      link: 'https://example.com/infographic-3',
    },
    {
      name: 'Car-franchise-outlet',
      title: 'Franchise Outlet Graphic Design',
      category: 'graphicDesign',
      image: '/assets/work/g21.jpeg',
      link: 'https://example.com/poster-design-3',
    },
    {
      name: 'homecare-doctor-visits-promo',
      title: 'Expert Home Doctor Visits Promotion',
      category: 'graphicDesign',
      image: '/assets/work/g22.png',
      link: 'https://example.com/branding-kit-2',
    },
    {
      name: 'homecare-icu-services-banner',
      title: '24/7 Home ICU Services Banner',
      category: 'graphicDesign',
      image: '/assets/work/g23.png',
      link: 'https://example.com/banner-ad-3',
    },
    {
      name: 'homecare-medical-equipment-ad',
      title: 'Essential Medical Equipment Services Ad',
      category: 'graphicDesign',
      image: '/assets/work/g24.png',
      link: 'https://example.com/packaging-3',
    },
    {
      name: 'homecare-physio-yoga-brochure',
      title: 'At-Home Physiotherapy & Yoga Brochure',
      category: 'graphicDesign',
      image: '/assets/work/g25.png',
      link: 'https://example.com/social-media-set-4',
    },
    {
      name: 'homecare-critical-care-services',
      title: 'Specialized Critical Care Services Promotion',
      category: 'graphicDesign',
      image: '/assets/work/g26.png',
      link: 'https://example.com/logo-design-4',
    },
  ],
};

const categoryDisplayNames = {
  websiteDesign: 'Websites',
  graphicDesign: 'Graphic Design',
};

export default function OurWork() {
  return (
    <div className={styles.myWorkPage}>
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <h1 className={styles.introTitle}>Our Work</h1>
          <p className={styles.introText}>A showcase of our expertise in digital solutions.</p>
        </div>
      </section>

      <section className={styles.workSection}>
        <div className={styles.workGrid}>
          {Object.entries(workData).map(([categoryKey, projects]) => (
            <div key={categoryKey} className={styles.categoryGroup}>
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>{categoryDisplayNames[categoryKey]}</h2>
              </div>
              <div
                className={`${styles.categoryGrid} ${
                  categoryKey === 'websiteDesign' ? styles.websiteGrid : styles.graphicGrid
                }`}
              >
                {projects.map((project, index) => (
                  <div
                    key={`${project.category}-${project.name}-${index}`}
                    className={`${styles.workCard} ${
                      categoryKey === 'websiteDesign' ? styles.workCardWebsite : styles.workCardGraphic
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className={styles.cardImageWrapper}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className={styles.workImage}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk71F2gAAAABJRU5ErkJggg=="
                      />
                      <div className={styles.cardOverlay}></div>
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.workTitle}>{project.title}</h3>
                      {project.category === 'websiteDesign' && project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.workLink}
                        >
                          Visit Site
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}