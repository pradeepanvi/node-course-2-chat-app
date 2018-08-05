var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from:'Pradeep',
        text:'Yup, that works for me.'
    })    
    // socket.emit('createEmail', {
    //     to: 'jen@example.com',
    //     text: 'Hey, This is Pradeep'
    // });

    // socket.on('createMessage', (message) => {
    //     console.log('createMessage', message);
    // })
})

socket.on('disconnect', function () {
    console.log('Disconnnected from server');
})

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
})