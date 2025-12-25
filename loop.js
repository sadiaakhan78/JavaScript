//for-of loop
/*let str="javaScript";
let size=0;
for(let val of str){
    console.log("val=",val);
    size++;
}
  console.log("string size=",size);*/

  //for-in loop
  /*let student={
    name:"sadia khan",
    age:19,
    marks:866,
    isPass:true,

  };
  for(let key in student){
    console.log("key=",key, " value=",student[key]);
  }*/

    //practice Q1

   /* for(let num=0;num<=100;num++){
        if(num%2===0){
            console.log("num=",num);
        }else{

        }
    }*/

//practice Q2

/*let gameNum=56;
let userNum = prompt("Guess the game number:");

while(userNum != gameNum) {
    userNum=prompt("you entered the wrong number.Guess again:");
}
console.log("congratulations,you entered the right number");*/

//template literal

/*let obj={
    item:'pen',
    price:100,
};
let message= `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(message);
 let specialString = `This is a template literal ${2+3+1}`;
 console.log(specialString);*/
 //string methods
 /*str1="sadia";
 str2="khan";
 let res=str2.concat(str1);
 console.log(res);*/

 let fullName=prompt("Enter your fullName without spaces ");
 let userName="@"+fullName+fullName.length;
 console.log(userName);
