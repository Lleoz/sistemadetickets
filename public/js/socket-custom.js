var socket = io();  
var label = $('#lblNuevoTicket')

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});

socket.on('estadoActual', function(estadoActual){

    label.text(estadoActual.estado)
})

$('button').on('click', function(){
    
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket)
        
    });
}) 