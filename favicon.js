// IIFE immedieately invoked function expression

(function() {

  const htmlTemplate = `
  <!-- ****** faviconit.com favicons ****** -->
  <!-- ****** mantap betul faviconit ****** -->
  <link rel="shortcut icon" href="/JS-Drill/assets/icon/favicon.ico">
  <link rel="icon" sizes="16x16 32x32 64x64" href="/JS-Drill/assets/icon/favicon.ico">
  <link rel="icon" type="image/png" sizes="196x196" href="/JS-Drill/assets/icon/favicon-192.png">
  <link rel="icon" type="image/png" sizes="160x160" href="/JS-Drill/assets/icon/favicon-160.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/JS-Drill/assets/icon/favicon-96.png">
  <link rel="icon" type="image/png" sizes="64x64" href="/JS-Drill/assets/icon/favicon-64.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/JS-Drill/assets/icon/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/JS-Drill/assets/icon/favicon-16.png">
  <link rel="apple-touch-icon" href="/JS-Drill/assets/icon/favicon-57.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/JS-Drill/assets/icon/favicon-114.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/JS-Drill/assets/icon/favicon-72.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/JS-Drill/assets/icon/favicon-144.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/JS-Drill/assets/icon/favicon-60.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/JS-Drill/assets/icon/favicon-120.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/JS-Drill/assets/icon/favicon-76.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/JS-Drill/assets/icon/favicon-152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/JS-Drill/assets/icon/favicon-180.png">
  <meta name="msapplication-TileColor" content="#FFFFFF">
  <meta name="msapplication-TileImage" content="/assets/icon/favicon-144.png">
  <meta name="msapplication-config" content="/assets/icon/browserconfig.xml">
  <!-- ****** mantap betul faviconit ****** -->
  <!-- ****** faviconit.com favicons ****** -->
`
// render favicon into head tag
document
  .getElementsByTagName("head")[0]
  .insertAdjacentHTML("beforeend", htmlTemplate);
})();
