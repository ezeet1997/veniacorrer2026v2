const CACHE='veni-a-correr-v7';
const ASSETS=['./','./index.html','./styles.css','./script.js','./manifest.webmanifest','./assets/images/flyer-vertical.jpg','./assets/images/flyer-horizontal.jpg','./assets/images/logo-evento.jpg','./assets/images/og-cover.jpg','./docs/reglamento.pdf','./docs/deslinde.pdf'  ,"assets/images/logo-evento-transparente.png"
  ,"assets/images/favicon-32.png"
  ,"assets/images/apple-touch-icon.png"
  ,"assets/images/icon-192.png"
  ,"assets/images/icon-512.png"
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
