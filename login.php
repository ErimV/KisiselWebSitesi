<?php
	session_start();

		if(isset($_POST['login'])){
			$mail = $_POST['email'];
			$pass = $_POST['password'];
			if(($mail == "b211210355@sakarya.edu.tr") && $pass == "b211210355") {
				$_SESSION['user'] = true;
				echo 'Hoşgeldiniz ', $pass, '<br><a href="index.html">Anasayfaya Geri Dön</a>';
			}
			else {
				echo 'Yanlış giriş yapıldı. Geri dönüp tekrar deneyiniz.', '<br><a href="login.html">Geri Dön</a>';
			}
		}

?>