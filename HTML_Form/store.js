let Details = [];
        
        const addDetails = (ev)=>{
            
            let detail = {
               
                Name: document.getElementById('t1').value,
                Company: document.getElementById('t2').value,
                Email : document.getElementById('t3').value,
                number: document.getElementById('t4').value,

                    
           }

            Details.push(detail);
            //document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            localStorage.setItem('Details', JSON.stringify(Details) );
        }

        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('sbt').addEventListener('click', addDetails);
        });