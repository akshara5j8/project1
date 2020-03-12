import React from 'react';
import data from './data.json';
import icon from './keerthi.png';
let Resume=(props)=>{
    let info=Object.values(props.location.index.value);
    let person=data.profiles[info];
    console.log(person);
    return(
        <div className="parent">
            <div className="child">
                <img src={icon} alt="profile"></img>
                <h3>{person.basics.name}</h3>
                <h4>{person.basics.email}</h4>
                <h4>{person.basics.mobile}</h4>
            </div>
            <div className="child2">
                <h3>Educational Qualifications</h3>
                <hr></hr>
                <h3>{person.education.map((i,j)=>(
                    <div key={j}>
                    <h5>{i.degree}</h5>
                    <ul>
                        <li>
                            {i.percentage+"%"}<br></br>
                            {i.institute}
                        </li>
                    </ul>
                    </div>
                ))}</h3>
                <hr></hr>
                <h3>Skills</h3><hr></hr>
                {person.skills.map((x,y)=>(
                    <div>
                        <h4>{x.type}</h4>
                        {x.values.map((k,l)=>(
                            <div key={l} style={{display:"inline"}}>
                                <span className="skill">{k}</span>
                            </div>
                        ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Resume;