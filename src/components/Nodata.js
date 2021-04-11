import React, { useEffect, useState } from 'react';

export default function Nodata({launchYear,successfulLaunch,successfulLanding}) {
    return ( <div className="cat-sub-container">
    <div className="col-md-4">
    <div className="col-md-12 border cumsover">
    <img className="card-img-top" src="https://previews.123rf.com/images/bonumopus/bonumopus1609/bonumopus160900080/63150110-universe-404-error-page-template-for-website-outer-space-with-astronaut-planets-and-rocket-page-not-.jpg" alt="Rocket image not available" />
    <div className="mission-title">Filters :: No Data Found</div>
    <div> </div>
      <ul className="list-group list-group-flush">
       <li className="list-group-item">Launch Year: <span className="float-md-right">{launchYear}</span></li>
       <li className="list-group-item">Launch Success:<span className="float-md-right">{successfulLaunch.toString()}</span></li>
       <li className="list-group-item">Landing Success:<span className="float-md-right">{successfulLanding.toString()}</span></li>
    </ul>
    </div>
    </div>
</div>);
}