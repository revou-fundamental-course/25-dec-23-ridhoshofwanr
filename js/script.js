function areaTriangle(){
    let base = document.getElementById("input-base").value;
    let height = document.getElementById("input-height").value;
    if (base>0 && height>0){
        let area = base * height / 2;
        document.getElementById("area").value = area;     
    } else{
        alert("Masukkan Nilai Yang Valid untuk alas dan tinggi!");
    }
}
function aroundTriangle(){
    let side1 = document.getElementById("input-side1").value;
    let side2 = document.getElementById("input-side2").value;
    let side3 = document.getElementById("input-side3").value;
    if (side1>0 && side2>0 && side3>0){
        let around = parseInt(side1) + parseInt(side2) + parseInt(side3);
        document.getElementById("around").value = around;
    } else{

        alert("Masukkan Nilai Yang Valid untuk ketiga sisi segitiga!");
    }
}
function ResetFormArea(){
    document.getElementById("area").value ="";
    document.getElementById("input-base").value="";
    document.getElementById("input-height").value="";
}
function ResetFormAround(){
    document.getElementById("around").value="";
    document.getElementById("input-side1").value="";
    document.getElementById("input-side2").value="";
    document.getElementById("input-side3").value="";
}

function changeForm(){
    let formArea = document.getElementById("formArea");
    let formAround = document.getElementById("formAround");
    if (formArea.style.display === "none"){
        formArea.style.display = "block";
        formAround.style.display = "none";
    } else{
        formArea.style.display = "none";
        formAround.style.display = "block";
    }
}

