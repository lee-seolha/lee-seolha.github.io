<?php
// Get the foreground colour
if (isset($_COOKIE["forecolour"]) && strlen($_COOKIE["forecolour"]) == 4)
{
	$strForecolour = $_COOKIE["forecolour"];
}
else
{
	$strForecolour = "#000";
}

// Get the background colour
if (isset($_COOKIE["backcolour"]) && strlen($_COOKIE["backcolour"]) == 4)
{
	$strBackcolour = $_COOKIE["backcolour"];
}
else
{
	$strBackcolour = "#FFF";
}

// If colours sent through form (no JavaScript), set the
// colours
if ($_POST)
{
	// Get posted colours
	if (isset($_POST["background"])) $strBackcolour = $_POST["background"];
	if (isset($_POST["foreground"])) $strForecolour = $_POST["foreground"];

	// Set cookies
	setcookie("backcolour", $strBackcolour, time() + (3600 * 24 * 365), "/");
	setcookie("forecolour", $strForecolour, time() + (3600 * 24 * 365), "/");
}
?>
<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
	   <title>Home - Seolha Lee</title>
		<link rel="stylesheet" type="text/css" href="/css/main.css">
      <script type="text/javascript" src="/js/colourpicker.js"></script>
<?php
// Set style block
echo "\t<style type=\"text/css\">body, legend, a{ color: " . htmlspecialchars($strForecolour) . "; background: " . htmlspecialchars($strBackcolour) . ";}</style>\n";
?>
   </head>
		<body>
			<h2>Welcom to Lee's Office</h2>
            <ul class = "home list">
               <li><a href="/about">» About</a></li>
               <li><a href="/research">» Research</a></li>
               <li><a href="/teaching">» Teaching</a></li>
               <li><a href="/blog">» Rambles</a></li>
            </ul>
            <h3>Change the colours of this page</h3>
            <form id="colourpicker" method="post" action="index.php">
               <fieldset>
               <legend>Colours</legend>
               <div>
                  <label for="foreground">Foregound: <a href="choosecolour.php#foreground" id="forelink">pick<span class="context"> a foreground colour</span></a></label>
                  <input type="text" value="<?php echo htmlspecialchars($strForecolour); ?>" id="foreground" name="foreground">
               </div>
               <div>
                  <label for="background">Backgound: <a href="choosecolour.php#background" id="backlink">pick<span class="context"> a foreground colour</span></a></label>
                  <input type="text" value="<?php echo htmlspecialchars($strBackcolour); ?>" id="background" name="background">
               </div>
               </fieldset>
               <div>
                  <input type="submit" value="Change colours" id="changecolour">
               </div>
            </form>
         <footer>
            <ul>
               <li><a href="mailto:leeseolh@gmail.com">Email</a></li>
               <li><a href="https://github.com/lee-seolha">github.com/lee-seolha</a></li>
				</ul>
			</footer>
		</body>
	</html>