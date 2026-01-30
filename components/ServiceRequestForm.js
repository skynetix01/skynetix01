'use client';
import { useState } from 'react';
import styles from '../styles/serviceDetail.module.css';

export default function ServiceRequestForm({ serviceTitle, pricing }) {
  const [status, setStatus] = useState(null);
  const pricingOptions = pricing || [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: serviceTitle, // main service
      plan: formData.get('service'), // selected plan
      budget: formData.get('budget'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/service-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Request submitted successfully!');
        e.target.reset();
      } else {
        setStatus('Failed to submit request.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  return (
    <form className={styles.requestForm} onSubmit={handleSubmit}>

      <div className={styles.formGroup}>
        <input type="text" name="name" placeholder="Your Name" className={styles.input} required />
        <label className={styles.formLabel}>Name</label>
      </div>

      <div className={styles.formGroup}>
        <input type="tel" name="phone" placeholder="Your Phone Number" className={styles.input} required />
        <label className={styles.formLabel}>Phone Number</label>
      </div>

      <div className={styles.formGroup}>
        <input type="email" name="email" placeholder="Your Email (Optional)" className={styles.input} />
        <label className={styles.formLabel}>Email (Optional)</label>
      </div>

      {/* 🔥 Plan dropdown */}
      <div className={styles.formGroup}>
        <select name="service" className={styles.input} required defaultValue="">
          <option value="" disabled>Select a Plan</option>
          {pricingOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <label className={styles.formLabel}>Select Plan</label>
      </div>

      <div className={styles.formGroup}>
        <input type="text" name="budget" placeholder="Your Budget (Optional)" className={styles.input} />
        <label className={styles.formLabel}>Budget (Optional)</label>
      </div>

      <div className={styles.formGroup}>
        <textarea name="message" placeholder="Your Message or Query" className={styles.textarea} />
        <label className={styles.formLabel}>Message / Query</label>
      </div>

      <button type="submit" className={styles.submitButton}>Submit Request</button>

      {status && <p className={styles.formStatus}>{status}</p>}
    </form>
  );
}