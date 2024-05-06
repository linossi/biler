function velgBiltype() {
    let størrelse = document.getElementById("størrelse").value;
    let effektivitet = document.getElementById("effektivitet").value;
    let terreng = document.getElementById("terreng").value;

    let valgtBiltype = '';

    if (størrelse === "liten") {
        if (effektivitet === "lav") {
            if (terreng === "urban") {
                valgtBiltype = "Kompaktbil";
            } else {
                valgtBiltype = "Sedan";
            }
        } else {
            valgtBiltype = "Sedan";
        }
    } else if (størrelse === "medium") {
        if (effektivitet === "medium") {
            if (terreng === "blandet") {
                valgtBiltype = "SUV";
            } else {
                valgtBiltype = "Pickup Truck";
            }
        } else {
            valgtBiltype = "Sedan";
        }
    } else {
        valgtBiltype = "Sedan";
    }

    alert("Du valgte: " + valgtBiltype);
}
