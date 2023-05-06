


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

