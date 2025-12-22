import React from 'react'

const fruits=["apple","banana","mango"];

const users =[
    {id:1, name: "Puja", role:"Developer"},
    {id:2, name:"Deepa", role:"Designer"},
    {id:3,name:"Sewak", role:"Developer"}
];

const developers = users.filter(
    user => user.role === "Developer"
);

const Fruits = () => {
  return (

<main>
<section>
    <h2>Without User Key</h2>
{/* without key */}
{fruits.map((fruit)=>(
    <li>{fruit}</li>
)
)}
</section>

{/* with key */}

<section>
    <h2>User</h2>
{fruits.map((fruit,index)=>(
    <li key={index}>{fruit}</li>
))}
</section>

<section>
    <h2>User and Role</h2>
{users.map(user=>(
    <li key={user.id}>
        {user.name} - {user.role}
    </li>
))}
</section>


<section>
    <h2>Our Developers</h2>
{developers.map(dev =>(
    <article key={dev.id}>
        <h3>{dev.name}</h3>
        <p>{dev.role}</p>
    </article>
))}

</section>


</main>

  )
}

export default Fruits