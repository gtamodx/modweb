<?php
$file = "mods/car-mod.zip";
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . basename($file) . '"');
readfile($file);
exit;
?>
