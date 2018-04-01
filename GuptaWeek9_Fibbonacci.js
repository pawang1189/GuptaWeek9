// Create By: Pawan Kumar Gupta
// Student ID: 700671167 

window.addEventListener("load", function(){
	document.getElementById("generateFibButton").addEventListener("click",function(){
		var fibboArray = [];//blank array.
		var fibboTable = document.getElementById("fibboTable");//html table object
		
		for(var i=0;i<100;i++){
			var tr = document.createElement("tr");
			var numberTd = document.createElement("td");
			var fibboTD = document.createElement("td");
			if(i <2){
				fibboArray[i] = i; //creating first two elements
				numberTd.innerHTML = i+1;
				fibboTD.innerHTML = fibboArray[i];
				fibboTable.appendChild(tr);
				tr.appendChild(numberTd);
				tr.appendChild(fibboTD);
				//create rows for first two elements.
				//continue;
			}else{//end if
			
			fibboArray[i] = parseInt(fibboArray[i-2]) + parseInt(fibboArray[i-1]);
			numberTd.innerHTML = i+1;
			fibboTD.innerHTML = fibboArray[i];
			fibboTable.appendChild(tr);
			tr.appendChild(numberTd);
			tr.appendChild(fibboTD);
			}
		}//end for
	}, false);//end button event listener
},false);//end load event listener