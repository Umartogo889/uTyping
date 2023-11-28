let tillar = document.getElementsByClassName("tillarni_tanlash")

function ozgartirildi(e) {
    document.getElementById("text-input").value = e.target.value
}


tillar[0].addEventListener("change", ozgartirildi)
