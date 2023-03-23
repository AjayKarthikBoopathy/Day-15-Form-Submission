var fname = document.getElementById("fname");
var res1=document.getElementById("first-name");
//Button Function
var login=document.getElementById("form");
console.log(login);

login.addEventListener("submit", (e) => {
e.preventDefault();

        
        //document.getElementById("fname").innerHTML=res1;
        console.log(res1.value);
        fname.innerHTML=res1.value;
    
        var res2=document.getElementById("last-name").value;
        var lname = document.getElementById("lname");
        lname.innerHTML=res2;

        var add1=document.getElementById("add1").value;
        var add2=document.getElementById("add2").value;
        var r3=document.getElementById("r3");
        var ans=add1 +" "+ add2;
        r3.innerHTML=ans;
        


        var res4=document.getElementById("pincode").value;
        var r4 = document.getElementById("r4");
        r4.innerHTML=res4;

        var res7=document.getElementById("state").value;
        var r7 = document.getElementById("r7");
        r7.innerHTML=res7;

        var res8=document.getElementById("country").value;
        var r8 = document.getElementById("r8");
        r8.innerHTML=res8;


    
            
        var ele = document.getElementsByName("gender");
                  
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                    
            var gen =  document.getElementById("r5");
            gen.innerHTML = "Gender:"+ ele[i].value;
            //console.log(ele[i].value);
                        
            }
            }


        var elem = document.getElementsByName("food");  
        var temp = "";
        var foodcount=0;
            for(i = 0; i < elem.length; i++){
                if(elem[i].checked){
                    foodcount++;
           
            }
            }
            if(foodcount>=2){
            for(i = 0; i < elem.length; i++){
                if(elem[i].checked){
                    
            temp +=  elem[i].value + " ";   
            var food =  document.getElementById("r6");
            food.innerHTML = temp;
            //console.log(ele[i].value);
            }
            }
        }
        else{
            alert("Please Fill out the necessary Fields");
        }

});




//Function for two foods
    // var elem = document.getElementsByName("food");  
    //     var temp = "";
    //         for(i = 0; i < elem.length; i++) {
    //             if (elem[i].checked===1) {
    //                 alert("Enter atleast two food items");
    //             }
    //             else if (elem[i].checked > 1) {
    //         temp +=  elem[i].value + " ";   
    //         var food =  document.getElementById("r6");
    //         food.innerHTML = temp;
    //         //console.log(ele[i].value);
                    
    //         }
    //         }