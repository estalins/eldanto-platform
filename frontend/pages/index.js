import HeroSection from '../components/Landing/HeroSection';
import HowItWorks from '../components/Landing/HowItWorks';
import FeaturedOffers from '../components/Landing/FeaturedOffers';
import Countdown from '../components/Landing/Countdown';
import Categories from '../components/Landing/Categories';
import Testimonials from '../components/Landing/Testimonials';
import SponsoredBanner from '../components/Landing/SponsoredBanner';
import styles from '../styles/landing.module.css';

export default function Home() {
  return (
    <div className={styles.landing}>
      <SponsoredBanner />
      <HeroSection />
      <HowItWorks />
      <FeaturedOffers />
      <Countdown />
      <Categories />
      <Testimonials />
      <footer>
        <div>Contacto: info@eldanto.com</div>
        <div>© 2025 Eldanto. <a href="/legal">Legal</a></div>
      </footer>
    </div>
  );
}