self.addEventListener('install',function(event){
console.log('sw install');
event.waitUntil(
caches.open('file-3').
then(function(cache){
cache.addAll([
     '/',
     '/index.html',
     '/src/js/app.js',
     '/src/css/style.css'
	]);
})
	);
});

self.addEventListener('activate',function(){
console.log('sw activated');
});

self.addEventListener('fetch' ,function(event){
event.respondWith(
caches.match(event.request)
.then(function(response){
if(response){
	return response;
}
else{
	return fetch(event.request);
}
})
	);
});