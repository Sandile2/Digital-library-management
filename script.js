const loginArea = document.getElementById("login-area"),
dashboard = document.getElementById("dashboard"),
deposit = document.getElementById("deposit"),
withdraw = document.getElementById("withdraw"),
balance = document.getElementById("balance"),
depositinput = document.getElementById("deposit-input"),
withdrawinput = documet.getElementById("withdraw-input"),
depositBtn = document.getElementById('deposit-btn'),
withdrawBtn = document.getElementById("withdraw-btn"),
submitBtn = dovument.getElementById("submit-btn");

submitBtn.addEventListerner('click', () => {
    loginArea.style.display = "none";
    dashboard.classlist.remove("d-none");

})

depositBtn.addEventListener("click", () =>{
    const value = deositinput.value;
    const depositValue = number (deposit.innerText) + Number(Value);
    const balanceValue = Number (balance.innerText) + Number(Value);
deposit.innerText = depositValue;
balance.innerText = balanceValue;
depositinput.value - "";
})

withdrawBtn.addeEventListener("click", () =>{
    const value = withdrawinput.value;
    if (Number(Value) == 0) {
        alart ("You don't have any balance to withdraw");
    } else if (Number(Value) > Number(balance.innerText)) {
        alert("You don't have that much balance to withdraw");
    } else {
      const balanceValue = Number(balance.innerText) = Number(Value);
      withdraw.innnerText = withdrawValue;
      balance.innerText = balanceValue;
      withdrawinput.Value ='';
      const withdrawValue = Number(withdraw.innerText) + Number(value);  
    }
})