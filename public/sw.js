if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-3c9d0171"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/512_map.png",revision:"af8305b1cf2a769a24db55ceb903996b"},{url:"/_next/static/52nSMcZLvV8Ec4VvPsXGz/_buildManifest.js",revision:"91ccb1b0de591510fbe67ef804e39dd3"},{url:"/_next/static/52nSMcZLvV8Ec4VvPsXGz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/686-c9f1e4546d654199.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/802-3b2afea208b9ead5.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/979-0573e4d42969c48d.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/app/_not-found/page-697b37bec589706c.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/app/api/trpc/%5Btrpc%5D/route-b74402bf3efe8bcb.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/app/events/%5Bid%5D/page-eaf25356a0c1628c.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/app/events/page-6f71e70c39f3304f.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/app/layout-f503bf911a4e0d9b.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/app/page-5b62a68aeb36ccc5.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/ee9115c5-fb17b4293482142f.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/framework-adbf922d84f6cb13.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/main-app-256d0247cf7ed476.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/main-e8ea346fdce4bb5c.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/pages/_app-8c9065ae3505e580.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/pages/_error-2835e56b3ef9797d.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-46240b6779e59f23.js",revision:"52nSMcZLvV8Ec4VvPsXGz"},{url:"/_next/static/css/66cc92797792a6c2.css",revision:"66cc92797792a6c2"},{url:"/_next/static/css/dcdbe04e6d31261c.css",revision:"dcdbe04e6d31261c"},{url:"/_next/static/media/e11418ac562b8ac1-s.p.woff2",revision:"0e46e732cced180e3a2c7285100f27d4"},{url:"/favicon.ico",revision:"f3c25005ddbc164f60f31b5aeb413ce5"},{url:"/icon512_maskable.png",revision:"703d62ef24d6c234ef7888cfabb38333"},{url:"/icon512_rounded.png",revision:"d3404bb7fa9a2618a2e5ea488f9a1479"},{url:"/logo.png",revision:"b2ef7224a665e322eb7b2e7022ccd9e9"},{url:"/manifest.json",revision:"65a790a76385f235784a41eb5d12967e"},{url:"/tile.png",revision:"91029c9be4aec4fb392bdb4d8670d357"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
