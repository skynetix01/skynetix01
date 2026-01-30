// components/appData.js
'use client';

import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import AppNotificationForm from './AppNotificationForm';

export const appsData = [
  {
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
    image: '/assets/work/chessmate.png',
    category: 'Games & Strategy',
    features: ['AI Analysis', 'Puzzles', 'Training', 'Offline Play'],
    downloadUrl: '/downloads/chessmate.apk',
    status: 'Available Now',
  },
];

export const Apps = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [selectedApp, setSelectedApp] = useState('');

  const handleNotifyMe = (appName) => {
    console.log('Notify me clicked for:', appName);
    setSelectedApp(appName);
    setShowNotification(true);
  };

  const closeNotification = () => {
    setShowNotification(false);
    setSelectedApp('');
  };

  return (
    <>
      <div className={styles.appsFlex}>
      {appsData.map((app) => (
        <div key={app.name} className={styles.appCard}>
          <div className={styles.appImageContainer}>
            <Image
              src={app.image}
              alt={app.title}
              width={300}
              height={200}
              className={styles.appImage}
              priority={app.name === 'chessmate'}
            />
            <div className={styles.appStatus}>
              <span className={`${styles.statusBadge} ${styles[app.status.toLowerCase().replace(' ', '')]}`}>
                {app.status}
              </span>
            </div>
          </div>
          
          <div className={styles.appDetails}>
            <div className={styles.appHeader}>
              <h3 className={styles.appTitle}>{app.title}</h3>
              <div className={styles.appCategory}>{app.category}</div>
            </div>
            
            <p className={styles.appDescription}>{app.description}</p>
            
            <div className={styles.appHighlights}>
              {app.highlights.slice(0, 4).map((highlight, index) => (
                <div key={index} className={styles.appHighlightItem}>
                  <span className={styles.appHighlightIcon}>✨</span>
                  <span className={styles.appHighlightText}>{highlight}</span>
                </div>
              ))}
            </div>
            
            <div className={styles.appFeatures}>
              {app.features.map((feature, index) => (
                <span key={index} className={styles.appFeatureTag}>
                  {feature}
                </span>
              ))}
            </div>
            
            <div className={styles.appActions}>
              {app.status === 'Available Now' ? (
                <a 
                  href={app.downloadUrl} 
                  download={`${app.title}.apk`}
                  className={styles.downloadButton}
                  onClick={() => console.log('Download clicked for:', app.title)}
                >
                  Download Now
                </a>
              ) : (
                <button 
                  className={styles.notifyButton}
                  onClick={() => handleNotifyMe(app.title)}
                >
                  Notify Me
                </button>
              )}
              {/* <Link 
                href={`/apps/${app.name}`} 
                className={styles.learnMoreButton}
                onClick={() => console.log('Learn more clicked for:', app.title)}
              >
                Learn More
              </Link> */}
            </div>
          </div>
        </div>
      ))}
      </div>
      
      {showNotification && (
        <AppNotificationForm 
          appName={selectedApp} 
          onClose={closeNotification} 
        />
      )}
    </>
  );
};

export default Apps;
