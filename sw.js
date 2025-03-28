const CACHE_NAME = 'iron-swords-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png',
  '/assets/bg.jpg',
  '/assets/plane.png',
  '/assets/meyaret.png',
  '/assets/enemy.png',
  '/assets/progiks.jpg',
  '/assets/bgSong.mp3',
  '/assets/boom.mp3'
];

// שלב ההתקנה - שמור במטמון
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching assets');
        return cache.addAll(ASSETS);
      })
      .catch((err) => {
        console.error('Caching failed:', err);
      })
  );
});

// שלב הפניית בקשות
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});