<?php
		if(isset($_POST['login'])){
			$mail = $_POST['email'];
			$pass = $_POST['password'];
			if(($mail == "b211210355@sakarya.edu.tr") && $pass == "b211210355") {
				echo 'Hoşgeldiniz ',$pass;
				echo '<a href="index.html">Geri Dön</a>';
			}
			else {
				echo 'Yanlış giriş yapıldı. Geri dönüp tekrar deneyiniz.';
				echo '<a href="index.html">Geri Dön</a>';
			}
		}

?>