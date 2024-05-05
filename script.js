document.getElementById('registration-form').addEventListener('submit', function(event) {
    const spørsmålOgSvar = [
        { spørsmål: "Behøver du flere enn 5 seter?", id: "over5Seter" },
        { spørsmål: "Ønsker du manuelt gir?", id: "manuelGir" }
    ];
    
    let svar = {};
    let nåværendeSpørsmålIndex = 0;
    const spørsmålEl = document.getElementById("spørsmål");
    const nesteBtn = document.getElementById("neste");
    
    visNesteSpørsmål();
    
    nesteBtn.addEventListener("click", () => {
        svar[spørsmålOgSvar[nåværendeSpørsmålIndex].id] = document.getElementById(spørsmålOgSvar[nåværendeSpørsmålIndex].id).checked;
        nåværendeSpørsmålIndex++;
        if (nåværendeSpørsmålIndex < spørsmålOgSvar.length) {
            visNesteSpørsmål();
        } else {
            visAnbefaling();
        }
    });
    
    function visNesteSpørsmål() {
        const nåværendeSpørsmål = spørsmålOgSvar[nåværendeSpørsmålIndex];
        spørsmålEl.innerHTML = `<p>${nåværendeSpørsmål.spørsmål}</p>`;
        spørsmålEl.innerHTML += `<label><input type="checkbox" id="${nåværendeSpørsmål.id}"> Ja</label><br>`;
        spørsmålEl.innerHTML += `<label><input type="checkbox" id="${nåværendeSpørsmål.id}"> Nei</label><br>`;
    }
    
    function visAnbefaling() {
        let anbefaling = "Du bør vurdere ";
        if (svar.over5Seter && svar.manuelGir) {
            anbefaling += "SUV-modellen!";
        } else if (svar.over5Seter) {
            anbefaling += "Volvo-modellen!";
        } else {
            anbefaling += "En kompaktbil!";
        }
        spørsmålEl.innerHTML = "<h2>" + anbefaling + "</h2>";
    }
    
    const bilPriser = {
        suv: 1000,
        volvo: 800,
        kompaktbil: 600
    };
    
    function beregnAntallDager(hentedato, returdato) {
        var startDato = new Date(hentedato);
        var sluttDato = new Date(returdato);
        var tidForskjell = sluttDato.getTime() - startDato.getTime();
        var antallDager = tidForskjell / (1000 * 3600 * 24);
        antallDager = Math.round(antallDager);
        return antallDager;
    }
    
    function beregnPris() {
        var hentedato = document.getElementById("hentedato").value;
        var returdato = document.getElementById("returdato").value;
        var bsEl = document.querySelector("#bs");
        var dakboksEl = document.querySelector("#dakboks");
        var wifiEl = document.querySelector("#wifi");
        var tvEl = document.querySelector("#tv");
        var valgtBilmodell = document.getElementById("bilmodell").value;
        var prisPerDag = bilPriser[valgtBilmodell];
    
        var antallDager = beregnAntallDager(hentedato, returdato);
        // Beregn totalsummen ved å multiplisere antall dager med prisen per dag
        var totalsum = antallDager * prisPerDag;
    
        var valgOgPrisEl = document.getElementById("valgOgPris");
        var liste = "<ul>"; // Start på listen
    
        if (bsEl.checked) { 
            liste += "<li>Barnesete/bilsete (+100kr)</li>"; 
            totalsum += 100; 
        }
        if (dakboksEl.checked) { 
            liste += "<li>Tilhengerfeste/dakboks (+75kr)</li>"; 
            totalsum += 75; 
        }
        if (wifiEl.checked) { 
            liste += "<li>Wi-Fi-hotspot (+200kr)</li>"; 
            totalsum += 200; 
        }
        if (tvEl.checked) { 
            liste += "<li>TV (+200kr)</li>"; 
            totalsum += 200; 
        }
    
        liste += "</ul>"; // Avslutt listen
    
        valgOgPrisEl.innerHTML = "Valgte tilleggstjenester og pris for " + antallDager + " dager med " + valgtBilmodell + ":<br>" + liste;
        valgOgPrisEl.innerHTML += "<strong>Totalsum: " + totalsum + "kr</strong>";
    }
    
    
    // Legger til en lytter på knappen
    document.querySelector("#knapp").addEventListener("click", beregnPris);
    
    
    
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
    