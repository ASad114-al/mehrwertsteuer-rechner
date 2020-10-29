
        let zvE
        let est;
        let est1;
        let est2;

       
        function Person2Ausschalten(){
            
            
            if (person.checked == '1Person')
                getElementById("person2").style.display = ("block")
        }

        function berechnen() {
            let jahr = document.getElementById("jahr").value;
            let personen = document.getElementById("person").value;
            let zvE1 = Number(document.getElementById("zvE1").value);
            let zvE2 = Number(document.getElementById("zvE2").value);
            console.log(jahr)
            document.getElementById("personenAngeben").innerHTML =" "
            document.getElementById("jahrAngeben").innerHTML = " "

            // EST 2020
            if (jahr == 'jahrAngeben') {
                document.getElementById("jahrAngeben").innerHTML = "Bitte geben Sie das Jahr ein"
            }
            else if (jahr == '2020') {
            
            
                    if (personen == 'personAngeben') {
                        document.getElementById("personenAngeben").innerHTML = "Bitte geben Sie die Anzahl der Personen ein";
                    }
                    else if (personen == '1Person') {
                        zvE = zvE1;
                        console.log(zvE)
                    }
                    else {
                        zvE = (zvE1 + zvE2) / 2;
                        console.log(zvE)
                    }
                        

                    if (zvE <= 9408) {
                        est = 0;
                    } else if (zvE >= 9408 && zvE <= 14532) {
                       
                        est = (972.87 * (zvE - 9408) / 10000 + 1400) * (zvE - 9408) / 10000;
                    } else if (zvE >= 14533 && zvE <= 57051) {
                        let z=(zvE - 14532) / 10000
                        est = (212.02 * z +2397 ) * z + 972.79

                    } else if (zvE >= 57051 && zvE <= 270500) {

                        est =(( 0.42 * zvE) - 8963.74)
                    } else if (zvE >= 270501) {
                        est = ((0.42 * zvE) - 17078.74)
                    }
                    
            }

            
            // EST 2019
           
             else if (jahr == '2019') {
            if (personen == 'personAngeben') {
                document.getElementById("personenAngeben").innerHTML = "Bitte geben Sie die Anzahl der Personen ein"
            }


                    if (personen == 'personAngeben') {
                        document.getElementById("personenAngeben").innerHTML = "Bitte geben Sie die Anzahl der Personen ein";
                    }
                    else if (personen == '1Person') {
                        zvE = zvE1;
                        console.log(zvE)
                    }
                    else {
                        zvE = (zvE1 + zvE2) / 2;
                        console.log(zvE)
                    }
                    

                    if (zvE <= 9168) {
                        est = 0;

                    } else if (zvE >= 9168 && zvE <= 14254) {
                        let t=(zvE - 9168) / 10000
                        est = (980.14 * t + 1400) * t;


                    } else if (zvE >= 14254 && zvE <= 55960) {
                        let r =(zvE - 14254) / 10000

                        est = (216.16 * r +2397 ) * r + 965.58

                        
                    } else if (zvE >= 55961 && zvE <= 265326) {
                        est = 0.42 * zvE - 8780.90
                    } else if (zvE >= 265327) {
                        est = 0.45 * zvE - 16740.68
                    }

            }
                    
            // EST 2018
            else if (jahr == '2018') {
                if (personen == 'personAngeben') {
                    document.getElementById("personenAngeben").innerHTML = "Bitte geben Sie die Anzahl der Personen ein"
                }

                    if (personen == 'personAngeben') {
                        document.getElementById("personenAngeben").innerHTML = "Bitte geben Sie die Anzahl der Personen ein";
                    }
                    else if (personen == '1Person') {
                        zvE = zvE1;
                        console.log(zvE)

                    }
                    else {
                        zvE = (zvE1 + zvE2) / 2;
                        console.log(zvE)
                    }


                    if (zvE <= 9000) {
                        est = 0;
                    } else if ( 9001 <= zvE <= 13996) {
                        let p= (zvE - 9000) / 10000
                        est = (997.8 * p + 1400) * p;


                    } else if ( 13997 <=  zvE <= 54949) {
                        let a= (zvE - 13996) / 10000
                        est = (220.13 * a + 2397) * a + 948.49



                    } else if ( 54950 <= zvE <= 260532) {
                        est = .42 * zvE - 8621.75
                    } else if (zvE >= 260533) {
                        est = .45 * zvE - 16437.7
                    }
                    
            }


            if (personen == '1Person'){
                        est1 = est
                        est1 = est1.toFixed(2); 
                        document.getElementById("ausgabePerson1").innerHTML = `Einkommenssteuer 1 Person ${est1}`
                        console.log(est1)
                    }
                    else {
                        est1 = est
                        est1 = est1.toFixed(2);
                        document.getElementById("ausgabePerson1").innerHTML = `Einkommenssteuer für 2 Person ${est1}`
                       
                        console.log(est1)
                    }
            
                              
        }
    