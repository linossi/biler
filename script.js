function velgBiltype() {
    let størrelse = prompt("Velg størrelse: Liten, Medium eller Stor");
    if (størrelse.toLowerCase() === "liten") {
        let effektivitet = prompt("Velg drivstoffeffektivitet: Lav, Medium eller Høy");
        if (effektivitet.toLowerCase() === "lav") {
            let terreng = prompt("Velg terrengtilpasning: Urban eller Blandet");
            if (terreng.toLowerCase() === "urban") {
                alert("Du valgte: Kompaktbil");
            } else {
                alert("Du valgte: Sedan");
            }
        } else {
            alert("Du valgte: Sedan");
        }
    } else if (størrelse.toLowerCase() === "medium") {
        let effektivitet = prompt("Velg drivstoffeffektivitet: Lav, Medium eller Høy");
        if (effektivitet.toLowerCase() === "medium") {
            let terreng = prompt("Velg terrengtilpasning: Blandet eller Terreng");
            if (terreng.toLowerCase() === "blandet") {
                alert("Du valgte: SUV");
            } else {
                alert("Du valgte: Pickup Truck");
            }
        } else {
            alert("Du valgte: Sedan");
        }
    } else {
        alert("Du valgte: Sedan");
    }
}
