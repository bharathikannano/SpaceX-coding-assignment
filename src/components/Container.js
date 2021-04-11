import React, { useEffect, useState } from 'react';
import '../css/compStyle.css';
import Nodata from './Nodata';
import Category from './Category';

export default function Container() {
    const [launchYear, setLaunchYear] = useState(2014);
    const [successfulLaunch, setSuccessfulLaunch] = useState(true);
    const [successfulLanding, setsuccessfulLanding] = useState(true);
    const [finalData, setFinalData] = useState([]);
    const [error, setError] = useState({});

    useEffect(() => {
        const getData = async () => {
          const res = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${successfulLaunch}&land_success=${successfulLanding}&launch_year=${launchYear}`, {
            method: "GET",
            redirect: "follow",
          });
          const result = await res.json();
        setFinalData(result);
        };
        getData();
      }, [error,successfulLaunch,successfulLanding,launchYear]);

      let listOfYears = [], launch = [], landing = [];
      for(let i = 2006; i <= 2020; i++) {
        listOfYears.push(<button className="year-button" text={i} key={i} onClick={() => setLaunchYear(i)}>{i}</button>)
      }
      for(let i of ['true','false']){
        launch.push(<button className="year-button" text={i} key={i} onClick={() => setSuccessfulLaunch(i)}>{i}</button>)
      }
      for(let i of ['true', 'false']){
        landing.push(<button className="year-button" text={i} key={i} onClick={() => setsuccessfulLanding(i)}>{i}</button>)
      }
    return ( 
    <div className="main-container">
        <div className="filter-contaniner">
            <p className="filter-text">Filters</p>
            <div className="filter-sub-contaniner">
                <p className="set-font-border">Launch Year</p>
                {listOfYears}
            </div>
            <div className="filter-sub-contaniner">
                <p className="set-font-border">Successful Launch</p>
                {launch}
            </div> 
            <div className="filter-sub-contaniner">
                <p className="set-font-border">Successful Landing</p>
                {landing}
            </div> 
        </div> 
        <div className="cat-container">
        {finalData.length > 0 ?  finalData.map((val,index) => <Category key={index} data={val}/>) :  <Nodata launchYear={launchYear} successfulLaunch={successfulLaunch} successfulLanding={successfulLanding}/>}
        </div>
    </div>);
}
