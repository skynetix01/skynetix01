import styles from '../../../styles/About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Skynetix</h1>
          <p className={styles.heroSubtitle}>
            Innovating the future with cutting-edge technology and boundless creativity.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className={`${styles.missionSection} ${styles.section}`}>
        <div className={styles.missionContainer}>
          <h2 className={styles.sectionTitle}>Who We Are</h2>
          <div className={styles.missionText}>
            <p>
              Founded in 2025, Skynetix is a trailblazing technology company dedicated to transforming the digital landscape. Our mission is to empower businesses and individuals with innovative solutions that seamlessly blend advanced technology with human-centric design. From AI-driven applications to immersive digital experiences, we are committed to pushing the boundaries of what’s possible.
            </p>
            <p>
              At Skynetix, our diverse team of engineers, designers, and strategists collaborates to deliver solutions that are not only functional but also inspiring. We take pride in our agile approach, which allows us to adapt to the ever-evolving tech industry while maintaining a focus on quality and impact. Our work spans industries, from healthcare and finance to entertainment and education, making a meaningful difference for our clients and their communities.
            </p>
            <p>
              Our core values—innovation, integrity, and collaboration—guide everything we do. We believe in fostering a culture of curiosity and continuous learning, ensuring that we stay at the forefront of technological advancements. Whether it’s developing groundbreaking software or crafting intuitive user interfaces, Skynetix is here to shape the future, one solution at a time.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <h3>🚀 Innovation</h3>
              <p>Embracing the latest technologies to create transformative solutions.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>🔒 Integrity</h3>
              <p>Building trust through transparency and ethical practices.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>🤝 Collaboration</h3>
              <p>Partnering with clients to achieve shared success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className={`${styles.missionVisionSection} ${styles.section}`}>
        <div className={styles.missionVisionContainer}>
          <h2 className={styles.sectionTitle}>Our Mission & Vision</h2>
          <div className={styles.missionVisionGrid}>
            <div className={styles.missionVisionItem}>
              <h3 className={styles.missionVisionTitle}>Our Mission</h3>
              <p className={styles.missionVisionText}>
                At Skynetix, our mission is to empower businesses, communities, and individuals with innovative, technology-driven solutions that enhance efficiency, foster sustainable growth, and create lasting impact in an ever-evolving digital world. We are dedicated to making advanced technology accessible to all, ensuring that our solutions are inclusive, user-friendly, and tailored to meet diverse needs. By leveraging cutting-edge tools like artificial intelligence, cloud computing, and data analytics, we help our clients overcome challenges, streamline operations, and unlock new opportunities. Our commitment to sustainability drives us to develop eco-conscious solutions that minimize environmental impact while maximizing value, ensuring a better future for generations to come.
              </p>
              <p className={styles.missionVisionText}>
                We strive to build long-term partnerships with our clients, working closely to understand their unique goals and challenges. Our agile development process allows us to deliver customized solutions that evolve with market demands, ensuring our clients remain competitive in their industries. Through continuous innovation and a passion for excellence, we aim to redefine what’s possible in the digital age, creating transformative experiences that inspire and empower.
              </p>
            </div>
            <div className={styles.missionVisionItem}>
              <h3 className={styles.missionVisionTitle}>Our Vision</h3>
              <p className={styles.missionVisionText}>
                Our vision is to be a global leader in technology innovation, creating a future where seamless, human-centric solutions bridge the gap between imagination and reality, transforming lives and industries worldwide. We envision a world where technology is a force for good, enabling people from all walks of life to achieve their full potential. By pioneering advancements in emerging fields such as artificial intelligence, the Internet of Things (IoT), and blockchain, we aim to set new standards for excellence and drive meaningful change across sectors like healthcare, education, and finance.
              </p>
              <p className={styles.missionVisionText}>
                Skynetix aspires to foster an inclusive tech ecosystem where diverse perspectives fuel creativity and innovation. We are committed to nurturing talent, supporting communities, and promoting ethical practices that ensure technology serves humanity responsibly. Our goal is to build a legacy of impact, where every solution we create not only solves today’s challenges but also paves the way for a brighter, more connected future. Through relentless curiosity and a forward-thinking mindset, we are shaping a world where technology and human ambition unite to achieve the extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className={`${styles.teamSection} ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <Image
              src="/assets/aman.jpeg"
              alt="Aman Kumar"
              width={180}
              height={180}
              className={styles.teamImage}
              priority
            />
            <h3 className={styles.teamName}>Aman Kumar</h3>
            <p className={styles.teamRole}>CTO & Founder</p>
          </div>
          <div className={styles.teamCard}>
            <Image
              src="/assets/priya.png"
              alt="Priya Gupta"
              width={180}
              height={180}
              className={styles.teamImage}
            />
            <h3 className={styles.teamName}>Priya Gupta</h3>
            <p className={styles.teamRole}>Graphic Designer & Founder</p>
          </div>
          <div className={styles.teamCard}>
            <Image
              src="/assets/sunny.png"
              alt="Sunny Singh"
              width={180}
              height={180}
              className={styles.teamImage}
            />
            <h3 className={styles.teamName}>Sunny Singh</h3>
            <p className={styles.teamRole}>CMO & Co-Founder</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}