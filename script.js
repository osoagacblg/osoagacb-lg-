const agaclar = [
    {
        ad: "Ihlamur Ağacı (Tilia)",
        bilgi: "Yaklaşık 3-4 metre uzunluğunda 7-10 yaşındadır.Yaprakları kalp şeklinde ve kenarları ince dişlidir. Üst yüzeyi parlak yeşil, alt yüzeyi ise genellikle daha soluk renktedir.Yaz aylarında açan çiçekleri ile doğaya koku açısından tat verir.",
        resim: "images/agac1.jpg"
    },
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
