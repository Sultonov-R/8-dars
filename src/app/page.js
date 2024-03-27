import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.wrpper}>
        <div className={styles.header}>
          <div>Logo</div>
          <div>
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Locations</a>
            <a href="#">FAQ's</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="hero-section">
          <div>
            <div>
              <h1>Love and kindness are never wasted.</h1>
              <p>
                We help around 1,000,000+ cats and kittens every year thanks in
                no small part to our network of over 200+ volunteer-run branches
              </p>
            </div>
            <div>
              <button>Join Us</button>
            </div>
          </div>
          <div>
            <Image src="/image1.png" width={500} height={500} alt="Description" />
          </div>
        </div>
      </div>
    </>
  );
}
