<html lang="en">
<body>
<h1>Dear {{ $member->first_name }} {{ $member->last_name }},</h1>
<p>You have registered and paid for an Ockham activity: {{$activity->title}} ({{$activity->start_date}}).</p>
<p>In case you want to de-register and get a refund, please contact Ockham and provide this token: {{$pi}}</p>
</body>
</html>
