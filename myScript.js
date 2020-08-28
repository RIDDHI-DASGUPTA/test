/*var hash ="#",count=0, rowSize =Number(prompt("Select size :"));

for(let row=0;row<rowSize;row++){
	if((count%2)==0){
		for(let col=0;col<4;col++){
		document.write(hash);
		document.write("&nbsp");
		}
	}
	
	else{
		for(let col=0;col<4;col++){
		document.write("&nbsp");	
		document.write(hash);
		}
	}
	document.write("<br/>");
	count++;

}
//function declaration 1
  const  multiply= function(x,y){
	return x*y;
}
//function declaration 2
function multiply(x,y){
	return x*y;
}
//function declaration 3
const  multiply= (x,y)=>{
	return x*y;
}
var a=multiply(5,5);
document.write(a);
function minus(a, b) {
if (b == undefined) return -a;
else return a - b;
}
document.write(minus(5));
let arr = [1,2,3,4,5,"six"];
alert(typeof(arr));
arr.push(7);
alert(arr);
var someday = new Date("9/9/1999");
alert(someday);*/
/*let findFactorial = (x) => {
  // start your code here.
  if(x===0||x===1)
  {
      return 1;
  }
  else {
    return x*findfactorial(x-1);
  }
};

alert(findfactorial(4));
/*let flag = true;
const a=10;
console.log(a);
if(flag==true){
	const a=20;
	console.log(a);
}
console.log(a);
let email=(name)=>{
	let msg = `Hi ${name}. \${10}`
	console.log(msg);
};
email('nn');*/
let a1=[{'k1':1,'k2':2},{'k1':3,'k2':4}];
let a2={1:'a',2:'b'};
for (x in a1){
	console.log(a1[x]);
}
for (x in a2){
console.log(`${x} and ${a2[x]}`);
}
for( x of a1){
	console.log(x);	
}
for (x of a2){
console.log(x);
}
console.log("Blah");
console.log("We can win");