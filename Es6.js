/*let allPeople=[];
let inviteConcat=(...people)=>{
	let temp=people;
	allPeople=allPeople.concat(temp);
	console.log(allPeople);
};
let invitePush=(...people)=>{
	let temp=people;
	allPeople.push(temp);
	console.log(allPeople);
};
inviteConcat("A","B");
inviteConcat("C","D");
invitePush("E","F");*/

/*let func= (a,b)=>{
let sentence = `I am\n 
				${a} ${b}\n
				blah blah blah`;

return sentence;

}
console.log(func('Rid','Das'));
*/
let singleUser={user:"Riddhi",
				mobile:123456789};
//console.log(singleUser.user);
for(x in singleUser){
	console.log(x);
	console.log(singleUser.x);
	//console.log(${singleUser.x});
}
console.log(singleUser.user);
console.log(singleUser[user]);