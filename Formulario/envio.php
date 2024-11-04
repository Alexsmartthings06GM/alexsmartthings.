<html>
<body>

Hola <?php echo $_POST["nombre"]; ?> !<br>

Tu correo es <?php echo $_POST["correo"]; ?>

Has enviado el siguiente mensaje: <p> <?php echo $_POST["mensaje"]; ?> </p>

Tu respuesta a si deseas recibir respuesta:  <?php echo $_POST["envioEmail"]; ?> 

Tu elección sobre tu profesión: <?echo $_POST["profesion"]; ?>
</body>
</html>