const tipResult=document.querySelector("#tipResult-el"),
tipEl=document.querySelector("#tip-el"),
totalPeople=document.querySelector("#totalPeople-el"),
totalBill=document.querySelector("#totalBill-el"),
billAmount=document.querySelector("#billAmount-el"),
showPopup=document.querySelector("#showPopup-el"),
btnPopup=document.querySelector("#btnPopup-el")
let arr=new Array();
loadStored()
function tipBillCalc(){
    if(billAmount.value&&tipEl.value&&totalPeople.value){const a=Number(billAmount.value)*Number(tipEl.value)/100/Number(totalPeople.value);
    console.log(a),tipResult.innerHTML=`Tip per person :${a}`;
    const b=Number(billAmount.value)/Number(totalPeople.value)+a;
    console.log(b),totalBill.innerHTML=`Bill amount per person : ${b}`
    const store={
        tip:a,
        bill:b
    }
    arr.push(store)
    localStorage.setItem("tipNbill",JSON.stringify(arr))}
    else console.log("please enter some value");}


function loadStored(){
    const load=JSON.parse(localStorage.getItem("tipNbill"))
    arr=load
}

