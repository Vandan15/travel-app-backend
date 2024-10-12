const verifyUserEmail = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Verify Your Email</title>
    <style type="text/css">
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #333333;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td>
                <table align="center" width="600" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                    <tr>
                        <td style="padding: 20px;">
                            <h1>Verify Your Email Address</h1>
                            <p>Thank you for signing up! Please verify your email address to complete your registration.</p>

                            <p>Click the button below to verify your email:</p>
                            <table cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="padding: 10px 0;">
                                        <a href="{{params.url}}" class="button" style="color: #ffffff;">Verify Email</a>
                                    </td>
                                </tr>
                            </table>

                            <p>If you didn't create an account, please ignore this email.</p>

                            <p>Best regards,<br>Weekendmonks</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`
module.exports = verifyUserEmail;