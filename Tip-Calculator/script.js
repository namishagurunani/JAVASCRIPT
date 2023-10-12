const exchangeRates = {
    USD: 1,    
    EUR: 0.85, 
    GBP: 0.73, 
    INR: 73.61  
};

document.getElementById("calculate").addEventListener("click", function () {
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const serviceRating = parseFloat(document.getElementById("service-rating").value) * 0.01;
    const numPeople = parseInt(document.getElementById("num-people").value);
    const currency = document.getElementById("currency").value;

    if (isNaN(billAmount) || isNaN(serviceRating) || isNaN(numPeople) || billAmount <= 0 || numPeople <= 0 || serviceRating <= 0) {
        alert("Please enter valid values for Bill Amount, Service Rating, and Number of People.");
    } else {
        const tipAmountInUSD = (billAmount * serviceRating) / numPeople;
        const exchangeRate = exchangeRates[currency] || 1; 

        const tipAmountInSelectedCurrency = tipAmountInUSD * exchangeRate;
        const formattedTipAmount = tipAmountInSelectedCurrency.toFixed(2);

        document.getElementById("tip-amount").textContent = `Tip Amount: ${currency} ${formattedTipAmount}`;
    }
});
