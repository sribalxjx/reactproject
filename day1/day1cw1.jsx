import React from 'react';
function AlertMsg()
{
    alert("Message from Javascript Alert");
    console.log("Message to developer");
}


function Application()
{
    return(
        <div className="App">
            <h1>Let us see the output of the Javascript</h1>
            <button onClick={AlertMsg}>Click</button><br></br><br></br>
        </div>
    )
}
export default Application;