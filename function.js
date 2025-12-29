/*function sum (x,y){
    s=x+y;
    console.log("before return");
    return s;
    console.log("after return");
}
let val=sum(5,8);
console.log(val);*/

/*function countVowels(str){
    let count=0;
    for(let char of str){
        if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
        count++;
        }
    }
    return count;
}*/

//let arr=[1,2,34,4];
/*let arr=["karachi","bhakkar","lahore"];

arr.forEach((val,idx,arr)=>{
   console.log(val.toUpperCase(),idx,arr);
});*/

/*let nums=[2,4,5,6,7];


let calsquare=nums=>{
    console.log(nums*nums);
};

nums.forEach(calsquare);*/

/*let num=[4,6,8,9,5,2];

let newArr=num.map((val)=>{
    return val*8;
});

console.log(newArr);*/

/*let num=[3,4,5,6,7,8,9,5,4,2,6];

 let newFilter=num.filter((val)=>{
    return val<3;
});
console.log(newFilter);*/


/*let num=[3,4,5,6,7,8,9,5,4,2,6];

 let newFilter=num.filter((val)=>{
    return val%2===0;
});
console.log(newFilter);*/


/*let num=[2,4,5,6,8,9];

 let newval =num.reduce((pre,curr)=>{
     return pre<curr?pre:curr;
});
console.log(newval);*/

/*let num=[2,4,5,6,8,9];

 let newval =num.reduce((pre,curr)=>{
     return pre+curr;
});
console.log(newval);*/

//practice Q1
/*let num=[92,98,97,56,89,45,93];

 let marks= num.filter((val)=>{
   return val>90;
});
console.log(marks);*/

//practice Q2
let n=prompt("Enter a number");
arr=[];

for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((pre ,curr)=>{
    return pre+curr;

});

console.log("sum=",sum);

let factorial=arr.reduce((pre ,curr)=>{
    return pre*curr;

});

console.log("factorial=",factorial);