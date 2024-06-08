import React from 'react';

const Greeting = () => {
    const userName = 'John';
    const formattedDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
    return (
        <div>
            <h2>Hello, {userName}!</h2>
            <p>Welcome to our website. Today is {formattedDate}.</p>
        </div>
    )
}

export default Greeting;