document.getElementById('bilUtleieSkjema').addEventListener('submit', function(event) {
    event.preventDefault();
    var bilType = document.getElementById('bilType').value;
    var dager = parseInt(document.getElementById('dager').value);
    var pris = beregnPris(bilType, dager);
    document.getElementById('total').value = pris + ' kr';
});

function beregnPris(bilType, dager) {
    var prisPerDag = 0;
    switch (bilType) {
        case 'standard':
            prisPerDag = 500;
            break;
        case 'premium':
            prisPerDag = 800;
            break;
        case 'luksus':
            prisPerDag = 1200;
            break;
        default:
            prisPerDag = 0;
    }
    return prisPerDag * dager;
}

document.getElementById('registreringsskjema').addEventListener('submit', function(event) {
    event.preventDefault();
    var fornavn = document.getElementById('fornavn').value;
    var etternavn = document.getElementById('etternavn').value;
    var postnummer = document.getElementById('postnummer').value;
    var epost = document.getElementById('epost').value;
    var passord = document.getElementById('passord').value;
    var bekreftPassord = document.getElementById('bekreftPassord').value;
    
    if (passord !== bekreftPassord) {
        document.getElementById('melding').innerHTML = '<p class="feil">Passordene matcher ikke!</p>';
        return;
    }
    
    // Her kan du legge til koden for å sende dataene til en backend for registrering
    
    document.getElementById('melding').innerHTML = '<p class="suksess">Du er registrert!</p>';
    // Her kan du eventuelt videresende brukeren til en innloggingsside eller annen side
});
