// Değişken Tanımları
console.log('*** Değişken Tanımları ***');

    // Tip bağımsız değişken tanımıdır.
    // var ile tanımlanan bir değişkeni tekrar tanımlayabiliriz ve değerini güncelleyebiliriz.
    // function scope özelliklidir.
    // Değer atanmaz ise default olarak undefined atanır.
    var sayi1 = 10;
    // Tip bağımsız değişken tanımıdır.
    // let ile tanımlanan bir değişkeni tekrar tanımlayamayız ancak değerini güncelleyebiliriz.
    // block scope özelliklidir.
    // Değer atanmaz ise default olarak undefined atanır.
    let sayi2 = 20;

    // sabit değerler için tanımlanır.
    // Const tanımlı değişken değeri güncellenemez.
    // İlk değer atanmak zorundadır.
    const sayi3 = 30;

    // sayi1 = "10";
    // sayi2 = "20";
    // sayi3 = 60; // Error.

    console.log('Toplam 1: ' + (sayi1 + sayi2 + sayi3));
    console.log('Toplam 2: ' + sayi1 + sayi2 + sayi3);
    console.log('\n');

// Dizi Tanımları
console.log('*** Dizi Tanımları ***');
    
    // Array(Dizi) tanımı
    // [] olarak tanımlanan değişken arraydir.
    let array = ['Java', 'Phyton', 'C++', 'C'];

    // Diziye Eleman Ekleme
    array[4] = 'Php'; //
    array.push('Go'); // push ile eleman eklenebilir. Push ile eleman eklerken değişkenin referansı değişmez. Reactjs gibi teknolojilerde bu referans çok önemlidir.

    // Dizinin eleman sayısını öğrenme
    console.log('Array uzunluğu : ' + array.length);

    console.log(array); // Tüm Dizi elemanlarını dizi olarak gösterir.
    console.log(array[0]); // Dizinin 1. elemanını gösterir.
    console.log(array[1]); // Dizinin 2. elemanını gösterir.
    console.log(array[2]); // Dizinin 3. elemanını gösterir.
    console.log(array[3]); // Dizinin 4. elemanını gösterir.
    console.log(array[9]); // 10. Eleman olmadığı için undefined olarak gösterinlen hata oluşur.
    console.log('\n');

// Döngüler
console.log('*** Döngüler ***');

    // For döngüsü
    for (let i = 0; i < 3; i++) {
        console.log('For i Değerleri: ' + i);
    }
    console.log('\n');

    // While Döngüsü
    let j = 0;
    while (j < 5) {
        console.log('While j Dğerleri: ' + j);
        j++;
    }
    console.log('\n');

    // ForEach Döngüsü
    let sayilar = [1, 4, 8, 32, 46, 17, 39, 42];
    sayilar.forEach(function (sayi) {
        console.log('ForEach ile Dizi Değerleri: ' + sayi);
    });
    console.log('\n');

// ==, ===, &&, ||, ! Operatörleri ve Koşullar
console.log('*** ==, ===, &&, ||, ! Operatörleri ve Koşullar ***');

    // if Else Koşul Yapısı
    let a = 5;
    let b = '5';
    // == tipleri önemsenmeden değerlerinin eşit olup olmadığına bakar.
    // === hem değerlerinin hemde veri tiplerinin eşit olduğuna bakar.
    // && and operatörüdür.
    // || or operatörüdür.
    // ! not operatörüdür.
    if (a === b) {
        console.log('Değer ve Tip Eşittir.');
    } else if (a == b) {
        console.log('Değer Eşit, Tip Eşit Değildir.');
    } else {
        console.log('Eşit Değildir.');
    }

    // Switch Case Koşul Yapısı
    let islem = 4;
    switch (islem) {
        case 1:
            console.log('İşlem = 1');
            break;
        case 2:
            console.log('İşlem = 1');
            break;
        case 3:
            console.log('İşlem = 1');
            break;
        case 4:
            console.log('İşlem = 1');
            break;
        default:
            console.log('Tanımsız');
            break;
    }
    console.log('\n');

// Fonksiyonlar
console.log('*** Fonksiyonlar ***');

    // Fonksiyon Tanımı
    function selamla(isim) {
        console.log('Selamun Aleykum ' + isim);
    }

    function toplam(x, y) {
        return x + y;
    }
    selamla('Nurullah');
    console.log('İki Sayının Toplamı = ' + toplam(1, 2));
    console.log('\n');

// Object Base
// Javascript object base programlama dilidir.
// Javascript object oriented programlama dili değildir.
// object base = alt obje oluşturulamaz, inheritance yapılamaz, polymorfisim yapılamaz.
console.log('*** Object Base ***');

    // Object Tanımlama
    // {} ile tanımlanırlar.
    let calisan = {
        isim: 'Nurullah',
        soyisim: 'Demirci',
        numara: 123456,
        diller: ['Php', 'Java', 'C++'],
        adres: {
            cadde: 'Kabil',
            sokak: '1254.sokak',
        },
        isimBilgileri: function () {
            return `İsim: ${this.isim} ${this.soyisim}`;
        },
    };
    console.log(calisan);
    console.log(calisan.isim);
    console.log(calisan.soyisim);
    console.log(calisan.numara);
    console.log(calisan.diller);
    console.log(calisan.diller[0]);
    console.log(calisan.diller[1]);
    console.log(calisan.diller[2]);
    console.log(calisan.adres);
    console.log(calisan.adres.cadde);
    console.log(calisan.adres.sokak);
    console.log(calisan.isimBilgileri());
    console.log('\n');

    // new operatörü ile Object Tanımlama
    let candidate = new Object();
    candidate.firstName = 'Nurullah';
    candidate.lastName = 'Demirci';
    candidate.nameInformation = function () {
        return `(Object with New Operator) Name : ${this.firstName} ${this.lastName}`;
    };
    console.log(candidate.nameInformation());
    console.log('\n');

    // Constructor pattern ile yapıcı fonksiyonla tanımlanabilir.
    function Candidate(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.candidateInfo = function () {
            return `(Object with Constructor Pattern) Name: ${this.firstName} ${this.lastName}`;
        };
    }
    let candidate1 = new Candidate('Nurullah', 'Demirci');
    console.log(candidate1.candidateInfo());
    console.log('\n');
