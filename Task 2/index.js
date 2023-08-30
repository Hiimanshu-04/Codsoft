let string = '';
let buttons = document.querySelectorAll(".button").forEach((button)=>{
    button.addEventListener("click", (e)=>{
        try {
            if(e.target.innerHTML == '='){    
                if (string.trim() !== '') { 
                    string = string.replace(/x/g, '*'); 
                    string = string.replace(/---/g, '-'); 
                    string = eval(string);
                    document.querySelector(".text").innerHTML = string;
                    string = '';
                }
            }
            else if(e.target.innerHTML == 'AC'){
                string = '';
                document.querySelector(".text").innerHTML = string;
            }
            else if(e.target.innerHTML == 'DE'){
                string = string.substring(0, string.length-1);
                document.querySelector(".text").innerHTML = string;
            }
            else{
    
                // console.log(e.target);
                string = string+ e.target.innerHTML;
                document.querySelector(".text").innerHTML = string;
            }
        } catch (error) {
            document.querySelector(".text").innerHTML = "Error";
            string='';
            
        }
    })
})