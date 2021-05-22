const socket = io();

// keeps track of what has been liked in the room
let likedMovies = {};

if(location.pathname === '/'){
    socket.emit('newroom');
} else {
    socket.emit('joinroom', location.pathname.substr(1));
}

socket.on('session', (roomId) => {
    const session = $("#session-url");
    // session.text(location.host + '/' + roomId + ' ');
    // console.log(session);
    session.text(location.host + '/' + roomId + '');
});

socket.on('match', (item) => {
    if (!$(`#match-${item.id}`).length) {
        addCardToMatches(item);
        $('#matchesCount').text(++matches);
        //$('#match').prepend(`<h1 id="match-${movieId}">Match: ${movieId}</h1>`);
    }
});

const clientLikedItem = (id, media_type) => {
    socket.emit('clientLikedItem', { id, media_type });
}

$("#copy-session").click(() => {
    const texttocopy = $('#session-url').text();
    navigator.clipboard.writeText(texttocopy).then(() => {
        console.log('Async: Copying to clipboard was successful!');
      }, (err) => {
        console.error('Async: Could not copy text: ', err);
    });
    const copymodal = $('#copy-modal');
    if(copymodal.is(':visible')) { return; }
    copymodal.show();
    setTimeout(() => {
        copymodal.hide();
    }, 5000);
});