<!DOCTYPE html>
<html>
<head>
    <title>Atendimento Online</title>
    <style>
        .image{
            width: 100px;
            img{ width: 100%}
        }

        .context{
            padding: 10px;
        }

    </style>
</head>

<body>
<div class="container">
    <div class="image">
        <img src="{{ $message->embed($image) }}">
    </div>
    <h1>Atendimento Personalizado</h1>
    <div class="row context">
        <div class="col-md-12">
            <p><strong>Nome:</strong> {{$name}}</p>
        </div>
        <hr>
        <div class="col-md-12">
            <p><strong>Telefone:</strong>  {{$phone}}</p>
        </div>
        <hr>
        <div class="col-md-12">
            <p><strong>Email:</strong> {{$email}}</p>
        </div>
        <hr>
        <div class="col-md-12">
            <p><strong>Assunto:</strong> {{$description}}</p>
        </div>
    </div>
</div>
</body>
</html>
