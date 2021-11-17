import React from "react";

function Greeting () {
    const greeting = 'Hello Function'
    return (
        <h1>{greeting}</h1>
    )
}

export const GreetingArrow = () => {
    const greeting = 'Hello Arrow Function'
    return (
        <h1>{greeting}</h1>
    )
}

export default Greeting;