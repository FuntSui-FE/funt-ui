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
    "revision": "e837ca4b255f5f3afcb091585a92e17e"
  },
  {
    "url": "API/install.html",
    "revision": "7e132b30a51bab08dd99c645cd3bfea0"
  },
  {
    "url": "API/loading.html",
    "revision": "ff1625b364fa32a30409c5e92d4607ac"
  },
  {
    "url": "API/scroll.html",
    "revision": "aa4bdef13940dfabfdd8535882484fc2"
  },
  {
    "url": "API/start.html",
    "revision": "ef1a602911c88ae86921064cf45a92a2"
  },
  {
    "url": "assets/css/0.styles.529ec422.css",
    "revision": "bc36a0e419ea6c074dc5f227a2b507ad"
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
    "url": "assets/js/12.fccf0ed0.js",
    "revision": "32f15c50dd69b12e5042a05c5eeabc99"
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
    "url": "assets/js/4.4bf51ca0.js",
    "revision": "3bffeaff1fb42054cd71574cfb507718"
  },
  {
    "url": "assets/js/5.f328b6f5.js",
    "revision": "b9b51ced08bd9aabd85fc29c00f6c624"
  },
  {
    "url": "assets/js/6.8e00de5b.js",
    "revision": "fe6812f528f52dd7e692ab25b3afcea9"
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
    "url": "assets/js/app.d5ad3fea.js",
    "revision": "51097a687f2a04d230f20cdbf6a58575"
  },
  {
    "url": "funt-ui.png",
    "revision": "0adb9307d6b0ef947628e0c84ab192bf"
  },
  {
    "url": "index.html",
    "revision": "de1969e5abd73f46ae898f938ac67f93"
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
