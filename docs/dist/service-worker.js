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
    "revision": "01c53d8a874f15420bbb364a0c3b5843"
  },
  {
    "url": "API/install.html",
    "revision": "44717b87b3a9a6d4e19d90c067d40a69"
  },
  {
    "url": "API/lmarquee.html",
    "revision": "6c6af7587c59e9d3172fa396270fac1b"
  },
  {
    "url": "API/loading.html",
    "revision": "f88115017961443cc94ff28137b8f2d5"
  },
  {
    "url": "API/marquee.html",
    "revision": "88f0a5baa8b38bbb03dfe50102980d4c"
  },
  {
    "url": "API/scroll.html",
    "revision": "cc519430729547c09135d51086267e9d"
  },
  {
    "url": "API/start.html",
    "revision": "7f22e5dd64aa5570d438ab2a2a540c37"
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
    "url": "assets/js/10.f518eeaf.js",
    "revision": "a03ef58f31b38a3463f8715132d8c2e5"
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
    "url": "assets/js/7.b19516fb.js",
    "revision": "1b99033f846a18eb75c0a40bc491904a"
  },
  {
    "url": "assets/js/8.8c5901da.js",
    "revision": "e19d0a2ec58a10ed11fe1bf07350c3eb"
  },
  {
    "url": "assets/js/9.44557a5f.js",
    "revision": "0ca53a72d92b71acddf516dd9b8e04f0"
  },
  {
    "url": "assets/js/app.30e1650f.js",
    "revision": "77bfe698123dc9dfeb600f6011bb1d18"
  },
  {
    "url": "funt-ui.png",
    "revision": "0adb9307d6b0ef947628e0c84ab192bf"
  },
  {
    "url": "index.html",
    "revision": "fb50e12ceb96a422fc28fda75e47c2e7"
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
