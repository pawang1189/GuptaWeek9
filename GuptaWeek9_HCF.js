// Create By: Pawan Kumar Gupta
// Student ID: 700671167 

window.addEventListener("load", function(){
	document.getElementById("hcfButton").addEventListener("click", function(){
		var num1 = 0;
		var num2 = 0;
		var num3 = 0;
		
		var input1 = document.getElementById("input1").value;
		var input2 = document.getElementById("input2").value;
		var input3 = document.getElementById("input3").value;
		
		var remainder, numerator, denomerator;
		
		if(num1 = parseInt(input1)){
			//0 does not parse as an integer because any number starting with 0 will 
			//be treated as octal(unless you pass the base argument for parseInt method).
			if(num2 = parseInt(input2)){
				if(num3= parseInt(input3)){
					//calculate hcf of num1 and num2 and store in hcf1;
					var hcf1 = findHCF(num1, num2);
					var hcf = findHCF(num3, hcf1);
					document.getElementById("result").innerHTML = "Highest Common Factor for "+num1+", "+num2+", and "+num3+" is "+hcf;
				}else{errMessage(" Third ");}//end if input3
			}else{errMessage(" Second ");}//end if input 2
		}else{errMessage(" First ");}//end if input1
	
},false);//end button event
},false);//end load event
			
function findHCF(num1, num2){
	if(num2>num1){
		//find the bigger number and make it the numerator
		numerator = num2;
		denomerator = num1;
	}else {
		numerator = num1;
		denomerator = num2;
	}//end if
	
	while(numerator%denomerator !=0){
		//remainder division. Get the remainder//if rem not 0, keep dividing the divisorwith remainder till zero
		remainder = numerator%denomerator;
		numerator = denomerator;
		denomerator = remainder;
	}//end while
	
	return denomerator;
}//end function findHCF

function errMessage(displayMsg ){
	document.getElementById("result").innerHTML = displayMsg +"is invalid.";

}//end function messages