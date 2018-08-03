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
    "revision": "44fdacc9f42fb6c5e2a7b21879e2e936"
  },
  {
    "url": "API/install.html",
    "revision": "eea8f5570b2f3db43a8fd826304043fb"
  },
  {
    "url": "API/loading.html",
    "revision": "6719e14e8d6cb3ad7fe2c290e449b33c"
  },
  {
    "url": "API/scroll.html",
    "revision": "47354c3670bc633df3d1c5c34d7b0344"
  },
  {
    "url": "API/start.html",
    "revision": "e5e832b6ea19617f821d2e4af08d6b03"
  },
  {
    "url": "assets/css/0.styles.bf25b551.css",
    "revision": "fc47a04f317511a375a8cc96f0dc059f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7aea7105.js",
    "revision": "026abc7339bf9457fb9449d44c9c722e"
  },
  {
    "url": "assets/js/11.5d576029.js",
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
    "url": "assets/js/4.51883ac1.js",
    "revision": "ba52f1e60e7761bfc7752a6ec926b49e"
  },
  {
    "url": "assets/js/5.b5c60883.js",
    "revision": "0dbcfbda831b760e469606ca08a90419"
  },
  {
    "url": "assets/js/6.e50eba8e.js",
    "revision": "249d042203f071b7b9a3b4d908a2d3cc"
  },
  {
    "url": "assets/js/7.0c5c9fd6.js",
    "revision": "e5cde194b4d67ea1e864b177ad46f5b3"
  },
  {
    "url": "assets/js/8.f1f7eb3b.js",
    "revision": "6a4208682cf1d7eda65bf8772464499f"
  },
  {
    "url": "assets/js/9.aaf2c017.js",
    "revision": "b3426383f3d309840badc9a29622af20"
  },
  {
    "url": "assets/js/app.547c5ff0.js",
    "revision": "62a5cf48f7483524b71c6ae67494de78"
  },
  {
    "url": "funt-ui.png",
    "revision": "0adb9307d6b0ef947628e0c84ab192bf"
  },
  {
    "url": "index.html",
    "revision": "1af9f9ce2270cc952dece8e8d3b1ba4a"
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
