<?php

session_start();

if (empty($_SESSION['cart'])) {
    $_SESSION['cart'] = array();

    array_push($_SESSION['cart'], $_GET['id']);
}
?>

<p>
<a href="wishlist.php">Go to Wishlist</a>
</p>