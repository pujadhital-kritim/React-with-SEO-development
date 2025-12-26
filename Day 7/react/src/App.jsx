import React from 'react'
const App = () => {
const skills = [
  { id: 1, name: "HTML", level: "Advanced" },
  { id: 2, name: "CSS", level: "Intermediate" },
  { id: 3, name: "JavaScript", level: "Advanced" },
  { id: 4, name: "React", level: "Beginner" },
];

const advancedSkills= skills.filter(
  (skill)=> skill.level == "Advanced"
);
return (
<section>
<h2>My skills</h2>
<ul>
  {skills.map((skill)=>(
    <li key="skill.id">{skill.name} ---  {skill.level} </li>
  ))}
</ul>

<h2>Advanced Skills</h2>
<ul>
  {advancedSkills.map((skill)=>(
    <li key={skill.id}>{skill.name}</li>
  ) 
  )}
</ul>


<h2>Combined Map and Filter</h2>
<ul>
  {skills.filter((skill)=> skill.level === "Advanced")
  .map((skill)=>(
  <li key={skill.id}>{skill.name}</li>
  ))
  }
</ul>

{/* //conditional rendering */}

<h2>Conditional rendering</h2>
{advancedSkills.length === 0 ?(<p> No advanced skill found</p>): (
<ul>
  {advancedSkills.map((skill)=>(
    <li key={skill.id}>{skill.name}</li>
  ))}
</ul>)}

</section>
  )
}
export default App
