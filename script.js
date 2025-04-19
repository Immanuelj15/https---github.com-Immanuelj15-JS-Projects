function calculate(){
    // Get the input value from the element

    const principle = parseFloat(document.getElementById('principle').value);
    const interstRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // Calculate the interest

    const maturityAmount = principle + (principle * interstRate * tenure) / 100;

    // Display the result

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

// Attach the event listner

document.getElementById('calculateBtn').addEventListener('click', calculate);
