import React from "react";
import "./App.css";
import {useState} from "react"

const BottomRow = () => {

  const [countdown, setCountdown] = useState(0);
  const [counttoGo, setCounttoGo] = useState(0);
  const [countballOn, setCountballOn] = useState(0);
  const [countQuarter, setCountQuarter] = useState(0);


  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{countdown}</div>
        <div className="awayButtons">
          <button onClick={()=> setCountdown(countdown + 1)} className="awayButtons__touchdown">down</button>
        </div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{counttoGo}</div>
        <div className="awayButtons">
          <button onClick={()=> setCounttoGo(counttoGo + 1)} className="awayButtons__touchdown">toGo</button>
        </div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
  <div className="ballOn__value">{countballOn}</div>
        <div className="awayButtons">
          <button onClick={()=> setCountballOn(countballOn + 1)} className="awayButtons__touchdown">ballOn</button>
        </div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{countQuarter}</div>         
         <div className="awayButtons">
          <button onClick={()=> setCountQuarter(countQuarter + 1)} className="awayButtons__touchdown">Quarter</button>
        </div>
      </div>
    </div>
  );
};

export default BottomRow;
