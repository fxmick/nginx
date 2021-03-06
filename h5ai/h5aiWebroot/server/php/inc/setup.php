<?php


function setup() {

	// MISC
	putenv("LANG=en_US.UTF-8");
	setlocale(LC_CTYPE, "en_US.UTF-8");
	date_default_timezone_set("UTC");

	define("NAME", "h5ai");
	define("VERSION", "0.25.2+0~2ac779b");
	define("STAMP", "2014-07-02 11:29:33");

	define("BACKEND", "PHP");
	define("API", true);
	define("FILE_PREFIX", "_h5ai");

	define("IP", getClientIP());

	// ADMIN
	session_start();
	define("AS_ADMIN_SESSION_KEY", "__H5AI_AS_ADMIN__");
	define("AS_ADMIN", isset($_SESSION[AS_ADMIN_SESSION_KEY]) && $_SESSION[AS_ADMIN_SESSION_KEY] === true);
	define("HAS_CUSTOM_PASSHASH", PASSHASH !== "da39a3ee5e6b4b0d3255bfef95601890afd80709");


	// PHP
	define("MIN_PHP_VERSION", "5.3.0");
	define("HAS_PHP_VERSION", version_compare(PHP_VERSION, MIN_PHP_VERSION) >= 0);
	define("HAS_PHP_EXIF", function_exists("exif_thumbnail"));
	$has_php_jpg = false;
	if (function_exists("gd_info")) {
		$infos = gd_info();
		$has_php_jpg = array_key_exists("JPG Support", $infos) && $infos["JPG Support"] || array_key_exists("JPEG Support", $infos) && $infos["JPEG Support"];
	}
	define("HAS_PHP_JPG", $has_php_jpg);


	// SERVER
	$server_name = null;
	$server_version = null;
	$server_software = getenv("SERVER_SOFTWARE");
	if ($server_software && preg_match("#^(.*?)/(.*?)(?: |$)#", strtolower($server_software), $matches)) {
		$server_name = $matches[1];
		$server_version = $matches[2];
	}
	define("SERVER_NAME", $server_name);
	define("SERVER_VERSION", $server_version);
	define("HAS_SERVER", in_array($server_name, array("apache", "lighttd", "nginx", "cherokee")));
	define("HAS_WIN_OS", strtolower(substr(PHP_OS, 0, 3)) === "win");


	// PATHS
	$script_name = getenv("SCRIPT_NAME");
	if (SERVER_NAME === "lighttpd") {
		$script_name = preg_replace("#^.*?//#", "/", $script_name);
	}
	define("APP_HREF", normalize_path(dirname(dirname(dirname($script_name))), true));
	define("APP_PATH", normalize_path(dirname(dirname(dirname(dirname(__FILE__)))), false));

	define("ROOT_HREF", normalize_path(dirname(APP_HREF), true));
	define("ROOT_PATH", normalize_path(dirname(APP_PATH), false));

	$uri_parts = parse_url(getenv("REQUEST_URI"));
	$current_href = normalize_path($uri_parts["path"], true);
	$rel_href = substr($current_href, strlen(ROOT_HREF));
	$current_path = normalize_path(ROOT_PATH . "/" . rawurldecode($rel_href));
	if (!is_dir($current_path)) {
		$current_href = normalize_path(dirname($current_href), true);
		$current_path = normalize_path(dirname($current_path), false);
	}
	define("CURRENT_HREF", $current_href);
	define("CURRENT_PATH", $current_path);

	define("INDEX_HREF", normalize_path(APP_HREF . "server/php/index.php", false));

	define("CACHE_HREF", normalize_path(APP_HREF . "cache", true));
	define("CACHE_PATH", normalize_path(APP_PATH . "/cache", false));
	define("HAS_WRITABLE_CACHE", @is_writable(CACHE_PATH));


	// EXTERNAL COMMANDS
	foreach (array("tar", "zip", "convert", "ffmpeg", "avconv", "du") as $cmd) {
		$cmdv = HAS_WIN_OS ? array("which", $cmd) : array("command", "-v", $cmd);
		define("HAS_CMD_" . strtoupper($cmd), @preg_match("#" . $cmd . "(.exe)?$#i", exec_cmdv($cmdv)) > 0);
	}
}

	function getClientIP() {

		if (isset($_SERVER)) {

			if (isset($_SERVER["HTTP_X_FORWARDED_FOR"]))
				return $_SERVER["HTTP_X_FORWARDED_FOR"];

			if (isset($_SERVER["HTTP_CLIENT_IP"]))
				return $_SERVER["HTTP_CLIENT_IP"];

			return $_SERVER["REMOTE_ADDR"];
		}

		if (getenv('HTTP_X_FORWARDED_FOR'))
			return getenv('HTTP_X_FORWARDED_FOR');

		if (getenv('HTTP_CLIENT_IP'))
			return getenv('HTTP_CLIENT_IP');

		return getenv('REMOTE_ADDR');
	}
