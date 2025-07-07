const CACHE = 'v1';
const ASSETS = [
  '/my-portfolio-site/',
  '/my-portfolio-site/index.html',
  '/my-portfolio-site/style.css',
  '/my-portfolio-site/main.js',
  '/my-portfolio-site/manifest.json',
  '/my-portfolio-site/icon-192.png',
  // etc
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true })
      .then(r => r || fetch(e.request))
      .catch(() => caches.match('/my-portfolio-site/index.html'))

});
