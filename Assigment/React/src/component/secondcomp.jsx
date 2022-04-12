import React from "react";

class SecondComp extends React.Component{
    render(){
        const internalclassdemo = {fontSize:'80px', color:'navy'};

        return <h1 style={internalclassdemo}>Second Component.</h1>;
    }
}
export default SecondComp;