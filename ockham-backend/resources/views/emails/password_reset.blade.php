<html lang="en">
<body>
<h1>Dear {{ $member->first_name }} {{ $member->last_name }},</h1>
<p>You have requested a password reset at <a href="https://hv-ockham.nl">hv-ockham.nl</a>. You can reset your password <a href="https://hv-ockham.nl/auth/reset-password?token={{ $token }}">here</a>. If you do it after 24 hours, request a new <a href="#">password reset</a>.</p>
<p>In case the link does not work, copy and past the following in your web browser:
    <br><br>
    https://hv-ockham.nl/auth/reset-password?token={{ $token }}
</p>
<p>If you did not request this password reset, you can safely ignore this email.</p>
</body>
</html>
