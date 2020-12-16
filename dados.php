<?php

include_once 'conection.php';




/* this
 * 
$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$senha = filter_input(INPUT_POST, 'senha', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
 * 
 *
 * or
 * 
 * $nome = $conn->real_escape_string($_POST['u-nome']);
* $senha = $conn->real_escape_string($_POST['u-senha']);
* $email = $conn->real_escape_string($_POST['u-email']);
*/

$nome = $conn->real_escape_string($_POST['u-nome']);
$senha = $conn->real_escape_string($_POST['u-senha']);
$email = $conn->real_escape_string($_POST['u-email']);

$sexo = $conn->real_escape_string($_POST['u-sexo']);
$data = $conn->real_escape_string($_POST['u-data']);

$logra = $conn->real_escape_string($_POST['u-logra']);
$numero = $conn->real_escape_string($_POST['u-numero']);
$estado = $conn->real_escape_string($_POST['u-estado']);
$cidade = $conn->real_escape_string($_POST['u-cidade']);

$urgencia = $conn->real_escape_string($_POST['u-urgencia']);
$mensagem = $conn->real_escape_string($_POST['u-mensagem']);

$gostaria = $conn->real_escape_string($_POST['u-gostaria']);
$color = $conn->real_escape_string($_POST['u-color']);
$quantidade = $conn->real_escape_string($_POST['u-quantidade']);
$total = $conn->real_escape_string($_POST['u-total']);

    


$sql = "INSERT INTO pedidos (nome, senha, email, sexo, data, logradouro, numero, estado, cidade, urgencia, mensagem, gostaria, cor, quantidade, total) VALUES ('$nome', '$senha', '$email', '$sexo', '$data', '$logra', '$numero', '$estado', '$cidade', '$urgencia', '$mensagem', '$gostaria', '$color', '$quantidade', '$total')";


if(!$result = $conn->query($sql)){
die('There was an error running the query[' . $conn->error . ']');
}
else
{
echo "Pedido realizado com sucesso!!!";
}

  
       