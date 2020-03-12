import React from 'react';

let Cards=(p)=>{
    const {name,role}=p
    return(
        <h2>{name} is working as {role}</h2>
    )
}
export default Cards;