import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';


// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./dist/service-worker.js');
  });
  console.log('```````SW');


  // registerRoute(
  //   ({request}) => request.destination === 'script' ||
  //                   request.destination === 'style',
  //   new StaleWhileRevalidate({
  //     cacheName: 'static-resources',
  //   })
  // );
}