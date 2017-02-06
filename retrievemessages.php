<?php
//local
// $dbconn = new mysqli('localhost', 'pdbill', 'p0mp3yw3b');
//remote
$dbconn = new mysqli('localhost', 'id615677_pdbill', 'p0mp3yw3b', 'id615677_web');
if ($dbconn->connect_error) {
	die("errormessage");
	return;
}
	global $dbconn;
	
	$query = 'SELECT `USER`, `TITLE`, `CONTENT`  FROM `newsposts` ORDER BY `ID` DESC;';
	$messages = mysqli_query($dbconn,$query);
	$resultarray = array();
	
	while ($row = mysqli_fetch_assoc($messages)) {
		$resultarray[] = $row;
		// echo "<h2>" . $row['TITLE'] . "</h2><p>" . $row['CONTENT'] . "</p><br><br>";
	}
	mysqli_close($dbconn);
	echo json_encode($resultarray);
?>