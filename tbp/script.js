const agaclar = [
    {
        ad: "Meşe Ağacı",
        bilgi: "2011 yılında dikildi. Ortalama boyu 6 metredir.",
        resim: "images/agac1.jpg"
    },
    {
        ad: "Çınar Ağacı",
        bilgi: "2018 yılında dikildi. Geniş gövdesi ile dikkat çeker.",
        resim: "images/agac2.jpg"
    },
    {
        ad: "Çam Ağacı",
        bilgi: "2020 yılında dikildi. Yıl boyunca yeşil kalır.",
        resim: "images/agac3.jpg"
    }
];

function getId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id")) || 1;
}

function agaciGoster(id) {
    const agac = agaclar[id - 1];
    document.getElementById("agacAdi").innerText = agac.ad;
    document.getElementById("agacBilgi").innerText = agac.bilgi;
    document.getElementById("agacResim").src = agac.resim;
}

function sonrakiAgac() {
    let id = getId();
    id++;
    if (id > agaclar.length) id = 1;
    window.location.search = "?id=" + id;
}

agaciGoster(getId());