import React, {useState} from 'react';

const LiveClock = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime, 1000);
    return (
        <>
        <h2> It is {ctime} </h2>
        </>
    );
};

export default LiveClock;