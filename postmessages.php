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
$user = $_POST['user'];
$title = $_POST['title'];
$content = $_POST['post'];

$query = "INSERT INTO `newsposts`(`USER`, `TITLE`, `CONTENT`) VALUES ('$user','$title','$content');";
mysqli_query($dbconn,$query);
mysqli_close($dbconn);
echo "Post Submitted!";

?>