function calculateSalaryTax() {
    
    var monthlySalary = document.getElementById('salary').value;
    var status = document.getElementById('status').value;

    var month = 12;
    var yearlyIncome = monthlySalary * month;

    if (status == 'single') {
        
        if (yearlyIncome <= 400000) {


            
            var onePercentTaxableSalary = (yearlyIncome / 100) * 1;
            var yearlyTaxCalculation = onePercentTaxableSalary;
            var monthlyTaxPayable = yearlyTaxCalculation / 12;
           

           alert( "Yearly Income : " + ' ' + yearlyIncome
                    + '\n' + 'asdf'
           
           );

        } else if (yearlyIncome > 400000 && yearlyIncome <= 500000) {
            var remainingTaxableAmount = yearlyIncome - 400000;
            var onePercentTaxableSalary = 400000*0.01;
            var tenPercentTaxableSalary = remainingTaxableAmount*0.1;
            var yearlyTaxCalculation = tenPercentTaxableSalary + onePercentTaxableSalary;
            var monthlyTaxPayable = yearlyTaxCalculation / 12;
            var taxPercent = '10%';
            var html = '<tr>' +
                '<td>First slab</td>' +
                '<td>' + 400000 + '</td>' +
                '<td>1%</td>' +
                '<td>' + onePercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Second slab</td>' +
                '<td>' + remainingTaxableAmount + '</td>' +
                '<td>10%</td>' +
                '<td>' + tenPercentTaxableSalary + '</td>' +
                '</tr>';
        } else if (yearlyIncome > 500000 && yearlyIncome <= 700000) {

            var onePercentTaxableSalary = 400000*0.01;
            var tenPercentTaxableSalary = 100000*0.1;

            var remainingTaxableAmount = parseInt(yearlyIncome) - 500000;
            var twentyPercentTaxableAmount = (parseInt(remainingTaxableAmount) / 100) * 20;
            var yearlyTaxCalculation = tenPercentTaxableSalary + onePercentTaxableSalary + twentyPercentTaxableAmount;
            var monthlyTaxPayable = yearlyTaxCalculation / 12;
            var taxPercent = '20%';

            var html = '<tr>' +
                '<td>First slab</td>' +
                '<td>' + 400000 + '</td>' +
                '<td>1%</td>' +
                '<td>' + onePercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Second slab</td>' +
                '<td>' + 100000 + '</td>' +
                '<td>10%</td>' +
                '<td>' + tenPercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Third slab</td>' +
                '<td>' + remainingTaxableAmount + '</td>' +
                '<td>20%</td>' +
                '<td>' + twentyPercentTaxableAmount + '</td>' +
                '</tr>';

        } else if (yearlyIncome > 700000 && yearlyIncome <= 2000000) {
            var onePercentTaxableSalary = 400000*0.01;
            var tenPercentTaxableSalary = 100000*0.1;
            var twentyPercentTaxableAmount = 200000*0.2;

            var remainingTaxableAmount = parseInt(yearlyIncome) - 700000;
            var thirtyPercentTaxableAmount = (parseInt(remainingTaxableAmount) / 100) * 30;
            var yearlyTaxCalculation = tenPercentTaxableSalary + onePercentTaxableSalary + twentyPercentTaxableAmount + thirtyPercentTaxableAmount;
            var monthlyTaxPayable = yearlyTaxCalculation / 12;
            var taxPercent = '30%';

            var html = '<tr>' +
                '<td>First slab</td>' +
                '<td>' + 400000 + '</td>' +
                '<td>1%</td>' +
                '<td>' + onePercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Second slab</td>' +
                '<td>' + 100000 + '</td>' +
                '<td>10%</td>' +
                '<td>' + tenPercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Third slab</td>' +
                '<td>' + 200000 + '</td>' +
                '<td>20%</td>' +
                '<td>' + twentyPercentTaxableAmount + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Fourth slab</td>' +
                '<td>' + remainingTaxableAmount + '</td>' +
                '<td>30%</td>' +
                '<td>' + thirtyPercentTaxableAmount + '</td>' +
                '</tr>';

        } else {
            var onePercentTaxableSalary = 400000*0.01;
            var tenPercentTaxableSalary = 100000*0.1;
            var twentyPercentTaxableAmount = 200000*0.2;
            var thirtyPercentTaxableAmount = 1300000*0.3;

            var remainingTaxableAmount = parseInt(yearlyIncome) - 2000000;
            var thirtySixPercentTaxableAmount = (parseInt(remainingTaxableAmount) / 100) * 36;
            var yearlyTaxCalculation = tenPercentTaxableSalary + onePercentTaxableSalary + twentyPercentTaxableAmount + thirtyPercentTaxableAmount + thirtySixPercentTaxableAmount;
            var monthlyTaxPayable = yearlyTaxCalculation / 12;
            var taxPercent = '36%';

            var html = '<tr>' +
                '<td>First slab</td>' +
                '<td>' + 400000 + '</td>' +
                '<td>1%</td>' +
                '<td>' + onePercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Second slab</td>' +
                '<td>' + 100000 + '</td>' +
                '<td>10%</td>' +
                '<td>' + tenPercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Third slab</td>' +
                '<td>' + 200000 + '</td>' +
                '<td>20%</td>' +
                '<td>' + twentyPercentTaxableAmount + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Fourth slab</td>' +
                '<td>' + 1300000 + '</td>' +
                '<td>30%</td>' +
                '<td>' + thirtyPercentTaxableAmount + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Fifth slab</td>' +
                '<td>' + remainingTaxableAmount + '</td>' +
                '<td>36%</td>' +
                '<td>' + thirtySixPercentTaxableAmount + '</td>' +
                '</tr>';
        }

        htmlTfoot = '<tr>' +
            '<td> <b> Net Tax Liability (yearly)</b> </td>' +
            '<td></td>' +
            '<td></td>' +
            '<td><b>' + yearlyTaxCalculation.toFixed(2) + '</b></td>' +
            '</tr>' +
            '<tr>' +
            '<td> <b> Net Tax Liability (monthly)</b> </td>' +
            '<td></td>' +
            '<td></td>' +
            '<td><b>' + monthlyTaxPayable.toFixed(2) + '</b></td>' +
            '</tr>';

    } else if (employeeType == 'couple') {
        if (yearlyIncome <= 450000) {

            var onePercentTaxableSalary = yearlyIncome*0.01;
            var yearlyTaxCalculation = onePercentTaxableSalary;
            var monthlyTaxPayable = yearlyTaxCalculation / 12;

            var taxPercent = '1%';

            var html = '<tr>' +
                '<td>First slab</td>' +
                '<td>' + yearlyIncome + '</td>' +
                '<td>1%</td>' +
                '<td>' + onePercentTaxableSalary + '</td>' +
                '</tr>';

        } else if (yearlyIncome > 450000 && yearlyIncome <= 550000) {
            var remainingTaxableAmount = yearlyIncome - 450000;
            var onePercentTaxableSalary = 450000*0.01;
            var tenPercentTaxableSalary = remainingTaxableAmount*0.1;
            var yearlyTaxCalculation = tenPercentTaxableSalary + onePercentTaxableSalary;
            var monthlyTaxPayable = yearlyTaxCalculation / 12;
            var taxPercent = '10%';

            var html = '<tr>' +
                '<td>First slab</td>' +
                '<td>' + 450000 + '</td>' +
                '<td>1%</td>' +
                '<td>' + onePercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Second slab</td>' +
                '<td>' + remainingTaxableAmount + '</td>' +
                '<td>10%</td>' +
                '<td>' + tenPercentTaxableSalary + '</td>' +
                '</tr>';
        } else if (yearlyIncome > 550000 && yearlyIncome <= 750000) {

            var onePercentTaxableSalary = 450000*0.01;
            var tenPercentTaxableSalary = 100000*0.1;

            var remainingTaxableAmount = parseInt(yearlyIncome) - 550000;
            var twentyPercentTaxableAmount = (parseInt(remainingTaxableAmount) / 100) * 20;
            var yearlyTaxCalculation = tenPercentTaxableSalary + onePercentTaxableSalary + twentyPercentTaxableAmount;
            var monthlyTaxPayable = yearlyTaxCalculation / 12;
            var taxPercent = '20%';

            var html = '<tr>' +
                '<td>First slab</td>' +
                '<td>' + 400000 + '</td>' +
                '<td>1%</td>' +
                '<td>' + onePercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Second slab</td>' +
                '<td>' + 100000 + '</td>' +
                '<td>10%</td>' +
                '<td>' + tenPercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Third slab</td>' +
                '<td>' + remainingTaxableAmount + '</td>' +
                '<td>20%</td>' +
                '<td>' + twentyPercentTaxableAmount + '</td>' +
                '</tr>';

        } else if (yearlyIncome > 750000 && yearlyIncome <= 2000000) {
            var onePercentTaxableSalary = 450000*0.01;
            var tenPercentTaxableSalary = 100000*0.1;
            var twentyPercentTaxableAmount = 200000*0.2;

            var remainingTaxableAmount = parseInt(yearlyIncome) - 750000;
            var thirtyPercentTaxableAmount = (parseInt(remainingTaxableAmount) / 100) * 30;
            var yearlyTaxCalculation = tenPercentTaxableSalary + onePercentTaxableSalary + twentyPercentTaxableAmount + thirtyPercentTaxableAmount;
            var monthlyTaxPayable = yearlyTaxCalculation / 12;
            var taxPercent = '30%';

            var html = '<tr>' +
                '<td>First slab</td>' +
                '<td>' + 400000 + '</td>' +
                '<td>1%</td>' +
                '<td>' + onePercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Second slab</td>' +
                '<td>' + 100000 + '</td>' +
                '<td>10%</td>' +
                '<td>' + tenPercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Third slab</td>' +
                '<td>' + 200000 + '</td>' +
                '<td>20%</td>' +
                '<td>' + twentyPercentTaxableAmount + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Fourth slab</td>' +
                '<td>' + remainingTaxableAmount + '</td>' +
                '<td>30%</td>' +
                '<td>' + thirtyPercentTaxableAmount + '</td>' +
                '</tr>';

        } else {
            var onePercentTaxableSalary = 450000*0.01;
            var tenPercentTaxableSalary = 100000*0.1;
            var twentyPercentTaxableAmount = 200000*0.2;
            var thirtyPercentTaxableAmount = 1250000*0.3;

            var remainingTaxableAmount = parseInt(yearlyIncome) - 2000000;
            var thirtySixPercentTaxableAmount = (parseInt(remainingTaxableAmount) / 100) * 36;
            var yearlyTaxCalculation = tenPercentTaxableSalary + onePercentTaxableSalary + twentyPercentTaxableAmount + thirtyPercentTaxableAmount + thirtySixPercentTaxableAmount;
            var monthlyTaxPayable = yearlyTaxCalculation / 12;

            var taxPercent = '36%';

            var html = '<tr>' +
                '<td>First slab</td>' +
                '<td>' + 400000 + '</td>' +
                '<td>1%</td>' +
                '<td>' + onePercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Second slab</td>' +
                '<td>' + 100000 + '</td>' +
                '<td>10%</td>' +
                '<td>' + tenPercentTaxableSalary + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Third slab</td>' +
                '<td>' + 200000 + '</td>' +
                '<td>20%</td>' +
                '<td>' + twentyPercentTaxableAmount + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Fourth slab</td>' +
                '<td>' + 1300000 + '</td>' +
                '<td>30%</td>' +
                '<td>' + thirtyPercentTaxableAmount + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Fifth slab</td>' +
                '<td>' + remainingTaxableAmount + '</td>' +
                '<td>36%</td>' +
                '<td>' + thirtySixPercentTaxableAmount + '</td>' +
                '</tr>';
        }

        htmlTfoot = '<tr>' +
            '<td> <b> Net Tax Liability (yearly)</b> </td>' +
            '<td></td>' +
            '<td></td>' +
            '<td><b>' + yearlyTaxCalculation.toFixed(2) + '</b></td>' +
            '</tr>' +
            '<tr>' +
            '<td> <b> Net Tax Liability (monthly)</b> </td>' +
            '<td></td>' +
            '<td></td>' +
            '<td><b>' + monthlyTaxPayable.toFixed(2) + '</b></td>' +
            '</tr>';
    } else {
        alert('Invalid parameter.');
    }

    tb = document.getElementById('tbodyContent');
    tb.innerHTML = html;

    tf = document.getElementById('tfootContent');
    tf.innerHTML = htmlTfoot;

    document.getElementById('annualGrossSalary').innerHTML = yearlyIncome;
    document.getElementById('taxableIncome').innerHTML = yearlyIncome;
    document.getElementById('netPayableTax').innerHTML = yearlyTaxCalculation;
    document.getElementById('taxSlab').innerHTML = taxPercent;

}


/*function newFunction() {
    
    document.getElementById("newForm").reset();
    document.getElementById('annualGrossSalary').innerHTML = 0;
    document.getElementById('taxableIncome').innerHTML = 0;
    document.getElementById('netPayableTax').innerHTML = 0;
    document.getElementById('taxSlab').innerHTML = 0;
    tb = document.getElementById('tbodyContent');
    tb.innerHTML = '';
    tf = document.getElementById('tfootContent');
    tf.innerHTML = '';
} */                