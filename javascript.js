
//Evaporator:
const capacityInput = document.getElementById("capacityInput");
const calculateBtn = document.getElementById("calculateBtn");
const outputField = document.getElementById("outputField");
//radio buttons Evaporator:
const r404aRadioBtn = document.getElementById("r404aRadioBtn");
const r134aRadioBtn = document.getElementById("r134aRadioBtn");
const r448aRadioBtn = document.getElementById("r448aRadioBtn");
const dT10kRadioBtn = document.getElementById("dT10kRadioBtn");
const dT8kRadioBtn = document.getElementById("dT8kRadioBtn");
const dT7kRadioBtn = document.getElementById("dT7kRadioBtn");

calculateBtn.addEventListener("click", evaporatorConverter);

capacityInput.addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        calculateBtn.click();
    }
});


function evaporatorConverter(){
    let resultEvaporator = 0;

    //dT 10K
    if (r404aRadioBtn.checked && dT10kRadioBtn.checked){
        resultEvaporator = capacityInput.value * 1;}
        
    if (r134aRadioBtn.checked && dT10kRadioBtn.checked){
        resultEvaporator = (capacityInput.value * 0.87);}

    if (r448aRadioBtn.checked && dT10kRadioBtn.checked){
        resultEvaporator = (capacityInput.value * 1.29);}

    //dT 8K
    if (r404aRadioBtn.checked && dT8kRadioBtn.checked){
        resultEvaporator = capacityInput.value * 0.79;}
        
    if (r134aRadioBtn.checked && dT8kRadioBtn.checked){
        resultEvaporator = (capacityInput.value * 0.71);}

    if (r448aRadioBtn.checked && dT8kRadioBtn.checked){
        resultEvaporator = (capacityInput.value * 1.1);}

    //dT 7K
    if (r404aRadioBtn.checked && dT7kRadioBtn.checked){
        resultEvaporator = capacityInput.value * 0.68;}
        
    if (r134aRadioBtn.checked && dT7kRadioBtn.checked){
        resultEvaporator = (capacityInput.value * 0.62);}

    if (r448aRadioBtn.checked && dT7kRadioBtn.checked){
        resultEvaporator = (capacityInput.value * 1);}

    outputField.textContent = `${Math.round(resultEvaporator)}W`
    
}


//Condenser:
const capacityInputCondenser = document.getElementById("capacityInputCondenser");
const calculateBtnCondenser = document.getElementById("calculateBtnCondenser");
const outputFieldCondenser = document.getElementById("outputFieldCondenser");
//radio buttons Condenser:
const r404aRadioBtnCondenser = document.getElementById("r404aRadioBtnCondenser");
const r134aRadioBtnCondenser = document.getElementById("r134aRadioBtnCondenser");
const r448aRadioBtnCondenser = document.getElementById("r448aRadioBtnCondenser");
const dT15kRadioBtnCondenser = document.getElementById("dT15kRadioBtnCondenser");
const dT12kRadioBtnCondenser = document.getElementById("dT12kRadioBtnCondenser");
const dT10kRadioBtnCondenser = document.getElementById("dT10kRadioBtnCondenser");

calculateBtnCondenser.addEventListener("click", condenserConverter);

capacityInputCondenser.addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        calculateBtnCondenser.click();
    }
});

function condenserConverter(){
    let resultCondenser = 0;

    //dT 15K
    if (r404aRadioBtnCondenser.checked && dT15kRadioBtnCondenser.checked){
        resultCondenser = capacityInputCondenser.value * 1;}
        
    if (r134aRadioBtnCondenser.checked && dT15kRadioBtnCondenser.checked){
        resultCondenser = (capacityInputCondenser.value * 0.995);}

    if (r448aRadioBtnCondenser.checked && dT15kRadioBtnCondenser.checked){
        resultCondenser = (capacityInputCondenser.value * 0.85);}

    //dT 12K
    if (r404aRadioBtnCondenser.checked && dT12kRadioBtnCondenser.checked){
        resultCondenser = capacityInputCondenser.value * 0.78;}
        
    if (r134aRadioBtnCondenser.checked && dT12kRadioBtnCondenser.checked){
        resultCondenser = (capacityInputCondenser.value * 0.79);}

    if (r448aRadioBtnCondenser.checked && dT12kRadioBtnCondenser.checked){
        resultCondenser = (capacityInputCondenser.value * 0.64);}

    //dT 10K
    if (r404aRadioBtnCondenser.checked && dT10kRadioBtnCondenser.checked){
        resultCondenser = capacityInputCondenser.value * 0.63;}
        
    if (r134aRadioBtnCondenser.checked && dT10kRadioBtnCondenser.checked){
        resultCondenser = (capacityInputCondenser.value * 0.64);}

    if (r448aRadioBtnCondenser.checked && dT10kRadioBtnCondenser.checked){
        resultCondenser = (capacityInputCondenser.value * 0.48);}

    outputFieldCondenser.textContent = `${Math.round(resultCondenser)}W`
    
    console.log(resultCondenser);
}