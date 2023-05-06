


function on() {
    document.getElementById("overlay").style.display = "block";
    alert("Csak 18 éven felülieknek");
    window.open("https://www.youtube.com/","_self")
}
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }




const maxa = 13;
const maxsz = 65;

function foglal(){
    console.log("click");
    let szemelyfoglal = document.getElementById("szemely").value;
        if(szemelyfoglal == ""){
            document.getElementById("showinputszemely").innerHTML = "Nem adtad meg hány személyre foglalsz!";
        }
        else if(szemelyfoglal < 2){
            document.getElementById("showinputszemely").innerHTML = "Minimum foglalás két fő!";
        }
        else if(szemelyfoglal > 65){
            document.getElementById("showinputszemely").innerHTML = "Maximum 65 főre lehet foglalni!";
        }  
        else{
            document.getElementById("showinputszemely").innerHTML = "Köszönjük a foglalását " + szemelyfoglal + " főre.";
            document.getElementById("showinputasztal").innerHTML = "A személyeknek " + szemelyfoglal/5  + " asztalt foglaltunk.Asztalonként minimum 2 fő";
        }
};



function reszletek() {
    document.getElementById("rolunk_bemutato").style.display = "none";
    document.getElementById("termek_reszletes").style.display = "flex";
}

function reszletek2() {
    document.getElementById("rolunk_bemutato").style.display = "none";
    document.getElementById("termek_reszletes2").style.display = "flex";
}

function reszletek3() {
    document.getElementById("rolunk_bemutato").style.display = "none";
    document.getElementById("termek_reszletes3").style.display = "flex";
}

function reszletek4() {
    document.getElementById("rolunk_bemutato").style.display = "none";
    document.getElementById("termek_reszletes4").style.display = "flex";
}
function reszletek5() {
    document.getElementById("rolunk_bemutato").style.display = "none";
    document.getElementById("termek_reszletes5").style.display = "flex";
}

function reszletek6() {
    document.getElementById("rolunk_bemutato").style.display = "none";
    document.getElementById("termek_reszletes6").style.display = "flex";
}


function bezar() {
    document.getElementById("rolunk_bemutato").style.display = "flex";
    document.getElementById("termek_reszletes").style.display = "none";
}

function bezar2() {
    document.getElementById("rolunk_bemutato").style.display = "flex";
    document.getElementById("termek_reszletes2").style.display = "none";
}

function bezar3() {
    document.getElementById("rolunk_bemutato").style.display = "flex";
    document.getElementById("termek_reszletes3").style.display = "none";
}

function bezar4() {
    document.getElementById("rolunk_bemutato").style.display = "flex";
    document.getElementById("termek_reszletes4").style.display = "none";
}

function bezar5() {
    document.getElementById("rolunk_bemutato").style.display = "flex";
    document.getElementById("termek_reszletes5").style.display = "None";
}

function bezar6() {
    document.getElementById("rolunk_bemutato").style.display = "flex";
    document.getElementById("termek_reszletes6").style.display = "none";
}
