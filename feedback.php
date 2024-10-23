<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Form</title>
    <link rel="shortcut icon" type="image/icon" href="static/img/png-transparent-red-heart-with-beat-illustration-heart-electrocardiography-pulse-heartbeat-cartoon-love-cartoon-character-other-removebg-preview.png" />
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .feedback-container {
            margin-top: 40px;
        }

        .star-rating {
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-start;
        }

        .star-rating input[type="radio"] {
            display: none;
        }

        .star-rating label {
            font-size: 24px;
            color: #ccc;
            padding: 0 5px;
            cursor: pointer;
        }

        .star-rating input[type="radio"]:checked~label {
            color: #f90;
        }

        .star-rating label:hover,
        .star-rating label:hover~label {
            color: #fc0;
        }

        .table td, .table th {
            vertical-align: middle;
        }
    </style>
</head>

<body>
    <div class="container feedback-container">
        <h2 class="text-center mb-4">Feedback Form</h2>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form id="feedbackForm" method="post" action="feedback.php">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name:</label>
                        <input type="text" class="form-control" id="name" name="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="feedback" class="form-label">Feedback:</label>
                        <textarea class="form-control" id="feedback" name="feedback" rows="3" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="rating" class="form-label">Rate Us:</label>
                        <div class="star-rating">
                            <input type="radio" id="star5" name="rating" value="5"><label for="star5">★</label>
                            <input type="radio" id="star4" name="rating" value="4"><label for="star4">★</label>
                            <input type="radio" id="star3" name="rating" value="3"><label for="star3">★</label>
                            <input type="radio" id="star2" name="rating" value="2"><label for="star2">★</label>
                            <input type="radio" id="star1" name="rating" value="1"><label for="star1">★</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>

        <h2 class="text-center mt-5">Previous Feedback</h2>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <table class="table table-bordered table-hover">
                    <thead class="table-light">
                        <tr>
                            <th>Name</th>
                            <th>Feedback</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        // MySQL database credentials
                        $servername = "localhost";
                        $username = "root";
                        $password = "";
                        $dbname = "new";

                        // Create connection
                        $conn = new mysqli($servername, $username, $password, $dbname);

                        // Check connection
                        if ($conn->connect_error) {
                            die("Connection failed: " . $conn->connect_error);
                        }

                        // Handle form submission
                        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                            $name = $_POST['name'];
                            $feedback = $_POST['feedback'];
                            $rating = $_POST['rating'];

                            $sql = "INSERT INTO feedback (name, feedback, rating) VALUES ('$name', '$feedback', '$rating')";

                            if ($conn->query($sql) === TRUE) {
                                // Redirect to the same page to avoid resubmission on refresh
                                header("Location: feedback.php");
                                exit();
                            } else {
                                echo "Error: " . $sql . "<br>" . $conn->error;
                            }
                        }

                        // Fetch and display feedback
                        $sql = "SELECT name, feedback, rating FROM feedback";
                        $result = $conn->query($sql);

                        if ($result->num_rows > 0) {
                            while ($row = $result->fetch_assoc()) {
                                echo "<tr><td>" . htmlspecialchars($row["name"]) . "</td><td>" . htmlspecialchars($row["feedback"]) . "</td><td>" . str_repeat("★", $row["rating"]) . "</td></tr>";
                            }
                        } else {
                            echo "<tr><td colspan='3' class='text-center'>No feedback found</td></tr>";
                        }

                        $conn->close();
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
