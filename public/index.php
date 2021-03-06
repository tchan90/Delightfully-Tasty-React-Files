<?php
$TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="Delightfully Tasty" content="Melbourne-based food blog" />
  <meta name="author" content="Vivian Liu" />
  <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo192.png" />
  <!-- Preload hero images -->
  <link rel="preload" href="https://www.delightfullytastymelb.com/wp-content/uploads/2020/05/greenTeaIcecream.jpg" as="image" type="image/jpg">
  <link rel="preload" href="https://www.delightfullytastymelb.com/wp-content/uploads/2020/05/brunchImage.jpg" as="image" type="image/jpg">
  <link rel="preload" href="https://www.delightfullytastymelb.com/wp-content/uploads/2020/05/bubbleTea.jpg" as="image" type="image/jpg">
  <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
  <!--Google Search Console-->
  <meta name="google-site-verification" content="QxMFoS4F4FITkjy3uB6Kenk9qE3P9N0ZTyzisqFisNE" />
  <meta name="google-site-verification" content="vjLFBBB1bmL9vM8yICRwoUUmIcK8AznYdIkfngikM6w" />

  <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
  <!--Logo text-->
  <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet">
  <!--General text-->
  <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet">
  <!--Animate-->
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css">
  <?php wp_head(); ?>

  <!--
        If you're reading this from "view source" in your browser, it might not make sense as
        these tokens have already been evaluated and replaced, even in this remark blurb.

        Notice the use of "php echo $TEMPLATE_PATH;" and %PUBLIC_URL% in the tags above.
        Both will be replaced with the URL of the `public` folder during the build (%PUBLIC_URL%) or
        at render time (php echo $TEMPLATE_PATH;)
        Only files inside the `public` folder can be referenced like this.

        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run wpbuild`.
    -->
  <title>Delightfully Tasty</title>
</head>

<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <div id="root"></div>
  <!--
        This PHP file is a template.
        If you open it directly in the browser, you will see an empty page.

        You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.

        To begin the development, run `npm run wpstart` or `yarn wpstart`.
        To create a production bundle, use `npm run wpbuild` or `yarn wpbuild`.
    -->
</body>

</html>