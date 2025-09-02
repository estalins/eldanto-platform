import styles from '../../styles/landing.module.css';

export default function SponsoredBanner() {
  return (
    <div className={styles.banner}>
      <img src="/banner.jpg" alt="Banner patrocinado" />
      <span className={styles.bannerText}>Ofertas patrocinadas por tiendas premium</span>
    </div>
  );
}