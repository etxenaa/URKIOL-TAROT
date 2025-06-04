<?php
require 'vendor/autoload.php';

\Stripe\Stripe::setApiKey('sk_test_51RMpbVCt4ttH6UCJxCq7wDpkMrbMZHxLoqdJ8z9nUOVNLMz08i9uxP69dqqrAzsqJJDmR4KCwhbKGaqqrNfAuklp00R0ujN8y5'); // ← tu clave secreta

// 2. Verificar que el método sea POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!isset($input['total'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Falta el total.']);
        exit;
    }

    try {
        // Convertir euros a céntimos (Stripe usa céntimos)
        $amount = intval($input['total']) * 100;

        // 3. Crear el PaymentIntent
        $intent = \Stripe\PaymentIntent::create([
            'amount' => $amount,
            'currency' => 'eur',
            'payment_method_types' => ['card'],
        ]);

        echo json_encode(['clientSecret' => $intent->client_secret]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    http_response_code(405); // Método no permitido
    echo json_encode(['error' => 'Método no permitido']);
}
?>
