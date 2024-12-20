<?php
// Connect to your database
$host = "localhost";
$username = "root";
$password = "";
$dbname = "grah";

$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$ele = $_POST['ele'];
$aadhar = $_POST['aadhar'];

// Insert data into database
$sql = "INSERT INTO grah (name, email, phone, ele, aadhar)
VALUES ('$name', '$email', '$phone', '$ele','$aadhar')";

if ($conn->query($sql) === TRUE) {
    echo "registration successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gruha Jyothi Scheme Registration Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
        <h1>registered Details</Details></h1>
        <p><strong>Name:</strong> <?= ($name) ?></p>
        <p><strong>Email:</strong> <?= ($email) ?></p>
        <p><strong>Phone Number:</strong> <?= ($phone) ?></p>
        <p><strong>electricity</strong> <?= ($ele) ?></p>
        <p><strong>aadhar number</strong> <?= ($aadhar) ?></p>
         </p>
    </div>
</body>
</html>
