// components\HeroCarousel\HeroCarousel.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Droplets, Zap, Sprout } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./HeroCarousel.module.scss";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Professional Solar Solutions",
      subtitle: "Harness the Power of the Sun",
      description:
        "Complete solar installation services from design to maintenance. Reduce energy costs with our cutting-edge solar technology.",
      image: "/solar/solar_9283740293.jpg",
      icon: <Sun size={60} />,
      buttonText: "Explore Solar Services",
      buttonLink: "/services/solar",
    },
    {
      id: 2,
      title: "Expert Plumbing Services",
      subtitle: "Quality Water Solutions",
      description:
        "From installation to emergency repairs, our certified plumbers deliver reliable and efficient plumbing solutions.",
      image: "/plumbing/plumbing_974038490.jpg",
      icon: <Droplets size={60} />,
      buttonText: "View Plumbing Services",
      buttonLink: "/services/plumbing",
    },
    {
      id: 3,
      title: "Borehole Drilling & Development",
      subtitle: "Access to Clean Water",
      description:
        "Professional borehole drilling, testing, and maintenance services. Ensure reliable water supply with our expertise.",
      image: "/borehole/borehole_246374627.jpg",
      icon: <Zap size={60} />,
      buttonText: "Learn About Boreholes",
      buttonLink: "/services/borehole",
    },
    {
      id: 4,
      title: "Irrigation Design & Installation",
      subtitle: "Smart Water Management",
      description:
        "Efficient irrigation systems designed for agricultural and landscaping needs. Maximize water efficiency and crop yield.",
      image: "/irrigation/irrigation_489637824.jpg",
      icon: <Sprout size={60} />,
      buttonText: "Discover Irrigation",
      buttonLink: "/services/irrigation",
    },
  ];

  return (
    <section className={styles.heroSection}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide}>
              <div className={styles.slideImage}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className={styles.backgroundImage}
                />
                <div className={styles.overlay} />
              </div>

              <div className={styles.slideContent}>
                <div className={styles.container}>
                  <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.div
                      className={styles.iconWrapper}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {slide.icon}
                    </motion.div>

                    <motion.h2
                      className={styles.subtitle}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {slide.subtitle}
                    </motion.h2>

                    <motion.h1
                      className={styles.title}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      className={styles.description}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      className={styles.buttons}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      <Link
                        href={slide.buttonLink}
                        className={styles.primaryButton}
                      >
                        {slide.buttonText}
                        <ArrowRight size={20} />
                      </Link>
                      <Link href="/quote" className={styles.secondaryButton}>
                        Get Free Quote
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default HeroCarousel;
