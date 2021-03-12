function calculateSalaryTax() {
    
    var salary = document.getElementById('salary').value;
    var status = document.getElementById('status').value;

    var totalMonth = 12;
    var yearlyIncome = salary * totalMonth;

    if (status == 'single') {
        
        if (yearlyIncome <= 400000) {
            
            var onePercentTax = (yearlyIncome / 100) * 1;
            var yearlyTax = onePercentTax;
            var monthlyTax = yearlyTax / 12;
           

           alert( "Yearly Income : " + ' ' + yearlyIncome
                    + '\n' + 
                    "YearlyTax : " + ' ' + yearlyTax
                    + '\n' + 
                    "Monthly Tax : " + ' ' + monthlyTax
                    + '\n' + 
                    "Tax Slab is upto 1 % " 
           
           );

        } else if (yearlyIncome > 400000 && yearlyIncome <= 500000) {

           var taxAmount = yearlyIncome - 400000;
            var onePercent = (400000 / 100) * 1;
            var tenPercent = (taxAmount / 100) * 10;
            var yearlyTax = tenPercent + onePercent;
            var monthlyTax = yearlyTax / 12;

           alert( "Yearly Income : " + ' ' + yearlyIncome
                    + '\n' + 
                    "One Percent Tax Slab : " + ' ' + onePercent
                    + '\n' + 
                    "Ten Percent Tax Slab : " + ' ' + tenPercent
                    + '\n' + 
                    "Yearly Tax :" + ' ' + yearlyTax 
                    + '\n' + 
                    "Monthly Tax :" + ' ' +  monthlyTax
                    + '\n' + 
                    "Tax Slab is upto 10 %"
           
           ); 

        } else if (yearlyIncome > 500000 && yearlyIncome <= 700000) {

            var onePercent = 400000 / 100 * 1;
            var tenPercent = 100000 / 100 * 10;

            var taxAmount = yearlyIncome - 500000;
            var twentyPercent = taxAmount / 100 * 20;
            var yearlyTax = tenPercent + onePercent + twentyPercent;
            var monthlyTax = yearlyTax / 12;

            alert( "Yearly Income : " + ' ' + yearlyIncome
                    + '\n' + 
                    "One Percent Tax Slab : " + ' ' + onePercent
                    + '\n' + 
                    "Ten Percent Tax Slab : " + ' ' + tenPercent
                    + '\n' + 
                    "Twenty Percent Tax Slab : " + ' ' + twentyPercent
                    + '\n' + 
                    "Yearly Tax :" + ' ' + yearlyTax 
                    + '\n' + 
                    "Monthly Tax :" + ' ' +  monthlyTax
                    + '\n' + 
                    "Tax Slab is upto 20 %"
           
           ); 
            


        } else if (yearlyIncome > 700000 && yearlyIncome <= 2000000) {
            var onePercent = 400000 / 100 * 1;
            var tenPercent = 100000 / 100 * 10;
            var twentyPercent = 200000 / 100 * 20;

            var taxAmount = yearlyIncome - 700000;
            var thirtyPercent = taxAmount / 100 * 30;
            var yearlyTax = tenPercent + onePercent + twentyPercent + thirtyPercent;
            var monthlyTax = yearlyTax / 12;

             alert( "Yearly Income : " + ' ' + yearlyIncome
                    + '\n' + 
                    "One Percent Tax Slab : " + ' ' + onePercent
                    + '\n' + 
                    "Ten Percent Tax Slab : " + ' ' + tenPercent
                    + '\n' + 
                    "Twenty Percent Tax Slab : " + ' ' + twentyPercent
                     + '\n' + 
                    "Thirty Percent Tax Slab : " + ' ' + thirtyPercent
                    + '\n' + 
                    "Yearly Tax :" + ' ' + yearlyTax 
                    + '\n' + 
                    "Monthly Tax :" + ' ' +  monthlyTax
                    + '\n' + 
                    "Tax Slab is upto 30 %"
           
           ); 

            

        } else {
            var onePercent = 400000 / 100 * 1;
            var tenPercent = 100000 / 100 * 10;
            var twentyPercent = 200000 / 100 * 20;
            var thirtyPercent = 1300000 / 100 * 30;

            var taxAmount = yearlyIncome - 2000000;
            var thirtySixPercent = taxAmount / 100 * 36;
            var yearlyTax = tenPercent + onePercent + twentyPercent + thirtyPercent + thirtySixPercent;
            var monthlyTax = yearlyTax / 12;
            
   alert( "Yearly Income : " + ' ' + yearlyIncome
                    + '\n' + 
                    "One Percent Tax Slab : " + ' ' + onePercent
                    + '\n' + 
                    "Ten Percent Tax Slab : " + ' ' + tenPercent
                    + '\n' + 
                    "Twenty Percent Tax Slab : " + ' ' + twentyPercent
                     + '\n' + 
                    "Thirty Percent Tax Slab : " + ' ' + thirtyPercent
                    + '\n' + 
                    "Thirty Six Tax Slab : " + ' ' + thirtySixPercent
                    + '\n' + 
                    "Yearly Tax :" + ' ' + yearlyTax 
                    + '\n' + 
                    "Monthly Tax :" + ' ' +  monthlyTax
                    + '\n' + 
                    "Tax Slab is upto 36 %"
           
           ); 
            
        }

     

    } else if (status == 'married') {
        if (yearlyIncome <= 450000) {

         
               var onePercentTax = (yearlyIncome / 100) * 1;
            var yearlyTax = onePercentTax;
            var monthlyTax = yearlyTax / 12;
           

           alert( "Yearly Income : " + ' ' + yearlyIncome
                    + '\n' + 
                    "YearlyTax : " + ' ' + yearlyTax
                    + '\n' + 
                    "Monthly Tax : " + ' ' + monthlyTax
                    + '\n' + 
                    "Tax Slab is upto 1 % " 
           
           );
           

        } else if (yearlyIncome > 450000 && yearlyIncome <= 550000) {
            var taxAmount = yearlyIncome - 400000;
            var onePercent = (400000 / 100) * 1;
            var tenPercent = (taxAmount / 100) * 10;
            var yearlyTax = tenPercent + onePercent;
            var monthlyTax = yearlyTax / 12;

           alert( "Yearly Income : " + ' ' + yearlyIncome
                    + '\n' + 
                    "One Percent Tax Slab : " + ' ' + onePercent
                    + '\n' + 
                    "Ten Percent Tax Slab : " + ' ' + tenPercent
                    + '\n' + 
                    "Yearly Tax :" + ' ' + yearlyTax 
                    + '\n' + 
                    "Monthly Tax :" + ' ' +  monthlyTax
                    + '\n' + 
                    "Tax Slab is upto 10 %"
           
           ); 
        } else if (yearlyIncome > 550000 && yearlyIncome <= 750000) {

            var onePercent = 400000 / 100 * 1;
            var tenPercent = 100000 / 100 * 10;

            var taxAmount = yearlyIncome - 550000;
            var twentyPercent = taxAmount / 100 * 20;
            var yearlyTax = tenPercent + onePercent + twentyPercent;
            var monthlyTax = yearlyTax / 12;

            alert( "Yearly Income : " + ' ' + yearlyIncome
                    + '\n' + 
                    "One Percent Tax Slab : " + ' ' + onePercent
                    + '\n' + 
                    "Ten Percent Tax Slab : " + ' ' + tenPercent
                    + '\n' + 
                    "Twenty Percent Tax Slab : " + ' ' + twentyPercent
                    + '\n' + 
                    "Yearly Tax :" + ' ' + yearlyTax 
                    + '\n' + 
                    "Monthly Tax :" + ' ' +  monthlyTax
                    + '\n' + 
                    "Tax Slab is upto 20 %"
           
           ); 

        } else if (yearlyIncome > 750000 && yearlyIncome <= 2000000) {
           var onePercent = 400000 / 100 * 1;
            var tenPercent = 100000 / 100 * 10;
            var twentyPercent = 200000 / 100 * 20;

            var taxAmount = yearlyIncome - 750000;
            var thirtyPercent = taxAmount / 100 * 30;
            var yearlyTax = tenPercent + onePercent + twentyPercent + thirtyPercent;
            var monthlyTax = yearlyTax / 12;

             alert( "Yearly Income : " + ' ' + yearlyIncome
                    + '\n' + 
                    "One Percent Tax Slab : " + ' ' + onePercent
                    + '\n' + 
                    "Ten Percent Tax Slab : " + ' ' + tenPercent
                    + '\n' + 
                    "Twenty Percent Tax Slab : " + ' ' + twentyPercent
                     + '\n' + 
                    "Thirty Percent Tax Slab : " + ' ' + thirtyPercent
                    + '\n' + 
                    "Yearly Tax :" + ' ' + yearlyTax 
                    + '\n' + 
                    "Monthly Tax :" + ' ' +  monthlyTax
                    + '\n' + 
                    "Tax Slab is upto 30 %"
           
           ); 

            


        } else {
              var onePercent = 400000 / 100 * 1;
            var tenPercent = 100000 / 100 * 10;
            var twentyPercent = 200000 / 100 * 20;
            var thirtyPercent = 1300000 / 100 * 30;

            var taxAmount = yearlyIncome - 2000000;
            var thirtySixPercent = taxAmount / 100 * 36;
            var yearlyTax = tenPercent + onePercent + twentyPercent + thirtyPercent + thirtySixPercent;
            var monthlyTax = yearlyTax / 12;
            
   alert( "Yearly Income : " + ' ' + yearlyIncome
                    + '\n' + 
                    "One Percent Tax Slab : " + ' ' + onePercent
                    + '\n' + 
                    "Ten Percent Tax Slab : " + ' ' + tenPercent
                    + '\n' + 
                    "Twenty Percent Tax Slab : " + ' ' + twentyPercent
                     + '\n' + 
                    "Thirty Percent Tax Slab : " + ' ' + thirtyPercent
                    + '\n' + 
                    "Thirty Six Tax Slab : " + ' ' + thirtySixPercent
                    + '\n' + 
                    "Yearly Tax :" + ' ' + yearlyTax 
                    + '\n' + 
                    "Monthly Tax :" + ' ' +  monthlyTax
                    + '\n' + 
                    "Tax Slab is upto 36 %"
           
           ); 
        }

      
    }   

}

               