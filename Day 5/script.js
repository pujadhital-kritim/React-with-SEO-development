let liked=false;  //represents state

function toggleLike(){
    liked= !liked;

    console.log(`status: ${liked ? "liked": "unliked"} `);
}
toggleLike();
toggleLike();
//Array
const profiles=[
    {name:"Puja", role:"Developer"},
    {name:"Ram", role:"Manager"},
    {name:"Gita", role:"Designer"}
];

// map() is used to render lists -- it is a loop in an array
profiles.map(profile=>{
    console.log(`${profile.name} is a ${profile.role}`)
})


// map return sthg
const message= profiles.map(profile=>{
    return `${profile.name} works as a ${profile.role}`;
});
console.log(message);


// conditional rendering
const isOnline=true;

console.log(isOnline? "User is online": "User is offline");


// LogicaL AND &&
isOnline && console.log("Show green dot");


//Destructuring

const profile={name:"Puja",age:20};

const {name,age}=profile;
console.log (`${name} is ${age} years old` );


//DEstructuring inside map
const employee=[
    {name:"Kritan" ,role:"Manager"},
    {name:"Kripa", role:"CEO"}
];

 employee.map(({name,role}) =>{
    console.log(`${name} is a ${role}`);
 });