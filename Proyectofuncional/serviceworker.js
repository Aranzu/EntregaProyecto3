// Base Service Worker implementation.  To use your own Service Worker, set the PWA_SERVICE_WORKER_PATH variable in settings.py

var staticCacheName = "django-pwa-v" + new Date().getTime();
var filesToCache = [
    '/',
    'historia/',
    '/static/css/style.css',
    'register_api/',
    'galeria/',
    'blog/',
    'soporte/',
    'medio_pago/',
    'comprar/',
    'register/',
    'login/',
    'account/'
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(staticCacheName)
            .then(function(cache) {
                return cache.addAll(filesToCache);
            })
    );
});


//Realiza un cache de todo


self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
        .then((result)=>{
            return caches.open(staticCacheName)
            .then(function(c) {
                c.put(event.request.url, result.clone());
                return result;
            })
        })
        .catch(function(e){
            return caches.match(event.request)
        })
    );
});
