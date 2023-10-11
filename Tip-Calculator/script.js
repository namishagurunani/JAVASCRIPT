document.getElementById("calculate").addEventListener("click", function () {
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const serviceRating = parseFloat(document.getElementById("service-rating").value);
    const numPeople = parseFloat(document.getElementById("num-people").value);

    if (isNaN(billAmount) || isNaN(serviceRating) || isNaN(numPeople) || billAmount <= 0 || numPeople <= 0) {
        alert("Please enter valid values for Bill Amount and Number of People.");
    } else {
        const tipAmount = (billAmount * serviceRating) / numPeople;
        document.getElementById("tip-amount").textContent = ` Tip Amount RS $${tipAmount.toFixed(2)}`;
    }
});
