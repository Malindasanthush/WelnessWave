<?php
if (isset($_POST['submit'])) {
    require 'dbh.inc.php';

    $uid = $_POST['uid'];
    $password = $_POST['pwd'];

    if (empty($uid) || empty($password)) {
        header("Location: ../login.php?error=emptyfields");
        exit();
    } else {
        $sql = "SELECT * FROM userstable WHERE usersUid=? OR usersEmail=?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location: ../login.php?error=sqlerror");
            exit();
        } else {
            mysqli_stmt_bind_param($stmt, "ss", $uid, $uid);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            if ($row = mysqli_fetch_assoc($result)) {
                $pwdCheck = password_verify($password, $row['usersPassword']);
                if ($pwdCheck == false) {
                    header("Location: ../login.php?error=wrongpassword");
                    exit();
                } elseif ($pwdCheck == true) {
                    session_start();
                    $_SESSION['userId'] = $row['usersId'];
                    $_SESSION['userUid'] = $row['usersUid'];

                    header("Location: ../dashboard.php?login=success");
                    exit();
                } else {
                    header("Location: ../login.php?error=wrongpassword");
                    exit();
                }
            } else {
                header("Location: ../login.php?error=nouser");
                exit();
            }
        }
    }
} else {
    header("Location: ../login.php");
    exit();
}
?>
