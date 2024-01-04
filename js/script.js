function luasSegitiga(){
    let alas = document.getElementById("input-alas").value;
    let tinggi = document.getElementById("input-tinggi").value;
    let luas = alas * tinggi / 2;
    document.getElementById("luas").value = luas;
}
function kelilingSegitiga(){
    let sisi1 = document.getElementById("input-sisi1").value;
    let sisi2 = document.getElementById("input-sisi2").value;
    let sisi3 = document.getElementById("input-sisi3").value;
    let keliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);
    document.getElementById("keliling").value = keliling;
}
function ResetForm1(){
    document.getElementById("luas").value ="";
    document.getElementById("input-alas").value="";
    document.getElementById("input-tinggi").value="";
}
function ResetForm2(){
    document.getElementById("keliling").value="";
    document.getElementById("input-sisi1").value="";
    document.getElementById("input-sisi2").value="";
    document.getElementById("input-sisi3").value="";
}
function changeForm1(){
    document.getElementById("formLuas").style.display = "block";
    document.getElementById("formKeliling").style.display = "none";
}
function changeForm2(){
    document.getElementById("formLuas").style.display = "none";
    document.getElementById("formKeliling").style.display = "block";
}
