import { useState, useEffect } from "react";
import styles from '../../styles/landing.module.css';

export default function Countdown() {
  // Simulación de oferta relámpago que termina en 1 hora
  const endTime = new Date(Date.now() + 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = Math.max(0, endTime - now);
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    return `${h}h ${m}m ${s}s`;
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.countdown}>
      <h2>Oferta Relámpago</h2>
      <div className={styles.timer}>{timeLeft}</div>
      <p>¡Aprovecha antes de que termine!</p>
    </section>
  );
}