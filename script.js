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

