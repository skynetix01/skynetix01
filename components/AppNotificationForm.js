'use client';

import { useState } from 'react';
import styles from '../styles/Home.module.css';

export const AppNotificationForm = ({ appName, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Show success message
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className={styles.notificationModal}>
        <div className={styles.notificationContent}>
          <div className={styles.successIcon}>✅</div>
          <h3>Thank You!</h3>
           <p>We&apos;ll notify you when {appName} is available for download.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.notificationModal}>
      <div className={styles.notificationContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h3>Get Notified About {appName}</h3>
        <p>Enter your email to be notified when this app becomes available.</p>
        <form onSubmit={handleSubmit} className={styles.notificationForm}>
          <div className={styles.formGroup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className={styles.notificationInput}
              required
            />
          </div>
          <div className={styles.notificationActions}>
            <button 
              type="submit" 
              className={styles.notifySubmitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Notify Me'}
            </button>
            <button 
              type="button" 
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppNotificationForm;
