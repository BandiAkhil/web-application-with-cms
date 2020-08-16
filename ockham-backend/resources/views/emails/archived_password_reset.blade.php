<html lang="en">
<body>
<h1>Dear {{ $member->first_name }} {{ $member->last_name }},</h1>
<p>You have requested a password reset at <a href="https://hv-ockham.nl">hv-ockham.nl</a>.
    Unfortunately, your account has been marked as archived and you are thus not able to login or request a password reset.
    Please contact the board if you have further questions.
<p>If you did not request this password reset, you can safely ignore this email.</p>
</body>
</html>
