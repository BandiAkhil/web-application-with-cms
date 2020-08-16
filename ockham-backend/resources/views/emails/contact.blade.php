<html lang="en">
<body>
  <h1>Hello,</h1>
  <p><b>{{ $name }}</b> has contacted you about the following:</p>
  <table>
      <tr>
          <th style="text-align: right; padding: 5px;">Subject:</th>
          <td style="text-align: left; padding: 5px;">{{ $msgSubject }}</td>
      </tr>
      <tr>
          <th style="text-align: right; padding: 5px;">Message:</th>
          <td style="text-align: left; padding: 5px;">{{ $msg }}</td>
      </tr>
  </table>
  <p>You can reply by sending an email to <a href="mailto:{{ $email }}">{{ $email }}</a>.</p>
</body>
</html>
