const bookingConfirmation = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 10px;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Booking Confirmation</h1>
        </div>
        <div class="content">
            <h2>Dear {{params.name}},</h2>
            <p>Thank you for choosing our hotel. Your booking has been successfully confirmed!</p>
            <h3>Booking Details:</h3>
            <ul>
                <li><strong>Booking Reference:</strong> {{params.bookingReference}}</li>
                <li><strong>Hotel Name:</strong> {{params.hotelName}}</li>
                <li><strong>Check-in Date:</strong> {{params.checkIn}}</li>
                <li><strong>Check-out Date:</strong> {{params.checkOut}}</li>
            </ul>
            <p>Happy Stay!</p>
            <p>Best regards,<br>The Reservation Team</p>
        </div>
        <div class="footer">
            <p>This is an automated message. Please do not reply to this email.</p>
            <p>&copy; Weekendmonks. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`
module.exports = bookingConfirmation;