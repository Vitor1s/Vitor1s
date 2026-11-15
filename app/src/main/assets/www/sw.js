// Aumente a versão ao atualizar qualquer arquivo do jogo.
const V = 'raidenx-v2';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'raidenx.swf', 'raidenx.jpg',
              'icon-192.png', 'icon-512.png', 'ruffle/ruffle.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  const store = res => {
    if (res && res.status === 200) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); }
    return res;
  };
  if (r.mode === 'navigate') {            // HTML: rede primeiro, cache se offline
    e.respondWith(fetch(r).then(store).catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(r, { ignoreSearch: true })
    .then(hit => hit || fetch(r).then(store)));   // resto: cache primeiro
});
