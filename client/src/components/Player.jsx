import React,{useEffect} from "react";
const Player = (props) => {

  useEffect(() => {
    console.log('in player')
    return () => {
      
    };
  }, [props.name]);
  return <div><h1>Player Name:</h1>{props.name}</div>;
};

export default Player;
