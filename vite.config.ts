import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon.svg',
          'apple-touch-icon.png',
          'pwa-192x192.png',
          'pwa-512x512.png',
          'pwa-maskable-512x512.png'
        ],
        manifest: {
          id: '/',
          name: 'Solar System Graveyard... or Hall of Fame?',
          short_name: 'SpaceGraveyard',
          description: "Where NASA's retired machines tell their own stories across the Moon, Mars, and Deep Space.",
          theme_color: '#0b0c10',
          background_color: '#07080c',
          display: 'standalone',
          orientation: 'any',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          maximumFileSizeToCacheInBytes: 25 * 1024 * 1024, // 25 MB for 3D glb and audio files
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,glb,mp3,json}'],
          navigateFallback: '/index.html',
          runtimeCaching: [
            {
              urlPattern: ({ request, url }) => {
                return (
                  request.destination === 'image' ||
                  /\.(?:png|jpg|jpeg|svg|gif|webp|avif)(?:\?.*)?$/i.test(url.href) ||
                  /images-assets\.nasa\.gov|assets\.science\.nasa\.gov|upload\.wikimedia\.org|thumb\.wikimedia\.org|mars\.nasa\.gov|science\.nasa\.gov|www\.nasa\.gov|www\.sri\.com|media\.gettyimages\.com|assets\.thehansindia\.com|encrypted-tbn0\.gstatic\.com|images\.unsplash\.com/i.test(url.hostname)
                );
              },
              handler: 'CacheFirst',
              options: {
                cacheName: 'mission-images-vault-v2',
                expiration: {
                  maxEntries: 800,
                  maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: ({ request, url }) => {
                return (
                  request.destination === 'video' ||
                  /\.(?:mp4|webm|ogv)(?:\?.*)?$/i.test(url.href) ||
                  /v1\.pinimg\.com/i.test(url.hostname)
                );
              },
              handler: 'CacheFirst',
              options: {
                cacheName: 'hero-video-vault-v1',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 365 * 24 * 60 * 60,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /\.(?:mp3|wav|ogg)$/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'mission-audios-cache',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 365 * 24 * 60 * 60,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /\.(?:glb|gltf|bin)$/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'planet-models-cache',
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 365 * 24 * 60 * 60,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 30,
                  maxAgeSeconds: 365 * 24 * 60 * 60,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
          type: 'module',
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
