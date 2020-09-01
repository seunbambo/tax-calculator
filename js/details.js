var federalTax = 0.05;
var stateTax;
var paye;
var pension;
var medicare;

var fullname;
var taxstate;

var grossIncomeYearly;
var grossIncomeMonthly;
var grossIncomeWeekly;
var grossIncomeDaily;

var effectiveTaxRate;

function getDeductions() {
  if (cbostate.value == "Arizona") {
    stateTax = 0.04;
    paye = 0.03;
    pension = 0.075;
    medicare = 0.065;
    effectiveTaxRate = federalTax + stateTax + paye + pension + medicare;

    document.getElementById("txtfederaltax").value = federalTax;
    document.getElementById("txtstatetax").value = stateTax;
    document.getElementById("txtpaye").value = paye;
    document.getElementById("txtpension").value = pension;
  } else if (cbostate.value == "Texas") {
    stateTax = 0.035;
    paye = 0.05;
    pension = 0.065;
    medicare = 0.055;
    effectiveTaxRate = federalTax + stateTax + paye + pension + medicare;

    document.getElementById("txtfederaltax").value = federalTax;
    document.getElementById("txtstatetax").value = stateTax;
    document.getElementById("txtpaye").value = paye;
    document.getElementById("txtpension").value = pension;
  } else if (cbostate.value == "New Jersey") {
    stateTax = 0.05;
    paye = 0.025;
    pension = 0.085;
    medicare = 0.045;
    effectiveTaxRate = federalTax + stateTax + paye + pension + medicare;

    document.getElementById("txtfederaltax").value = federalTax;
    document.getElementById("txtstatetax").value = stateTax;
    document.getElementById("txtpaye").value = paye;
    document.getElementById("txtpension").value = pension;
  }
}

function calculateTax() {
  fullname = document.getElementById("txtfullname").value;
  taxstate = document.getElementById("cbostate").value;

  grossIncomeYearly = document.getElementById("txtgrossincome").value;
  grossIncomeMonthly = document.getElementById("txtgrossincome").value / 12;
  grossIncomeWeekly = document.getElementById("txtgrossincome").value / 52;
  grossIncomeDaily = document.getElementById("txtgrossincome").value / 365;

  sessionStorage.setItem("effectiveTaxRate", effectiveTaxRate);

  sessionStorage.setItem("fullname", fullname);
  sessionStorage.setItem("taxstate", taxstate);

  // Store values in sessionState for yearly
  if (cbostate.value == "Arizona") {
    // Store values in session state
    sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("grossIncomeYearly", grossIncomeYearly);
    sessionStorage.setItem("federalTaxYearly", federalTax * grossIncomeYearly);
    sessionStorage.setItem("stateTaxYearly", stateTax * grossIncomeYearly);
    sessionStorage.setItem("payeYearly", paye * grossIncomeYearly);
    sessionStorage.setItem("pensionYearly", pension * grossIncomeYearly);
    sessionStorage.setItem("medicareYearly", medicare * grossIncomeYearly);
    window.location = "summary.html";
  } else if (cbostate.value == "Texas") {
    // Store values in session state
    sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("grossIncomeYearly", grossIncomeYearly);
    sessionStorage.setItem("federalTaxYearly", federalTax * grossIncomeYearly);
    sessionStorage.setItem("stateTaxYearly", stateTax * grossIncomeYearly);
    sessionStorage.setItem("payeYearly", paye * grossIncomeYearly);
    sessionStorage.setItem("pensionYearly", pension * grossIncomeYearly);
    sessionStorage.setItem("medicareYearly", medicare * grossIncomeYearly);
    window.location = "summary.html";
  } else if (cbostate.value == "New Jersey") {
    // Store values in session state
    sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("grossIncomeYearly", grossIncomeYearly);
    sessionStorage.setItem("federalTaxYearly", federalTax * grossIncomeYearly);
    sessionStorage.setItem("stateTaxYearly", stateTax * grossIncomeYearly);
    sessionStorage.setItem("payeYearly", paye * grossIncomeYearly);
    sessionStorage.setItem("pensionYearly", pension * grossIncomeYearly);
    sessionStorage.setItem("medicareYearly", medicare * grossIncomeYearly);
    window.location = "summary.html";
  }

  // Store values in sessionState for monthly
  if (cbostate.value == "Arizona") {
    // Store values in session state
    sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("grossIncomeMonthly", grossIncomeMonthly);
    sessionStorage.setItem(
      "federalTaxMonthly",
      federalTax * grossIncomeMonthly
    );
    sessionStorage.setItem("stateTaxMonthly", stateTax * grossIncomeMonthly);
    sessionStorage.setItem("payeMonthly", paye * grossIncomeMonthly);
    sessionStorage.setItem("pensionMonthly", pension * grossIncomeMonthly);
    sessionStorage.setItem("medicareMonthly", medicare * grossIncomeMonthly);
    window.location = "summary.html";
  } else if (cbostate.value == "Texas") {
    // Store values in session state
    sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("grossIncomeMonthly", grossIncomeMonthly);
    sessionStorage.setItem(
      "federalTaxMonthly",
      federalTax * grossIncomeMonthly
    );
    sessionStorage.setItem("stateTaxMonthly", stateTax * grossIncomeMonthly);
    sessionStorage.setItem("payeMonthly", paye * grossIncomeMonthly);
    sessionStorage.setItem("pensionMonthly", pension * grossIncomeMonthly);
    sessionStorage.setItem("medicareMonthly", medicare * grossIncomeMonthly);
    window.location = "summary.html";
  } else if (cbostate.value == "New Jersey") {
    // Store values in session state
    sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("grossIncomeMonthly", grossIncomeMonthly);
    sessionStorage.setItem(
      "federalTaxMonthly",
      federalTax * grossIncomeMonthly
    );
    sessionStorage.setItem("stateTaxMonthly", stateTax * grossIncomeMonthly);
    sessionStorage.setItem("payeMonthly", paye * grossIncomeMonthly);
    sessionStorage.setItem("pensionMonthly", pension * grossIncomeMonthly);
    sessionStorage.setItem("medicareMonthly", medicare * grossIncomeMonthly);
    window.location = "summary.html";
  }

  // Store values in sessionState for weekly
  if (cbostate.value == "Arizona") {
    // Store values in session state
    sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("grossIncomeWeekly", grossIncomeWeekly);
    sessionStorage.setItem("federalTaxWeekly", federalTax * grossIncomeWeekly);
    sessionStorage.setItem("stateTaxWeekly", stateTax * grossIncomeWeekly);
    sessionStorage.setItem("payeWeekly", paye * grossIncomeWeekly);
    sessionStorage.setItem("pensionWeekly", pension * grossIncomeWeekly);
    sessionStorage.setItem("medicareWeekly", medicare * grossIncomeWeekly);
    window.location = "summary.html";
  } else if (cbostate.value == "Texas") {
    // Store values in session state
    sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("grossIncomeWeekly", grossIncomeWeekly);
    sessionStorage.setItem("federalTaxWeekly", federalTax * grossIncomeWeekly);
    sessionStorage.setItem("stateTaxWeekly", stateTax * grossIncomeWeekly);
    sessionStorage.setItem("payeWeekly", paye * grossIncomeWeekly);
    sessionStorage.setItem("pensionWeekly", pension * grossIncomeWeekly);
    sessionStorage.setItem("medicareWeekly", medicare * grossIncomeWeekly);
    window.location = "summary.html";
  } else if (cbostate.value == "New Jersey") {
    // Store values in session state
    sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("grossIncomeWeekly", grossIncomeWeekly);
    sessionStorage.setItem("federalTaxWeekly", federalTax * grossIncomeWeekly);
    sessionStorage.setItem("stateTaxWeekly", stateTax * grossIncomeWeekly);
    sessionStorage.setItem("payeWeekly", paye * grossIncomeWeekly);
    sessionStorage.setItem("pensionWeekly", pension * grossIncomeWeekly);
    sessionStorage.setItem("medicareWeekly", medicare * grossIncomeWeekly);
    window.location = "summary.html";
  }

  // Store values in sessionState for daily
  if (cbostate.value == "Arizona") {
    // Store values in session state
    sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("grossIncomeDaily", grossIncomeDaily);
    sessionStorage.setItem("federalTaxDaily", federalTax * grossIncomeDaily);
    sessionStorage.setItem("stateTaxDaily", stateTax * grossIncomeDaily);
    sessionStorage.setItem("payeDaily", paye * grossIncomeDaily);
    sessionStorage.setItem("pensionDaily", pension * grossIncomeDaily);
    sessionStorage.setItem("medicareDaily", medicare * grossIncomeDaily);
    window.location = "summary.html";
  } else if (cbostate.value == "Texas") {
    // Store values in session state
    sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("grossIncomeDaily", grossIncomeDaily);
    sessionStorage.setItem("federalTaxDaily", federalTax * grossIncomeDaily);
    sessionStorage.setItem("stateTaxDaily", stateTax * grossIncomeDaily);
    sessionStorage.setItem("payeDaily", paye * grossIncomeDaily);
    sessionStorage.setItem("pensionDaily", pension * grossIncomeDaily);
    sessionStorage.setItem("medicareDaily", medicare * grossIncomeDaily);
    window.location = "summary.html";
  } else if (cbostate.value == "New Jersey") {
    // Store values in session state
    sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("grossIncomeDaily", grossIncomeDaily);
    sessionStorage.setItem("federalTaxDaily", federalTax * grossIncomeDaily);
    sessionStorage.setItem("stateTaxDaily", stateTax * grossIncomeDaily);
    sessionStorage.setItem("payeDaily", paye * grossIncomeDaily);
    sessionStorage.setItem("pensionDaily", pension * grossIncomeDaily);
    sessionStorage.setItem("medicareDaily", medicare * grossIncomeDaily);
    window.location = "summary.html";
  }
}
