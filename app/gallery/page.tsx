// components/GalleryPageInfinite.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { GalleryItem } from "@/lib/gallery";
import { generateInfiniteSequence, mulberry32 } from "@/lib/gallery-utils";
import styles from "./page.module.scss";
import { galleryItems as baseGallery } from "@/lib/gallery";

export default function GalleryPageInfinite() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [displayed, setDisplayed] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const rng = mulberry32(123456);
    const seq = generateInfiniteSequence(baseGallery, 60, rng);
    setItems(seq);
    setDisplayed(seq.slice(0, 6));
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loadMoreRef.current) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        appendMore();
      },
      { threshold: 0.6 },
    );
    observerRef.current.observe(loadMoreRef.current);
    return () => observerRef.current?.disconnect();
  }, [displayed, items]);

  // <-- fixed appendMore with explicit typing
  const appendMore = () => {
    if (items.length === 0) return;
    const currentLen = displayed.length;

    // explicitly type 'more' so it is not inferred as 'any[]'
    const more: GalleryItem[] = [];
    for (let i = 0; i < 6; i++) {
      const source = items[(currentLen + i) % items.length];
      // source is a GalleryItem (items is GalleryItem[] and items.length > 0)
      more.push({ ...source, id: `${source.id}-inst-${currentLen + i}` });
    }

    setDisplayed((p) => [...p, ...more]);
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
      </div>
    );
  }

  return (
    <div className={styles.galleryContainer}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1>Our Projects</h1>
        <p>Explore our portfolio of exceptional work</p>
      </motion.div>

      <div className={styles.gallery}>
        {displayed.map((it, i) => (
          <motion.div
            key={it.id}
            className={styles.galleryItem}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (i % 6) * 0.05 }}
          >
            {it.type === "image" ? (
              <div className={styles.imageWrapper}>
                <img
                  src={it.url}
                  alt={it.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : (
              <div
                className={styles.videoWrapper}
                onClick={() => setSelectedVideo(it.url)}
              >
                <img
                  src={`https://img.youtube.com/vi/${it.url}/hqdefault.jpg`}
                  alt={it.title}
                  loading="lazy"
                />
                <div className={styles.playButton}>
                  <Play size={36} />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div ref={loadMoreRef} style={{ height: 1 }} />

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className={styles.videoModal}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className={styles.videoContainer}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedVideo(null)}
              >
                <X size={18} />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
