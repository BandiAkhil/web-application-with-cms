<html lang="en">
<body>
  <h1>Dear {{ $member->first_name }} {{ $member->last_name }},</h1>
  <p>You have been registered as a member of H.V. Ockham. In order to be able to login, you have to create a password within 24 hours after receiving this email. You can do that <a href="https://hv-ockham.nl/auth/reset-password?token={{ $token }}">here</a>. If you do it after 24 hours, request a <a href="#">password reset</a>.</p>
  <p>In case the link does not work, copy and past the following in your web browser:
      <br><br>
      https://hv-ockham.nl/auth/reset-password?token={{ $token }}
  </p>
</body>
</html>
