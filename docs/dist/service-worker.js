/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f3a7a94d3bceb06370c54519dbec7e39"
  },
  {
    "url": "API/install.html",
    "revision": "81052d47ff8283cf7e3e5e0415eacee7"
  },
  {
    "url": "API/loading.html",
    "revision": "3c32df01a4cabbc47e978f9a07bc1d34"
  },
  {
    "url": "API/scroll.html",
    "revision": "d240b1fc2eed54498051cb3d0fd8fb56"
  },
  {
    "url": "API/start.html",
    "revision": "0498a9bee6656f4d949151f666172c36"
  },
  {
    "url": "assets/css/0.styles.8c7e7bcf.css",
    "revision": "95a7f272decc51525361a9758cda63da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e89edcd1.js",
    "revision": "026abc7339bf9457fb9449d44c9c722e"
  },
  {
    "url": "assets/js/11.0783c220.js",
    "revision": "4ad8e25b311aeb57dc2ccbc6035a747d"
  },
  {
    "url": "assets/js/12.253a30ca.js",
    "revision": "1a2152e9261827aab9474fb6eb23d92a"
  },
  {
    "url": "assets/js/2.f18bfe2d.js",
    "revision": "93651c2109aed087f489b2bb248b0f2d"
  },
  {
    "url": "assets/js/3.769a01a1.js",
    "revision": "cbb3bb824e801d9fa6ded582e14ad072"
  },
  {
    "url": "assets/js/4.b69cb520.js",
    "revision": "ba52f1e60e7761bfc7752a6ec926b49e"
  },
  {
    "url": "assets/js/5.02bac39d.js",
    "revision": "0dbcfbda831b760e469606ca08a90419"
  },
  {
    "url": "assets/js/6.f3372c96.js",
    "revision": "249d042203f071b7b9a3b4d908a2d3cc"
  },
  {
    "url": "assets/js/7.5086febb.js",
    "revision": "e5cde194b4d67ea1e864b177ad46f5b3"
  },
  {
    "url": "assets/js/8.a21516df.js",
    "revision": "6a4208682cf1d7eda65bf8772464499f"
  },
  {
    "url": "assets/js/9.bc6aac31.js",
    "revision": "b3426383f3d309840badc9a29622af20"
  },
  {
    "url": "assets/js/app.0253a834.js",
    "revision": "ac809590386b22d61993777b9cc97670"
  },
  {
    "url": "funt-ui.png",
    "revision": "0adb9307d6b0ef947628e0c84ab192bf"
  },
  {
    "url": "index.html",
    "revision": "77cfebd258ce3c68ac3cc80c5ebc9223"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
