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
    "revision": "dbdb88da46a2b9f2faec9c91a98134c2"
  },
  {
    "url": "API/install.html",
    "revision": "96647c51ea4861e94a474e6a4cafef22"
  },
  {
    "url": "API/lmarquee.html",
    "revision": "a0b1c59fb793215e184ac56845cc2c17"
  },
  {
    "url": "API/loading.html",
    "revision": "6fcfa2ff42c0b56d4c97b9baade1e5a4"
  },
  {
    "url": "API/marquee.html",
    "revision": "f7fb0d338514be7427b11ae21e6a5233"
  },
  {
    "url": "API/numkeyboard-demo.html",
    "revision": "e654b3ec276099e83585bb4f5d690e1f"
  },
  {
    "url": "API/numkeyboard.html",
    "revision": "532f23f8124500d8461bfbba87d7a399"
  },
  {
    "url": "API/scroll.html",
    "revision": "68d676d3f204ba14c40db8e66e53febb"
  },
  {
    "url": "API/start.html",
    "revision": "7aa5b1af390c1660817d2d3fe31e1fa9"
  },
  {
    "url": "assets/css/0.styles.73d74c33.css",
    "revision": "add52d8c7bd98eb9d24941fae52f66e7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b2fc136c.js",
    "revision": "1411473bb81677622f65d65448903f19"
  },
  {
    "url": "assets/js/11.f83763c9.js",
    "revision": "e83e206d3010ff46c8bc36f36a0b864a"
  },
  {
    "url": "assets/js/12.e0db9f99.js",
    "revision": "861e6259484af29c2f4cc7ed3479d086"
  },
  {
    "url": "assets/js/13.57fef949.js",
    "revision": "7c036d6542ab417908504fc8529861b5"
  },
  {
    "url": "assets/js/14.51a1a83b.js",
    "revision": "32988abca8e6807449b9984ba8f76e12"
  },
  {
    "url": "assets/js/15.dab4d612.js",
    "revision": "67e9d8651367a13fe1347ba2fed33c50"
  },
  {
    "url": "assets/js/16.671ef850.js",
    "revision": "d4d1aedf6a7891a862cbb4dcf53e1c79"
  },
  {
    "url": "assets/js/17.ae17f469.js",
    "revision": "374f99ac5e74b2db325fe51a21a0bf7c"
  },
  {
    "url": "assets/js/18.09ad2f35.js",
    "revision": "98be920669159f59673f76e10c4f8cea"
  },
  {
    "url": "assets/js/19.ac14459f.js",
    "revision": "fdfb7f0f31807f11630ac6ae5d17afc4"
  },
  {
    "url": "assets/js/2.14e479c1.js",
    "revision": "ed9b61a5052a98dd6814f8a663b3bceb"
  },
  {
    "url": "assets/js/20.4dd882cc.js",
    "revision": "9e33e6404f366097933969a94282ff8b"
  },
  {
    "url": "assets/js/21.ae4fbe2c.js",
    "revision": "f04605e14a96a5605f297c7962e66fce"
  },
  {
    "url": "assets/js/3.d7f6376d.js",
    "revision": "792d32597ea0d8bc41ac32c5b2d41d8e"
  },
  {
    "url": "assets/js/4.8213eec4.js",
    "revision": "7a0eea6fd5e517f9cbe9b8181d7e3862"
  },
  {
    "url": "assets/js/5.46098de8.js",
    "revision": "1b89e4c4fa773fbea09620565ec53268"
  },
  {
    "url": "assets/js/6.d8caa5fc.js",
    "revision": "240b849e3393a0648b25e58158103b70"
  },
  {
    "url": "assets/js/7.0954d7c1.js",
    "revision": "f439f1f76c1d234ab9f5ed3d16dabac4"
  },
  {
    "url": "assets/js/8.10a53b5d.js",
    "revision": "4525d6c7e9f0179a61ba0c194f31c816"
  },
  {
    "url": "assets/js/9.ba2dda06.js",
    "revision": "94fbedb9f519d0f1782d108a0e11d766"
  },
  {
    "url": "assets/js/app.c9a2c984.js",
    "revision": "c34793764c115b61bcff65a3cacb4fe1"
  },
  {
    "url": "funt-ui.png",
    "revision": "0adb9307d6b0ef947628e0c84ab192bf"
  },
  {
    "url": "index.html",
    "revision": "92e8958b39011ae39e1c92346354abcf"
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
