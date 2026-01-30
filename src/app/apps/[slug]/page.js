import styles from '../../../../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaChess, FaBrain, FaTrophy, FaDownload, FaStar, FaUsers, FaTasks, FaHeart, FaHeartbeat } from 'react-icons/fa';
import { notFound } from 'next/navigation';

// App data - in a real app, this would come from a database or API
const appsData = {
  chessmate: {
    name: 'chessmate',
    title: 'ChessMate',
    description: 'An intelligent chess companion that helps you improve your game with AI-powered analysis, move suggestions, and personalized training.',
    highlights: [
      'AI-powered move analysis',
      'Interactive chess puzzles',
      'Real-time game assistance',
      'Personalized training programs',
      'Multi-level difficulty settings',
      'Offline gameplay support'
    ],
    image: '/assets/apps/chessmate.png',
    category: 'Games & Strategy',
    features: ['AI Analysis', 'Puzzles', 'Training', 'Offline Play'],
    downloadUrl: '/downloads/chessmate.apk', // You can replace with actual download links
    status: 'Available Now',
    icon: FaChess,
    color: '#4ade80'
  },
 
};

export default function AppDetailPage({ params }) {
  const { slug } = params;
  const app = appsData[slug];

  if (!app) {
    notFound();
  }

  const AppIcon = app.icon;

  const handleDownload = () => {
    if (app.status === 'Available Now') {
      // Create a download link
      const link = document.createElement('a');
      link.href = app.downloadUrl;
      link.download = `${app.title}.apk`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Show notification for upcoming apps
      alert(`Thank you for your interest! ${app.title} will be available soon. We'll notify you when it's ready.`);
    }
  };

  const handleNotifyMe = () => {
    alert(`Great! We'll notify you when ${app.title} is available. Please provide your email in the contact form.`);
  };

  return (
    <div className={styles.appDetailPage}>
      {/* Hero Section */}
      <section className={styles.appHero}>
        <div className={styles.appHeroContainer}>
          <div className={styles.appHeroContent}>
            <div className={styles.appHeroImage}>
              <Image
                src={app.image}
                alt={`${app.title} App`}
                width={400}
                height={300}
                className={styles.heroAppImage}
              />
            </div>
            <div className={styles.appHeroText}>
              <h1 className={styles.appHeroTitle}>{app.title}</h1>
              <p className={styles.appHeroSubtitle}>
                {app.description}
              </p>
              <div className={styles.appHeroStats}>
                <div className={styles.heroStat}>
                  <FaUsers className={styles.heroStatIcon} />
                  <span>{app.downloads} Downloads</span>
                </div>
                <div className={styles.heroStat}>
                  <FaTrophy className={styles.heroStatIcon} />
                  <span>{app.status}</span>
                </div>
              </div>
              <div className={styles.appHeroActions}>
                {app.status === 'Available Now' ? (
                  <button 
                    className={styles.downloadButton}
                    onClick={handleDownload}
                    style={{ background: `linear-gradient(120deg, ${app.color}, ${app.color}dd)` }}
                  >
                    <FaDownload className={styles.buttonIcon} />
                    Download Now
                  </button>
                ) : (
                  <button 
                    className={styles.notifyButton}
                    onClick={handleNotifyMe}
                    style={{ background: `linear-gradient(120deg, ${app.color}, ${app.color}dd)` }}
                  >
                    Notify Me
                  </button>
                )}
                <Link href="/" className={styles.backButton}>
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.appFeatures}>
        <div className={styles.appFeaturesContainer}>
          <h2 className={styles.sectionTitles}>Key Features</h2>
          <div className={styles.featuresGrid}>
            {app.highlights.slice(0, 3).map((highlight, index) => (
              <div key={index} className={styles.featureCard}>
                <AppIcon className={styles.featureIcon} style={{ color: app.color }} />
                <h3>{highlight.split(' - ')[0] || highlight.split(': ')[0] || 'Feature'}</h3>
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className={styles.appScreenshots}>
        <div className={styles.appScreenshotsContainer}>
          <h2 className={styles.sectionTitles}>App Screenshots</h2>
          <div className={styles.screenshotsGrid}>
            <div className={styles.screenshotCard}>
              <Image
                src={app.image}
                alt={`${app.title} Interface`}
                width={300}
                height={200}
                className={styles.screenshotImage}
              />
              <p>Main Interface</p>
            </div>
            <div className={styles.screenshotCard}>
              <Image
                src={app.image}
                alt={`${app.title} Features`}
                width={300}
                height={200}
                className={styles.screenshotImage}
              />
              <p>Key Features</p>
            </div>
            <div className={styles.screenshotCard}>
              <Image
                src={app.image}
                alt={`${app.title} Settings`}
                width={300}
                height={200}
                className={styles.screenshotImage}
              />
              <p>Settings & Options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className={styles.appDownload}>
        <div className={styles.appDownloadContainer}>
          <h2 className={styles.sectionTitles}>Download {app.title}</h2>
          <p className={styles.downloadSubtitle}>
            {app.status === 'Available Now' 
              ? `Start using ${app.title} today and experience the difference`
              : `${app.title} is ${app.status.toLowerCase()}. Get notified when it's ready!`
            }
          </p>
          <div className={styles.downloadActions}>
            {app.status === 'Available Now' ? (
              <button 
                className={styles.downloadButtonLarge}
                onClick={handleDownload}
                style={{ background: `linear-gradient(120deg, ${app.color}, ${app.color}dd)` }}
              >
                <FaDownload className={styles.buttonIcon} />
                Download for Free
              </button>
            ) : (
              <button 
                className={styles.downloadButtonLarge}
                onClick={handleNotifyMe}
                style={{ background: `linear-gradient(120deg, ${app.color}, ${app.color}dd)` }}
              >
                Notify Me When Ready
              </button>
            )}
            <p className={styles.downloadNote}>
              {app.status === 'Available Now' 
                ? 'Available on iOS and Android • No ads • Offline play supported'
                : 'We\'ll send you an email when this app is ready for download'
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for all apps
export async function generateStaticParams() {
  return Object.keys(appsData).map((slug) => ({
    slug: slug,
  }));
}
