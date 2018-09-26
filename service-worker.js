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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9c36985ba181c8c7c51aa6382aa8d82c"
  },
  {
    "url": "API/install.html",
    "revision": "68c7a230666bc9c61ac3d3b241fa45ca"
  },
  {
    "url": "API/lmarquee.html",
    "revision": "676cf58e84710a77c3f4757b3c207c8a"
  },
  {
    "url": "API/loading.html",
    "revision": "b7a09ad97757297ceae9248492f9a7fb"
  },
  {
    "url": "API/marquee.html",
    "revision": "0a184c054cc1143f99cd0455ef5eeb4f"
  },
  {
    "url": "API/numkeyboard-demo.html",
    "revision": "061931e5ff3ec32ea391ccc8d35de862"
  },
  {
    "url": "API/numkeyboard.html",
    "revision": "d2d470abd0ac3481cfea811177ae14ad"
  },
  {
    "url": "API/scroll.html",
    "revision": "f8276a12991e4847ad8522c42219a4f1"
  },
  {
    "url": "API/start.html",
    "revision": "0e756fa6eb070ca857deea098973cb91"
  },
  {
    "url": "assets/css/1.styles.044bbd72.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.efe6accc.css",
    "revision": "23b85412680e85be0a9be75d8bb7573f"
  },
  {
    "url": "assets/css/3.styles.e805212d.css",
    "revision": "641b793dda4740ae32fc7e7d650cb707"
  },
  {
    "url": "assets/css/4.styles.d5cc0764.css",
    "revision": "c2f1da088235a432f0e1114d2fbf458a"
  },
  {
    "url": "assets/css/5.styles.d6c650a6.css",
    "revision": "c2f1da088235a432f0e1114d2fbf458a"
  },
  {
    "url": "assets/css/6.styles.898db53d.css",
    "revision": "4235d121eaa25242317e231f1bf6f035"
  },
  {
    "url": "assets/css/7.styles.dda40a87.css",
    "revision": "1644eb8aa0330124b4180f18f3759eff"
  },
  {
    "url": "assets/css/8.styles.440fbcd0.css",
    "revision": "ffe9e5cd3a94c4288d6f9dca0365397c"
  },
  {
    "url": "assets/css/9.styles.e2d733d3.css",
    "revision": "fa0830c6baacacc03cc53bfa3fbfc410"
  },
  {
    "url": "assets/css/styles.f13d7e82.css",
    "revision": "ba2cb4aa04f1837cba6e284456f9e997"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.044bbd72.js",
    "revision": "656a8e527d466fb6ef9669e4d5e9b7ff"
  },
  {
    "url": "assets/js/10.1511d7d4.js",
    "revision": "0aa2937100abf2678cd4653bfe7ef5d1"
  },
  {
    "url": "assets/js/11.3c014ea5.js",
    "revision": "4a37d03b5e6a82e9f9e2e2755d9d4b01"
  },
  {
    "url": "assets/js/12.2a576dd5.js",
    "revision": "ca650a33da7d92a24830f62e0242cf61"
  },
  {
    "url": "assets/js/13.064a06b2.js",
    "revision": "021dc2bf1f7874870633e098b9f58d01"
  },
  {
    "url": "assets/js/14.0d8c0ec1.js",
    "revision": "9cc07251e55a529ab342a0ccbda83878"
  },
  {
    "url": "assets/js/15.a040f8a8.js",
    "revision": "65135841f5e0d6ec2a7244dcea5db2dd"
  },
  {
    "url": "assets/js/16.2edbf465.js",
    "revision": "c657163f027b5356b66959350dbccacd"
  },
  {
    "url": "assets/js/17.4e23a3df.js",
    "revision": "1f12a864572c6234a3272bc73e07ba0a"
  },
  {
    "url": "assets/js/18.20efa12d.js",
    "revision": "89a9d5938bea631c798ad6f8f58b701f"
  },
  {
    "url": "assets/js/19.9526d96b.js",
    "revision": "2d88971e14c51e95dd05761cd096f084"
  },
  {
    "url": "assets/js/2.efe6accc.js",
    "revision": "ce8710d01b7c2c79f3a10f284be6f198"
  },
  {
    "url": "assets/js/3.e805212d.js",
    "revision": "2e7f930e827c57ba1a51fdea4343270c"
  },
  {
    "url": "assets/js/4.d5cc0764.js",
    "revision": "9acbbf2a64ea5a9593998a2533dade7d"
  },
  {
    "url": "assets/js/5.d6c650a6.js",
    "revision": "6936b0248d3e8af81f98ff23b9effecd"
  },
  {
    "url": "assets/js/6.898db53d.js",
    "revision": "006b9f22d31c1f4ff41d562674922656"
  },
  {
    "url": "assets/js/7.dda40a87.js",
    "revision": "5cab828b412001d426ac19bfd1ed2c96"
  },
  {
    "url": "assets/js/8.440fbcd0.js",
    "revision": "e37e848e364446615677e91598ec728e"
  },
  {
    "url": "assets/js/9.e2d733d3.js",
    "revision": "ff916fb27ad7f387c7c11e187c2737d7"
  },
  {
    "url": "assets/js/app.f13d7e82.js",
    "revision": "86581fadd7678b7b9c06c351eb58fbc2"
  },
  {
    "url": "funt-ui.png",
    "revision": "0adb9307d6b0ef947628e0c84ab192bf"
  },
  {
    "url": "index.html",
    "revision": "102070781992a08f4b709951f7e2cb19"
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
