<!doctype html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="/site/styles/main.css">
    <link rel="stylesheet" href="/site/styles/snow.css">
    <script src="scripts/calculations.js"></script>
    <script src="/site/scripts/snow.js"></script>
    <title><?= isset($PageTitle) ? $PageTitle : "Default Title"?></title>
    <!-- Additional tags here -->
    <?php if (function_exists('custHead')){
        custHead();
    }?>
</head>
<body>
<header>
    <h1><?= $PageTitle ?></h1>
</header>