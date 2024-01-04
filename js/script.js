function areaTriangle(){
    var base = document.getElementById("input-base").value;
    var height = document.getElementById("input-height").value;
    if (base>0 && height>0){
        var area = base * height / 2;
        document.getElementById("area").value = area;     
    } else{
        alert("Masukkan Nilai Yang Valid untuk alas dan tinggi!");
    }
}
function aroundTriangle(){
    var side1 = document.getElementById("input-side1").value;
    var side2 = document.getElementById("input-side2").value;
    var side3 = document.getElementById("input-side3").value;
    if (side1>0 && side2>0 && side3>0){
        var around = parseInt(side1) + parseInt(side2) + parseInt(side3);
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
    var formArea = document.getElementById("formArea");
    var formAround = document.getElementById("formAround");
    if (formArea.style.display === "none"){
        formArea.style.display = "block";
        formAround.style.display = "none";
    } else{
        formArea.style.display = "none";
        formAround.style.display = "block";
    }
}

