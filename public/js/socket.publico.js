var socket = io();

socket.on('estadoActual', function (data) {
    actualizaHTML(data.ultimosCuatro)
})

socket.on('ultimosCuatro', function (datos) {

    var audio = new Audio('audio/new-ticket.mp3')
    audio.play()
    actualizaHTML(datos.ultimosCuatro)
})

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorio = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4]

function actualizaHTML(ultimosCuatro) {
    for (let i = 0; i <= ultimosCuatro.length - 1; i++) {
        lblTickets[i].text('Ticket  ' + ultimosCuatro[i].numero)
        lblEscritorio[i].text('Escritorio  ' + ultimosCuatro[i].escritorio)

    }
}