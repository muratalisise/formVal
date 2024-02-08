const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const surnameInput = document.getElementById("surnameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const ilInput = document.getElementById("ilInput");
const ilceInput = document.getElementById("ilceInput");
const dateInput = document.getElementById("dateInput");
const genderInputs = document.getElementsByName("gender");
const passwordInput = document.getElementById("passwordInput");
const password2Input = document.getElementById("password2Input");
const errorMessages = document.querySelectorAll(".errorMessages");

myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Tüm hata mesajlarını temizle
    errorMessages.forEach(errorMessage => {
        errorMessage.innerHTML = "";
    });

    if (nameInput.value === "" || !isNaN(nameInput.value)) {
        console.log(" erişiliyor")

        errorMessages[0].innerHTML = `<div>Lütfen geçerli bir isim giriniz!!</div>`;
    } else if (surnameInput.value === "" || !isNaN(surnameInput.value)) {
        console.log(" erişiliyor")

        errorMessages[1].innerHTML = `<div>Lütfen geçerli bir soyisim giriniz!!</div>`;
    } else if (!phoneInput.value || phoneInput.value.length < 11 || !Number(phoneInput.value)) {
        console.log(" erişiliyor")

        errorMessages[2].innerHTML = `<div>Lütfen geçerli bir telefon numarası giriniz!!</div>`;
    } else if (emailInput.value === "" || !emailIsValid(emailInput.value)) {
        errorMessages[3].innerHTML = `<div>Lütfen geçerli bir email adresi giriniz!!</div>`;
        console.log(" erişiliyor")

    } else if (ilInput.value === "" || !validate(ilInput.value)) {
        console.log("ile erişiliyor")
    
    } else if (ilceInput.value === "" || !validateIlce(ilceInput.value)) {
        console.log("ilçeye erişiliyor")

    } else if (dateInput.value === "") {
        console.log("dateInput değeri:", dateInput.value);

        errorMessages[6].innerHTML = `<div>Lütfen tarihinizi seçiniz !!</div>`;
    } else if (!isGenderSelected()) {
        errorMessages[7].innerHTML = `<div>Cinsiyet seçimi yapınız !!</div>`;
    } else if (!passwordInput.value) {
        errorMessages[8].innerHTML = `<div>Lütfen bir şifre giriniz !!</div>`;
    } else if (passwordInput.value !== password2Input.value) {
        errorMessages[9].innerHTML = `<div>Parolanız uyuşmuyor !!</div>`;
    } else {
        console.log("Form başarıyla gönderildi.");
    }
});

// Email doğrulama fonksiyonu
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Cinsiyet seçiminin yapıldığını kontrol eden fonksiyon
function isGenderSelected() {
    return genderInputs[0].checked || genderInputs[1].checked;
}


// console.log("ilceInput", ilceInput.ariaSelected)
// console.log("ilInput", ilInput.ariaSelected)



function validate() {
    if (ilInput.selectedIndex === 0) {
        errorMessages[4].innerHTML = `<div>Lütfen iliniz seçiniz !!</div>`;
        return false;
    }
    return true;
}

function validateIlce() {
    if (ilceInput.selectedIndex === 0) {
        errorMessages[5].innerHTML = `<div>Lütfen ilçenizi seçiniz !!</div>`;
        return false;
    }
    return true;
}
