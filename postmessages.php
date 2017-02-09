<?php
//local
// $dbconn = new mysqli('localhost', 'pdbill', 'p0mp3yw3b');
//remote
$dbconn = new mysqli('localhost', 'id615677_pdbill', 'p0mp3yw3b', 'id615677_web');
if ($dbconn->connect_error) {
	echo "Failed to connect";
	die("errormessage");
	return;
}
global $dbconn;
// collect value of input field
$user = $dbconn->real_escape_string(test_input($_POST['user']));
$title = $dbconn->real_escape_string(test_input($_POST['title']));
$content = $dbconn->real_escape_string(test_input($_POST['post']));

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}


$query = "INSERT INTO `newsposts`(`USER`, `TITLE`, `CONTENT`) VALUES ('" . $user . "','" . $title . "','" . $content . "');";
$success = mysqli_query($dbconn,$query);
mysqli_close($dbconn);
if($success)
	echo "Post Submitted!";
else {
	echo "Post failed";
}

?>

