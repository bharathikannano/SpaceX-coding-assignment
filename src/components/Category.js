import React, { useEffect, useState } from 'react';

export default function Category({data}) {
    console.log(data);
    let {launch_year,launch_success,mission_id,rocket}=data
    return ( <div className="cat-sub-container">
        <div className="col-md-4">
        <div className="col-md-12 border cumsover">
        <img className="card-img-top" src={data.links.mission_patch} alt="Rocket image not available" />
        <div className="mission-title">{rocket.rocket_name} {rocket.rocket_type}</div>
          <ul className="list-group list-group-flush">
           <li className="list-group-item">Mission Ids: <span className="float-md-right">{mission_id[0]}</span></li>
           <li className="list-group-item">Launch Year:<span className="float-md-right">{launch_year}</span></li>
           <li className="list-group-item">Success Launch:<span className="float-md-right">{launch_success.toString()}</span></li>
           <li className="list-group-item">Success Landing:<span className="float-md-right">{rocket.first_stage.cores[0].land_success.toString()}</span></li>
        </ul>
        </div>
        </div>
    </div>);
}
