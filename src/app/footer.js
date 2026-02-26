// components/Footer.jsx
import Link from 'next/link';
import styles from '../../styles/footer.module.css';

export default function Footer() {
  // Fallback values for environment variables
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || 'contact@skynetix.in';
  const contactNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER || '+91 7857082971';
  const website = process.env.NEXT_PUBLIC_WEBSITE || 'https://www.skynetix.in';
  const instagram = process.env.NEXT_PUBLIC_INSTA || 'https://www.instagram.com/skynetix.inn';
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Skynetix</h3>
          <p className={styles.footerText}>
            Registered MSME Organization
          </p>
          <p className={styles.footerText}>
            Website Development | Digital Marketing | Graphic Designing Services
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/services" className={styles.footerLink}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/our-work" className={styles.footerLink}>
                Our Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.footerLink}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className={styles.footerLink}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
          <p className={styles.footerText}>
            Email:{' '}
            <a href={`mailto:${emailAddress}`} className={styles.footerLink}>{emailAddress}</a>
          </p>
          <p className={styles.footerText}>
            Phone:{' '}
            <a href={`tel:${contactNumber.replace(/\s+/g, '')}`} className={styles.footerLink}>{contactNumber}</a>
          </p>
          <p className={styles.footerText}>
            Website:{' '}
            <a href={website} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              www.skynetix.in
            </a>
          </p>
          <p className={styles.footerText}>
            Instagram:{' '}
            <a href={instagram} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              @skynetix.inn
            </a>
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerText}>
          © 2025 Skynetix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}