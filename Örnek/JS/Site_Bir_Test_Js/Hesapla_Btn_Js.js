function hesapla() 
{

    const girdi = document.getElementById("tnb-google-search-input").value;

    if (isNaN(girdi) || girdi.trim() === "") 
        {
        alert("Lütfen geçerli bir sayı girin.");
        return;
    }

    const sonuc = girdi * 2; 

    document.querySelector(".Hesapla_Cıktı_Txt").value = sonuc;
}