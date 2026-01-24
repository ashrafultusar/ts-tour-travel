import Image from "next/image";
import styles from "./OurUniversities.module.css";

const universities = [
  { id: 1, img: "/assets/universities/1_logo.jpg", name: "UTAR" },
  { id: 2, img: "/assets/universities/2_logo.jpg", name: "Nottingham" },
  { id: 3, img: "/assets/universities/3_logo.jpg", name: "IUMW" },
  { id: 4, img: "/assets/universities/4_logo.jpg", name: "UTM" },
  { id: 5, img: "/assets/universities/5_logo.jpg", name: "UTeM" },
  { id: 6, img: "/assets/universities/6_logo.jpg", name: "Lincoln" },
  { id: 7, img: "/assets/universities/7_logo.jpg", name: "UNIMY" },
  { id: 8, img: "/assets/universities/8_logo.jpg", name: "Sunway" },
  { id: 9, img: "/assets/universities/9_logo.jpg", name: "MSU" },
  { id: 10, img: "/assets/universities/10_logo.jpg", name: "UTMSPACE" },
  { id: 10, img: "/assets/universities/11_logo.jpg", name: "UTMSPACE" },
];

const OurUniversities = () => {
  return (
    <section className={styles.sliderWrapper}>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderTrack}>
          {[...universities, ...universities].map((uni, index) => (
            <div key={`${uni.id}-${index}`} className={styles.logoItem}>
              <div className="relative">
                <Image
                  src={uni.img}
                  alt={uni.name}
                  width={150}
                  height={60}
                  className={styles.universityLogo}
                  priority={index < 5}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurUniversities;
