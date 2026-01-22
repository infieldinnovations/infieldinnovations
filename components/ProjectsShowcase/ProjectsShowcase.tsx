"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight, Calendar, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./ProjectsShowcase.module.scss";

const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "solar", label: "Solar" },
    { id: "plumbing", label: "Plumbing" },
    { id: "borehole", label: "Borehole" },
    { id: "irrigation", label: "Irrigation" },
  ];

  const projects = [
    {
      id: 1,
      title: "Residential Solar Installation",
      category: "solar",
      location: "Karen, Nairobi",
      date: "December 2024",
      description:
        "Complete 5kW solar system installation with battery backup for a modern home in Karen.",
      images: [
        "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      ],
      features: [
        "5kW Solar System",
        "Battery Storage",
        "10-Year Warranty",
        "Smart Monitoring",
      ],
    },
    {
      id: 2,
      title: "Commercial Plumbing System",
      category: "plumbing",
      location: "Westlands, Nairobi",
      date: "November 2024",
      description:
        "Complete plumbing system overhaul for a 10-story commercial building.",
      images: [
        "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      ],
      features: [
        "Water Supply System",
        "Drainage Network",
        "Fire Safety System",
        "Emergency Repairs",
      ],
    },
    {
      id: 3,
      title: "Agricultural Borehole Project",
      category: "borehole",
      location: "Nakuru County",
      date: "October 2024",
      description:
        "Deep borehole drilling and solar-powered pump installation for agricultural irrigation.",
      images: [
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      ],
      features: [
        "150m Deep Borehole",
        "Solar Pump System",
        "Water Testing",
        "Storage Tank",
      ],
    },
    {
      id: 4,
      title: "Smart Irrigation System",
      category: "irrigation",
      location: "Kiambu County",
      date: "September 2024",
      description:
        "Automated drip irrigation system for greenhouse farming with smart controls.",
      images: [
        "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/1422135/pexels-photo-1422135.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      ],
      features: [
        "Drip Irrigation",
        "Smart Controls",
        "Water Filtration",
        "Zone Management",
      ],
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Recent Projects</h2>
          <p>Discover our latest successful installations and solutions</p>
        </motion.div>

        <motion.div
          className={styles.categories}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.categoryButton} ${
                activeCategory === category.id ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className={styles.projectsGrid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.imageContainer}>
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                      nextEl: `.next-${project.id}`,
                      prevEl: `.prev-${project.id}`,
                    }}
                    pagination={{
                      clickable: true,
                      el: `.pagination-${project.id}`,
                    }}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    className={styles.projectSwiper}
                  >
                    {project.images.map((image, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <div className={styles.slideWrapper}>
                          <Image
                            src={image}
                            alt={`${project.title} - Image ${imgIndex + 1}`}
                            fill
                            className={styles.projectImage}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div
                    className={`swiper-button-prev prev-${project.id}`}
                  ></div>
                  <div
                    className={`swiper-button-next next-${project.id}`}
                  ></div>
                  <div
                    className={`swiper-pagination pagination-${project.id}`}
                  ></div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.projectMeta}>
                    <span className={styles.category}>{project.category}</span>
                    <div className={styles.metaInfo}>
                      <div className={styles.metaItem}>
                        <MapPin size={14} />
                        <span>{project.location}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <Calendar size={14} />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>

                  <h3>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>

                  <ul className={styles.features}>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <Link
                    href={`/projects/${project.id}`}
                    className={styles.viewButton}
                  >
                    View Details
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/projects" className={styles.viewAllButton}>
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
