const clickLuas = document.getElementsByName("hitung-luas");
clickLuas.addEventListener("click",hitungLuas);
function hitungLuas() {
    let sisiLuas = document.getElementById("sisi-luas").value;

    if (sisiLuas == "" || /\D/.test(sisiLuas)){
        alert("Mohon masukkan angka");
        return false;
    }
    
    document.getElementById("rumus-luas").innerHTML = "L = S x S";
    document.getElementById("perhitungan-luas").innerHTML = "L = "+sisiLuas+" x "+sisiLuas;        
    let outputLuas = sisiLuas * sisiLuas;
    document.getElementById("output_luas").innerHTML = "L = "+outputLuas;
    console.log(sisiLuas);
}
function hitungKeliling() {
    let sisiKeliling = document.getElementById("sisi-keliling").value;
    
    if (sisiKeliling == "" || /\D/.test(sisiKeliling)){
        alert("Mohon masukkan angka");
        return false;
    }

    document.getElementById("rumus-keliling").innerHTML = "K = 4 x S";
    document.getElementById("perhitungan-keliling").innerHTML = "K = 4 x "+sisiKeliling;        
    let outputKeliling = sisiKeliling * 4;
    document.getElementById("output_keliling").innerHTML = "K = "+outputKeliling;
    console.log(sisiKeliling);
}