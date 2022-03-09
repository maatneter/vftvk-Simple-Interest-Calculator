function compute()
{
    p = document.getElementById("principal").value;

    if(principal.value < 1){
        alert("Enter Amount")
        principal.focus()
        return
    }
    if (principal <= 0) {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
    } 
    else {
        var interest = principal * rate * years / 100;
        var yearNow = new Date().getFullYear();
        var yearsFromNow = (+yearNow) + (+years);
        var result = document.getElementById("result");
        result.innerHTML =
            '<div>' +
            'If you deposit <span class="number" id="principalResult\">' + principal + '</span>,<br/>' +
            'at an interest rate of <span class="number" id="rateResult">' + rate + '%</span>.<br/>' +
            'You will receive an amount of <span class="number" id="interestResult">' + interest + '</span>,<br/>' +
            'in the year <span class="number" id="futureYearResult">' + yearsFromNow + '</span>.<br/>' +
            '</div>'
}

function refreshSlider(){
rate.value
document.getElementById("rateLabel").innerText = rate.value + "%"}

finishPage = () =>{
    var rate = document.getElementById("rate");
    var principal = document.getElementById("principal");
    var years = document.getElementById("years");
    years = document.getElementById("years");
    for(i=1; i<=10; i++){
    	let element = document.createElement("option")
    	element.innerText = i
    	element.setAttribute("value", i)
    	years.appendChild(element)
    }
}
