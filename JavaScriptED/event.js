// Event'ler
console.log('*** Javascript Event\'leri ***');
    
    // onclick="" event tanımı.
    function tikla(){
        console.log("Butona Tıklandı.");
    };
    console.log('\n');

    // onclick="this.innerHTML = ''"
    // innerHTML ile elementin içeriğini değiştirmeye yarar.
    let innerHTMLString = "Butona Tıklandı.";

    // this element yöntemiyle tikla2 fonksiyonunda butonun tüm özellikleri aktarmış olduk.
    // Bu fonksiyon içerisinde butonla ilgili tüm değişikliklikler yapılabilir artık.
    function tikla2(element){
        element.innerHTML = "Butona Tıklandı.."
    };

    // id tanımlı bir tag alanına etki edilmesi.
    // document.getElementById("")
    function changeColor(){
        let element = document.getElementById("paragraf1");
        element.style.color = "red";
    };

    // onmouseover="" ilgili alanın üzerine geldiğinde yapılacak işlemler.
    // onmouseout="" ilgili alanın üzerinden çıkıldığında yapılacak işlemler.
    function mouseover(){
        let element = document.getElementById("paragraf1");
        element.style.color = "blue";
        element.innerHTML = "Mouse Over Efekti. Paragraf 1";
    };

    function mouseout(){
        let element = document.getElementById("paragraf1");
        element.style.color = "black";
        element.innerHTML = "Mouse Out Efekti. Paragraf 1";
    };

    // Form doğrulama işlemleri
    // onsubmit method
    function verification(){
        let form = document.forms["form1"];
        let val = form["isim"].value;
        let nameValid = document.getElementById("isimValid");
        if(val == ""){
            nameValid.innerHTML = "İsim Alanı Boş Bırakılamaz";
            nameValid.style.color = "red";
            console.log("İsim Alanı Boş Bırakılamaz");
            return false;
        }
        nameValid.innerHTML = "";
        nameValid.style.color = "black";
        return true;
    };
    console.log('\n');

// 
// console.log('***  ***');
// console.log('\n');

// // 
// console.log('***  ***');
// console.log('\n');

// // 
// console.log('***  ***');
// console.log('\n');

// // 
// console.log('***  ***');
// console.log('\n');

// // 
// console.log('***  ***');
// console.log('\n');

// // 
// console.log('***  ***');
// console.log('\n');

// // 
// console.log('***  ***');
// console.log('\n');