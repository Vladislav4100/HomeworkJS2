
// Tast1 
  let monts;

	month = Number(prompt("Введите,какой месяц по счету"));
	if(month==11 || month==1 || month==2 ){
    alert("Это Зима");
		}else if(month==3 || month==4 || month==5 ){
    alert("Это весна");
		}else if(month==6 || month==7 || month==8 ){
    alert("Это лето");
		} else {
    alert("Это осень");
}	
//Tast2
  let unitName=parseInt(prompt("Введите номер единицы длинны. 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр."));
  let length=parseInt(prompt("Введите длину в указанных единицах"));
  
	switch (unitName){
		case 1: 
			length=length/10;
			alert(length+'м');
			break;
		case 2: 
			length=length*1000
			alert(length+'м');
			break
		case 3: 
			alert(length+'м');
			break
		case 4: 
			length=length/1000
			alert(length+'м');
			break
		case 5: 
			length=length/100
			alert(length+'м');
			break
}
//Tast3
  let numberChesla=parseInt(prompt("Введите целое число, лежащее в диапазоне от -999 до 999."));
  
	if(numberChesla<-9 && numberChesla>-100){
		alert("Отрицательное двузначное число");
	}else if (numberChesla>100 && numberChesla>9){
		alert("Положительное двузначное число");
	}else if (numberChesla>0 && numberChesla<10){
		alert("Положительное однозначное число");
	}else if (numberChesla<0 && numberChesla>-10){
		alert("Отрицательное однозначное число");
	}else if (numberChesla>-1000 && numberChesla<-99){
		alert("Отрицательное трёхзначное число");
	}else if (numberChesla>1000 && numberChesla>99){
		alert("Положительное трехзначное число");
	}else if (numberChesla==0){
		alert("это ноль!");	
	} else{
		alert("Иное обозначение");
	}
//Tast4
let numberCh=1

	do{ 
		if (numberCh% 5== 0 && numberCh% 3== 0){console.log("ThreeFive")}
		   (numberCh%3 == 0)?console.log("Three"):((numberCh% 5== 0)?console.log("Five"):console.log(numberCh))
		numberCh++;
	}while(numberCh<=100)
