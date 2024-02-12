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

const cityInfo = {
    "İstanbul": ["Beyoğlu", "Beşiktaş", "Ortaköy"],
    "Bilecik": ["Osmaneli", "Gölpazarı", "Söğüt"],
    "Çanakkale": ["Lapseki", "Geyikli", "Biga"],
};

myForm.addEventListener("submit", function (e) {
	e.preventDefault();
	// ikinci yol denemesi yapabilirsem tabi (yaptım ve oldu diyeceğim sonunda kararlıyım ısrarlıyım)
	[...this.elements].forEach(formElements => {
		if(!formElements.checkValidity()){
			if(!formElements.validitionMessage){
				formElements.insertAdjacentElement("after", errorMessages) //*insertAdjacentElement yeni öğrenilen bir methodu uyguladım bu method belirlenen konuma belirtilen eleman ekler
			}
		}
	})
	// Bu bütün hata mesajlarını vermenin birinci yolu olabilir
	//let formIsValid = true; // Formun geçerliliğini kontrol etmek için bir değişken
	// Tüm hata mesajlarını temizle
	errorMessages.forEach(errorMessage => {
		errorMessage.innerHTML = "";
	});
	if (nameInput.value === "") {
		errorMessages[0].innerHTML = `<div>Lütfen geçerli bir isim giriniz!!</div>`;
		//formIsValid = false; // Form geçerliliği bozuldu
	}
	if (surnameInput.value === "") {
		errorMessages[1].innerHTML = `<div>Lütfen geçerli bir soyisim giriniz!!</div>`;
		//formIsValid = false;
	}
	if (phoneInput.value === "") {
		errorMessages[2].innerHTML = `<div>Lütfen geçerli bir telefon numarası giriniz!!</div>`;
//		formIsValid = false;
	}
	if (emailInput.value === "" || !emailIsValid(emailInput.value)) {
		errorMessages[3].innerHTML = `<div>Lütfen geçerli bir email adresi giriniz!!</div>`;
		console.log(" erişiliyor")
//		formIsValid = false;
	}
	if (ilInput.value === "" || !validate(ilInput.value)) {
		console.log("ile erişiliyor")
//		formIsValid = false;
	}
	if (ilceInput.value === "" || !validateIlce(ilceInput.value)) {
		console.log("ilçeye erişiliyor")
//		formIsValid = false;
	}
	if (dateInput.value === "") {
		console.log("dateInput değeri:", dateInput.value);
		errorMessages[6].innerHTML = `<div>Lütfen tarihinizi seçiniz !!</div>`;
//		formIsValid = false;
	}
	if (!isGenderSelected()) {
		errorMessages[7].innerHTML = `<div>Cinsiyet seçimi yapınız !!</div>`;
//		formIsValid = false;
	}
	if (!passwordInput.value) {
		errorMessages[8].innerHTML = `<div>Lütfen bir şifre giriniz !!</div>`;
//		formIsValid = false;
	}
	if (passwordInput.value !== password2Input.value) {
		errorMessages[9].innerHTML = `<div>Parolanız uyuşmuyor !!</div>`;
//		formIsValid = false;

	} else {
		console.log("Form başarıyla gönderildi.");
	}

	//if (formIsValid) {
	//	this.submit();
	//}
});
	// cityInfo içindeki şehirlerin ilInput içine eklenmesi
	for (const city in cityInfo) {  // cityinfo içindeki dataları city nin içine ekledim
		const option = document.createElement('option'); // yeni eleman oluşturdum
		option.value = city;	// oluşturduğum elemenın citynin option a aktardım 
		option.text = city;		// text özelliiğini kullandım çünkü gelen datanın içeriğini de city ye verdim 
		ilInput.appendChild(option);	// inputtan gelen değeri appenChild özelliği ile içine ekledim bu şekilde yeni data eklense bile direk oraya eklencek
	}

	ilInput.addEventListener("change", function(){ // change yani bir değişiklik olduğunda
		const selectedIl = this.value;	//ilInputun değerini alıp selectedil diye değişken oluşturup ona atadım
		const ilceler = cityInfo[selectedIl]; // cityinfodaki dataları dizi şeklinde ilçeler diye değşkene atadım
		
		ilceInput.innerHTML = '<option value="" selected disabled>İlçe Seçiniz</option>';   // İlçe select elementini güncelledim çünkü bir önceki seçtiğim illerin ilçelerini ekrana basıyordu
		if (ilceler) {				
			ilceler.forEach(function(ilce) {  // dataları döndüm 
				const option = document.createElement('option'); // ne şekilde yazılcaksa o şekilde eleman oluşturdum 
				option.value = ilce; 
				option.textContent = ilce;
				ilceInput.appendChild(option);
			});
		} else {
			const option = document.createElement('option');
			option.textContent = 'İlçe bulunamadı';
			ilceInput.appendChild(option);
		}
	})

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


//* COMPLATED : formun gönderilmesiyle bütün hata mesajlarının aktif olması durumu
//* COMPLATED : il ve ilçenin kontrolünün sağlanması


