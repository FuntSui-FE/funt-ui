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
    "revision": "fafd36f01be13fa1ba529fd0f45e5777"
  },
  {
    "url": "API/install.html",
    "revision": "306b2ebf9a7140474565d4d0d10d26c1"
  },
  {
    "url": "API/lmarquee.html",
    "revision": "352599c93c131bdfcaba0374f165f9a2"
  },
  {
    "url": "API/loading.html",
    "revision": "74eceb99faec1b71187e625b11ea6899"
  },
  {
    "url": "API/marquee.html",
    "revision": "ebae7644f857c9f9a7f137231b716078"
  },
  {
    "url": "API/scroll.html",
    "revision": "b6d6e7c122ab6c1054738cddd8edf047"
  },
  {
    "url": "API/start.html",
    "revision": "d98dc7ee7029cf36f98c29539c7b0113"
  },
  {
    "url": "assets/css/0.styles.132642bb.css",
    "revision": "5a84c7f3413dd1abfdc400b0fc2d12a5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.96b2d425.js",
    "revision": "efb18548456dc957f2bd2a31e4b98b50"
  },
  {
    "url": "assets/js/11.c4e3f0cd.js",
    "revision": "642937f8035b0f5c9ceb4410997a368e"
  },
  {
    "url": "assets/js/12.95382501.js",
    "revision": "eab55e5fbe0d82a285586dbc923225bd"
  },
  {
    "url": "assets/js/13.a2c8846a.js",
    "revision": "8db0dc4f50e7aecacbb90f4e547466c0"
  },
  {
    "url": "assets/js/14.adf05b12.js",
    "revision": "8a031c504149c9541598bb77af117260"
  },
  {
    "url": "assets/js/15.5d7f9bfd.js",
    "revision": "f4e0abb613992a4e129001dc749bb6c0"
  },
  {
    "url": "assets/js/16.eb1228a0.js",
    "revision": "2b604d62238dbe9b901e1d857a28d982"
  },
  {
    "url": "assets/js/17.0c5e161e.js",
    "revision": "6e70c833a11de5de0601713a156821bf"
  },
  {
    "url": "assets/js/2.67c122fc.js",
    "revision": "873d807fbe0b32de14317cdcb0423764"
  },
  {
    "url": "assets/js/3.dd0237c0.js",
    "revision": "bd15ff337c12a555b0874790cdda1f3d"
  },
  {
    "url": "assets/js/4.86b56dbb.js",
    "revision": "c5352eabb2f053bac67d8c824988e32d"
  },
  {
    "url": "assets/js/5.aabd2973.js",
    "revision": "d8154dfc3e4e2f29c5bea0368daaf1de"
  },
  {
    "url": "assets/js/6.8ee32f77.js",
    "revision": "88d832ed408825cd244ed2670d72bd1e"
  },
  {
    "url": "assets/js/7.6cd20e9a.js",
    "revision": "8c9d9d2236bb7b9ed74420f362a73613"
  },
  {
    "url": "assets/js/8.44d29e0e.js",
    "revision": "4163970422c485f8f2d16eef2486652e"
  },
  {
    "url": "assets/js/9.48d249f5.js",
    "revision": "9b17463e0c3bc54bbf1f391497855aa1"
  },
  {
    "url": "assets/js/app.2d3871f8.js",
    "revision": "94d97bea0d97fea6a52a7f769919279b"
  },
  {
    "url": "funt-ui.png",
    "revision": "0adb9307d6b0ef947628e0c84ab192bf"
  },
  {
    "url": "index.html",
    "revision": "bb565db97b3e0e6040bd86e769a49d25"
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
