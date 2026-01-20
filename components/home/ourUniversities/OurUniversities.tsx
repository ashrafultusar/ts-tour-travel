import Image from "next/image";
import styles from "./OurUniversities.module.css";

const universities = [
  { id: 1, img: "/assets/universities/utar.png", name: "UTAR" },
  { id: 2, img: "/assets/universities/nottingham.png", name: "Nottingham" },
  { id: 3, img: "/assets/universities/iumw.png", name: "IUMW" },
  { id: 4, img: "/assets/universities/utm.png", name: "UTM" },
  { id: 5, img: "/assets/universities/utem.png", name: "UTeM" },
  { id: 6, img: "/assets/universities/lincoln.png", name: "Lincoln" },
  { id: 7, img: "/assets/universities/unimy.png", name: "UNIMY" },
  { id: 8, img: "/assets/universities/sunway.png", name: "Sunway" },
  { id: 9, img: "/assets/universities/msu.png", name: "MSU" },
  { id: 10, img: "/assets/universities/utmspace.png", name: "UTMSPACE" },
  { id: 11, img: "/assets/universities/heriot-watt.png", name: "Heriot-Watt" },
];

const OurUniversities = () => {
  return (
    <section className={styles.sliderWrapper}>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderTrack}>
          {/* First set of images */}
          {universities.map((uni) => (
            <div key={`first-${uni.id}`} className={styles.logoItem}>
              <div className="relative w-32 h-16 sm:w-40 sm:h-20">
                <Image
                  src={uni.img}
                  alt={uni.name}
                  fill
                  className={`${styles.universityLogo} object-contain`}
                  sizes="(max-width: 640px) 128px, 160px"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {universities.map((uni) => (
            <div key={`second-${uni.id}`} className={styles.logoItem}>
              <div className="relative w-32 h-16 sm:w-40 sm:h-20">
                <Image
                  src={uni.img}
                  alt={uni.name}
                  fill
                  className={`${styles.universityLogo} object-contain`}
                  sizes="(max-width: 640px) 128px, 160px"
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