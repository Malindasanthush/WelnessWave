<?php
if (isset($_POST['submit'])) {
    require 'dbh.inc.php';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $uid = $_POST['uid'];
    $password = $_POST['pwd'];
    $passwordRepeat = $_POST['pwdrepeat'];

    if (empty($name) || empty($email) || empty($uid) || empty($password) || empty($passwordRepeat)) {
        header("Location: ../register.php?error=emptyfields");
        exit();
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: ../register.php?error=invalidemail");
        exit();
    } elseif ($password !== $passwordRepeat) {
        header("Location: ../register.php?error=passwordcheck");
        exit();
    } else {
        $sql = "SELECT usersUid FROM userstable WHERE usersUid=?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location: ../register.php?error=sqlerror");
            exit();
        } else {
            mysqli_stmt_bind_param($stmt, "s", $uid);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            $resultCount = mysqli_stmt_num_rows($stmt);
            if ($resultCount > 0) {
                header("Location: ../register.php?error=usertaken");
                exit();
            } else {
                $sql = "INSERT INTO userstable (usersName, usersEmail, usersUid, usersPassword) VALUES (?, ?, ?, ?)";
                $stmt = mysqli_stmt_init($conn);
                if (!mysqli_stmt_prepare($stmt, $sql)) {
                    header("Location: ../register.php?error=sqlerror");
                    exit();
                } else {
                    $hashedPwd = password_hash($password, PASSWORD_DEFAULT);

                    mysqli_stmt_bind_param($stmt, "ssss", $name, $email, $uid, $hashedPwd);
                    mysqli_stmt_execute($stmt);
                    header("Location: ../dashboard.php?signup=success");
                    exit();
                }
            }
        }
    }
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
} else {
    header("Location: ../register.php");
    exit();
}
?>
