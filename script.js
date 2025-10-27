// Mektup verilerini tutan obje (Burayı kendi mektup verilerinle doldurmalısın!)
const mektuplar = {
    // Örnek Mektup 1: Gazi Mustafa Kemal Atatürk'e
    'mektup1': {
        baslik: "Sevgili Atam, Size Minnettarız",
        icerik: `Sevgili Atam,

        Bugün okulumuzda sizin hakkınızda çok şey öğrendik. Bize bu güzel vatanı armağan ettiğiniz için size ne kadar teşekkür etsek az. O zor günlerde bile umudunuzu hiç kaybetmeyişiniz, bize çok büyük bir ders.

        Özellikle "Benim en büyük eserim Cumhuriyettir" dediğinizde, bunun ne kadar değerli olduğunu anlıyorum. Bize gösterdiğiniz yolda, çok çalışıp başarılı birer öğrenci olmaya söz veriyoruz. Sizin ışığınız hiç sönmeyecek!

        Saygı ve sevgiyle,
        [Adın] - [Sınıfın]`,
    },
    // Örnek Mektup 2: Halide Edip Adıvar'a
    'mektup2': {
        baslik: "Halide Edip Teyzemizden Öğrendiklerimiz",
        icerik: `Sevgili Halide Edip Adıvar,

        Sizin o mitinglerdeki konuşmalarınızı hayal edince bile heyecanlanıyorum. Kadınların da bu mücadelede ne kadar güçlü olduğunu gösterdiniz. Sadece kaleminizle değil, yüreğinizle de savaştınız.

        İnsanların cesaretini artırmak için yaptıklarınız, benim için gerçek bir kahramanlık. Sizin gibi güçlü, cesur ve vatanını seven biri olmak istiyorum. Bize bıraktığınız tüm o güzel yazılar için de teşekkürler.

        Sevgiyle,
        [Adın] - [Sınıfın]`,
    },
    // Örnek Mektup 3: Sütçü İmam'a
    'mektup3': {
        baslik: "Kahraman Sütçü İmam Amca'ya",
        icerik: `Değerli Sütçü İmam Amca,

        Maraş'ta yaşananları okuyunca çok duygulandım. O anki cesaretiniz, kimsenin vatanımızın namusuna dokunamayacağını tüm dünyaya gösterdi. Bazen küçük bir kıvılcımın ne kadar büyük bir yangın başlatabileceğini sizden öğrendik.

        Siz, bizim için sadece bir kahraman değil, aynı zamanda haksızlığa karşı nasıl durulacağını gösteren bir örneksiniz. Bu vatan size minnettar.

        Büyük bir saygıyla,
        [Adın] - [Sınıfın]`,
    },
    // Buraya diğer mektuplarını ekleyebilirsin.
};


// Bir mektup kartına tıklandığında çalışacak fonksiyon (Diğer kısımlar aynı kalacak)
function acMektup(mektupId) {
    const mektupVerisi = mektuplar[mektupId];

    // Mektup verisi var mı kontrol et
    if (mektupVerisi) {
        // HTML elementlerini al
        const modal = document.getElementById('mektupModal');
        const modalBaslik = document.getElementById('modalBaslik');
        const modalIcerik = document.getElementById('modalIcerik');

        // Modal içeriğini güncelle
        modalBaslik.textContent = mektupVerisi.baslik;

        // İçeriği satır atlamaları için doğru biçimde yerleştir
        modalIcerik.innerHTML = mektupVerisi.icerik.replace(/\n/g, '<br>');

        // Modalı göster
        modal.style.display = 'block';
    } else {
        console.error("Belirtilen mektup ID'si bulunamadı:", mektupId);
    }
}

// Modal penceresini kapatan fonksiyon
function kapatMektup() {
    const modal = document.getElementById('mektupModal');
    modal.style.display = 'none';
}

// Kullanıcının modal dışında bir yere tıklamasıyla da kapanmasını sağla
window.onclick = function(event) {
    const modal = document.getElementById('mektupModal');
    if (event.target == modal) {
        kapatMektup();
    }
}

