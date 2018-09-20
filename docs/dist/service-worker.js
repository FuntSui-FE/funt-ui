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
    "revision": "646ad12f9646c9b3981cc387e750720b"
  },
  {
    "url": "API/install.html",
    "revision": "3fb8c09d19475dbfe75f9738a5ca5994"
  },
  {
    "url": "API/lmarquee.html",
    "revision": "06f99810891f5cb8ad2803529601daae"
  },
  {
    "url": "API/loading.html",
    "revision": "c463ed221c58559a168f660092abbda5"
  },
  {
    "url": "API/marquee.html",
    "revision": "d0063e6e8036bc6d0456c5a03be1d8e7"
  },
  {
    "url": "API/numkeyboard-demo.html",
    "revision": "19dcd76e0f3932fdf194153d52985ae4"
  },
  {
    "url": "API/numkeyboard.html",
    "revision": "9803d55b0557fc51a394336e2a660f53"
  },
  {
    "url": "API/scroll.html",
    "revision": "ddd0c214dffbcef511152fe11516ffd5"
  },
  {
    "url": "API/start.html",
    "revision": "9b4db5598e3607b058ba126a355cf16f"
  },
  {
    "url": "assets/css/0.styles.482ec306.css",
    "revision": "abdb1f423d674e5b34a36f80085a7745"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.60f2f7e1.js",
    "revision": "19e2f64a235bef0bd79ddd2a8b70a259"
  },
  {
    "url": "assets/js/11.f7bd4a36.js",
    "revision": "c61fe78c5e7e8eeb137e3d97c286f596"
  },
  {
    "url": "assets/js/12.0f2ce2ff.js",
    "revision": "5996d572e7e0011b19b95ea21e2fb526"
  },
  {
    "url": "assets/js/13.49c059b0.js",
    "revision": "edcb84439574a16554558010e0079786"
  },
  {
    "url": "assets/js/14.e9d8457b.js",
    "revision": "e6328fae1507851d5db4328b5a83a370"
  },
  {
    "url": "assets/js/15.9a14b504.js",
    "revision": "16299b2106c59870d5dac3e86ce77270"
  },
  {
    "url": "assets/js/16.1c2479db.js",
    "revision": "2f170196f5a33e74a89039bcc899a7ca"
  },
  {
    "url": "assets/js/17.e98255eb.js",
    "revision": "140454e03e6df202974628fafe24eff2"
  },
  {
    "url": "assets/js/18.b49ea12e.js",
    "revision": "f386d1021413a4e89c77b2204bab917e"
  },
  {
    "url": "assets/js/19.05958a76.js",
    "revision": "833623660a51e9d6de3a5e320001c52f"
  },
  {
    "url": "assets/js/2.eb3bc341.js",
    "revision": "247f20af5638ba039ffe6e41bad14c84"
  },
  {
    "url": "assets/js/20.52c9a3bf.js",
    "revision": "d4196cb3e2102b96053730fb5ff40ed6"
  },
  {
    "url": "assets/js/3.59ae6162.js",
    "revision": "5bd0952f6e637e3495c520bdde0980d9"
  },
  {
    "url": "assets/js/4.38d16500.js",
    "revision": "2a6728112a6f79a34f27913128ad3987"
  },
  {
    "url": "assets/js/5.5fb05d35.js",
    "revision": "746c5f5c4455771a3c1c69e79ed774de"
  },
  {
    "url": "assets/js/6.09bc4028.js",
    "revision": "1a202e7332c65019af1f347f3005d06d"
  },
  {
    "url": "assets/js/7.8eeaff74.js",
    "revision": "2d8a8136c57da316065590ce4366913a"
  },
  {
    "url": "assets/js/8.a7655c11.js",
    "revision": "fbf3fc33953cb314c56d799a282e584f"
  },
  {
    "url": "assets/js/9.b4e18367.js",
    "revision": "2732967fa8319e707e27ec4b96f23fb7"
  },
  {
    "url": "assets/js/app.17c5e33b.js",
    "revision": "c1d96b368c8e3f8ae235b5a105eae13c"
  },
  {
    "url": "funt-ui.png",
    "revision": "0adb9307d6b0ef947628e0c84ab192bf"
  },
  {
    "url": "index.html",
    "revision": "64b04687b2ad3951ee63e4f55f9c8213"
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
