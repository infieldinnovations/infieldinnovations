"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  Calendar,
  MapPin,
  ExternalLink,
  ListFilter as Filter,
  Search,
} from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./page.module.scss";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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
      title: "Residential Solar Installation - Karen",
      category: "solar",
      location: "Karen, Nairobi",
      date: "December 2024",
      client: "Private Residence",
      description:
        "Complete 5kW solar system installation with battery backup for a modern home in Karen. The system includes 20 high-efficiency solar panels, a 10kWh lithium battery storage system, and smart monitoring capabilities.",
      images: [
        "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      ],
      features: [
        "5kW Solar System",
        "20 High-Efficiency Panels",
        "10kWh Battery Storage",
        "Smart Monitoring System",
        "Grid-Tie Capability",
        "25-Year Warranty",
      ],
      results: [
        "90% reduction in electricity bills",
        "Complete energy independence during outages",
        "ROI achieved in 4 years",
        "Zero carbon footprint for electricity",
      ],
    },
    {
      id: 2,
      title: "Commercial Plumbing System - Westlands",
      category: "plumbing",
      location: "Westlands, Nairobi",
      date: "November 2024",
      client: "Office Complex",
      description:
        "Complete plumbing system overhaul for a 10-story commercial building including water supply, drainage, and fire safety systems with modern fixtures and energy-efficient solutions.",
      images: [
        "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      ],
      features: [
        "Complete Water Supply System",
        "Modern Drainage Network",
        "Fire Safety Integration",
        "Energy-Efficient Fixtures",
        "Emergency Backup Systems",
        "24/7 Monitoring",
      ],
      results: [
        "40% reduction in water consumption",
        "Improved building safety rating",
        "Reduced maintenance costs",
        "Enhanced tenant satisfaction",
      ],
    },
    {
      id: 3,
      title: "Agricultural Borehole Project - Nakuru",
      category: "borehole",
      location: "Nakuru County",
      date: "October 2024",
      client: "Agricultural Farm",
      description:
        "Deep borehole drilling and solar-powered pump installation for agricultural irrigation covering 50 acres of farmland with sustainable water management systems.",
      images: [
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      ],
      features: [
        "150m Deep Borehole",
        "Solar-Powered Pump System",
        "Water Quality Testing",
        "50,000L Storage Tank",
        "Distribution Network",
        "Remote Monitoring",
      ],
      results: [
        "Reliable water supply for 50 acres",
        "60% increase in crop yield",
        "Zero electricity costs for pumping",
        "Sustainable farming practices",
      ],
    },
    {
      id: 4,
      title: "Smart Irrigation System - Kiambu",
      category: "irrigation",
      location: "Kiambu County",
      date: "September 2024",
      client: "Greenhouse Farm",
      description:
        "Automated drip irrigation system for greenhouse farming with smart controls, weather monitoring, and precision water delivery for optimal crop growth.",
      images: [
        "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/1422135/pexels-photo-1422135.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      ],
      features: [
        "Precision Drip Irrigation",
        "Smart Control System",
        "Weather Monitoring",
        "Water Filtration",
        "Zone Management",
        "Mobile App Control",
      ],
      results: [
        "50% water savings",
        "30% increase in crop quality",
        "Automated scheduling",
        "Reduced labor costs by 70%",
      ],
    },
    {
      id: 5,
      title: "Residential Solar Water Heating - Runda",
      category: "solar",
      location: "Runda, Nairobi",
      date: "August 2024",
      client: "Private Residence",
      description:
        "Installation of solar water heating system for a luxury home with backup electric heating and smart temperature control for consistent hot water supply.",
      images: [
        "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      ],
      features: [
        "300L Solar Water Heater",
        "Backup Electric Element",
        "Smart Temperature Control",
        "Insulated Storage Tank",
        "Frost Protection",
        "10-Year Warranty",
      ],
      results: [
        "80% reduction in water heating costs",
        "Consistent hot water supply",
        "Eco-friendly solution",
        "Increased property value",
      ],
    },
    {
      id: 6,
      title: "Industrial Plumbing Installation - Thika",
      category: "plumbing",
      location: "Thika, Kiambu",
      date: "July 2024",
      client: "Manufacturing Plant",
      description:
        "Complete industrial plumbing installation for a new manufacturing facility including process water systems, waste management, and safety compliance.",
      images: [
        "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      ],
      features: [
        "Industrial Water Supply",
        "Process Water Systems",
        "Waste Management",
        "Safety Compliance",
        "High-Pressure Systems",
        "Quality Control",
      ],
      results: [
        "Full regulatory compliance",
        "Efficient water management",
        "Reduced operational costs",
        "Enhanced safety standards",
      ],
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`${styles.projectsPage} pt-[120px] md:pt-[140px]`}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Completed Projects</h1>
            <p>
              Explore our portfolio of successful installations and satisfied
              clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className={styles.filtersSection}>
        <div className={styles.container}>
          <div className={styles.filtersContent}>
            <div className={styles.searchBox}>
              <Search size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className={styles.categories}>
              <Filter size={20} />
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
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchTerm}`}
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
                      <span className={styles.category}>
                        {project.category}
                      </span>
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
                    <p className={styles.client}>Client: {project.client}</p>
                    <p className={styles.description}>{project.description}</p>

                    <div className={styles.projectDetails}>
                      <div className={styles.featuresSection}>
                        <h4>Key Features</h4>
                        <ul className={styles.featuresList}>
                          {project.features.slice(0, 4).map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.resultsSection}>
                        <h4>Results Achieved</h4>
                        <ul className={styles.resultsList}>
                          {project.results.slice(0, 3).map((result) => (
                            <li key={result}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button className={styles.viewButton}>
                      View Full Details
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              className={styles.noResults}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3>No projects found</h3>
              <p>Try adjusting your search criteria or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
