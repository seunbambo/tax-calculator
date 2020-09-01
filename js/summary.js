var yearlyTax;
      var monthlyTax;
      var weeklyTax;
      var dailyTax;

      var yearlyTakeHome;
      var monthlyTakeHome;
      var weeklyTakeHome;
      var dailyTakeHome;

      var effectiveTaxRate;

      function getTaxResult() {
        document.getElementById("taxsummaryheader").innerHTML =
          sessionStorage.getItem("fullname") +
          " your tax calculation summary for the state of " +
          sessionStorage.getItem("taxstate");
        // get yearly results
        document.getElementById(
          "tgrossyearly"
        ).innerHTML = sessionStorage.getItem("grossIncomeYearly");
        document.getElementById(
          "tfederalyearly"
        ).innerHTML = sessionStorage.getItem("federalTaxYearly");
        document.getElementById(
          "tstateyearly"
        ).innerHTML = sessionStorage.getItem("stateTaxYearly");
        document.getElementById(
          "tpayeyearly"
        ).innerHTML = sessionStorage.getItem("payeYearly");
        document.getElementById(
          "tpensionyearly"
        ).innerHTML = sessionStorage.getItem("pensionYearly");
        document.getElementById(
          "tmedicareyearly"
        ).innerHTML = sessionStorage.getItem("medicareYearly");

        yearlyTax =
          Number(sessionStorage.getItem("federalTaxYearly")) +
          Number(sessionStorage.getItem("stateTaxYearly")) +
          Number(sessionStorage.getItem("payeYearly")) +
          Number(sessionStorage.getItem("pensionYearly")) +
          Number(sessionStorage.getItem("medicareYearly"));
        document.getElementById("syearlytax").innerHTML = yearlyTax;
        document.getElementById("syearlyincome").innerHTML = Number(
          sessionStorage.getItem("grossIncomeYearly")
        );
        yearlyTakeHome =
          Number(sessionStorage.getItem("grossIncomeYearly")) - yearlyTax;

        document.getElementById("syearlytakehome").innerHTML = yearlyTakeHome;
        document.getElementById("ttakehomeyearly").innerHTML = yearlyTakeHome;

        document.getElementById("seffectivetax").innerHTML = Number(
          sessionStorage.getItem("effectiveTaxRate")
        );

        // Get monthly result
        document.getElementById(
          "tgrossmonthly"
        ).innerHTML = sessionStorage.getItem("grossIncomeMonthly");
        document.getElementById(
          "tfederalmonthly"
        ).innerHTML = sessionStorage.getItem("federalTaxMonthly");
        document.getElementById(
          "tstatemonthly"
        ).innerHTML = sessionStorage.getItem("stateTaxMonthly");
        document.getElementById(
          "tpayemonthly"
        ).innerHTML = sessionStorage.getItem("payeMonthly");
        document.getElementById(
          "tpensionmonthly"
        ).innerHTML = sessionStorage.getItem("pensionMonthly");
        document.getElementById(
          "tmedicaremonthly"
        ).innerHTML = sessionStorage.getItem("medicareMonthly");

        monthlyTax =
          Number(sessionStorage.getItem("federalTaxMonthly")) +
          Number(sessionStorage.getItem("stateTaxMonthly")) +
          Number(sessionStorage.getItem("payeMonthly")) +
          Number(sessionStorage.getItem("pensionMonthly")) +
          Number(sessionStorage.getItem("medicareMonthly"));

        document.getElementById("ttakehomemonthly").innerHTML = monthlyTax;

        // Get weekly result
        document.getElementById(
          "tgrossweekly"
        ).innerHTML = sessionStorage.getItem("grossIncomeWeekly");
        document.getElementById(
          "tfederalweekly"
        ).innerHTML = sessionStorage.getItem("federalTaxWeekly");
        document.getElementById(
          "tstateweekly"
        ).innerHTML = sessionStorage.getItem("stateTaxWeekly");
        document.getElementById(
          "tpayeweekly"
        ).innerHTML = sessionStorage.getItem("payeWeekly");
        document.getElementById(
          "tpensionweekly"
        ).innerHTML = sessionStorage.getItem("pensionWeekly");
        document.getElementById(
          "tmedicareweekly"
        ).innerHTML = sessionStorage.getItem("medicareWeekly");

        weeklyTax =
          Number(sessionStorage.getItem("federalTaxWeekly")) +
          Number(sessionStorage.getItem("stateTaxWeekly")) +
          Number(sessionStorage.getItem("payeWeekly")) +
          Number(sessionStorage.getItem("pensionWeekly")) +
          Number(sessionStorage.getItem("medicareWeekly"));

        document.getElementById("ttakehomeweekly").innerHTML = weeklyTax;

        // Get daily result
        document.getElementById(
          "tgrossdaily"
        ).innerHTML = sessionStorage.getItem("grossIncomeDaily");
        document.getElementById(
          "tfederaldaily"
        ).innerHTML = sessionStorage.getItem("federalTaxDaily");
        document.getElementById(
          "tstatedaily"
        ).innerHTML = sessionStorage.getItem("stateTaxDaily");
        document.getElementById(
          "tpayedaily"
        ).innerHTML = sessionStorage.getItem("payeDaily");
        document.getElementById(
          "tpensiondaily"
        ).innerHTML = sessionStorage.getItem("pensionDaily");
        document.getElementById(
          "tmedicaredaily"
        ).innerHTML = sessionStorage.getItem("medicareDaily");

        dailyTax =
          Number(sessionStorage.getItem("federalTaxDaily")) +
          Number(sessionStorage.getItem("stateTaxDaily")) +
          Number(sessionStorage.getItem("payeDaily")) +
          Number(sessionStorage.getItem("pensionDaily")) +
          Number(sessionStorage.getItem("medicareDaily"));

        document.getElementById("ttakehomedaily").innerHTML = dailyTax;
      }