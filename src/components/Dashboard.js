import React from "react";
import Bartender from "./Bartender";
import Storage from "./Storage";
import Taps from "./Taps";
import Orders from "./Orders";
import Statistics from "./Statistics";

function Dashboard(props) {
  // console.log(props.apiData);
  return (
    <section className="dashboard-wrapper">
      <Bartender apiData={props.apiData.bartenders} />
      <Statistics apiData={props.apiData.queue} />
      <Taps apiData={props.apiData.taps} />
      <Orders />
      <Storage apiData={props.apiData.storage} />
    </section>
  );
}

export default Dashboard;
