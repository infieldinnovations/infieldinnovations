// lib/gallery.ts
export interface GalleryItem {
  id: string;
  title: string;
  description: string | null;
  type: 'image' | 'video';
  url: string; // for images: direct image URL; for videos: YouTube video ID
  thumbnail_url: string | null;
  order: number;
  created_at: string;
}

/**
 * Sample local gallery items. Replace these with your real assets/IDs.
 * - image items: url should be an image URL
 * - video items: url should be a youtube video id (e.g. "dQw4w9WgXcQ")
 */
export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Riverside Walk',
    description: 'A calm photograph taken during golden hour.',
    type: 'image',
    url: 'https://picsum.photos/id/1018/1000/600', // example image
    thumbnail_url: null,
    order: 1,
    created_at: '2023-01-05T10:00:00Z',
  },
  {
    id: '2',
    title: 'Modern Workspace',
    description: 'Interior shot of a modern workspace.',
    type: 'image',
    url: 'https://picsum.photos/id/1025/1000/600',
    thumbnail_url: null,
    order: 2,
    created_at: '2023-02-14T12:00:00Z',
  },
  {
    id: '3',
    title: 'Product Teaser',
    description: 'Short teaser of our product.',
    type: 'video',
    url: 'dQw4w9WgXcQ', // youtube id example
    thumbnail_url: null,
    order: 3,
    created_at: '2023-03-01T09:30:00Z',
  },
  {
    id: '4',
    title: 'City Lights',
    description: 'Night photo of the city skyline.',
    type: 'image',
    url: 'https://picsum.photos/id/1031/1000/600',
    thumbnail_url: null,
    order: 4,
    created_at: '2023-04-10T18:20:00Z',
  },
  {
    id: '5',
    title: 'Case Study Intro',
    description: 'Quick overview of a recent case study.',
    type: 'video',
    url: '3JZ_D3ELwOQ', // youtube id example
    thumbnail_url: null,
    order: 5,
    created_at: '2023-05-25T08:15:00Z',
  },
  {
    id: '6',
    title: 'Mountainside',
    description: 'A wide-angle landscape shot.',
    type: 'image',
    url: 'https://picsum.photos/id/1043/1000/600',
    thumbnail_url: null,
    order: 6,
    created_at: '2023-06-12T15:40:00Z',
  },
];