import React, { useState } from "react";
import gsap from "gsap";

function Orders(props) {
  const [dataLength, setDataLength] = useState(0);

  return (
    <article className="orders-wrapper">
      <h1>Incoming orders</h1>
      {props.apiData.map((orders) => {
        const duplicatesResult = {};
        orders.order.map(function (beer) {
          duplicatesResult[beer] = (duplicatesResult[beer] || 0) + 1;
          return duplicatesResult;
        });

        //Orders animation
        function checkLength() {
          if (dataLength < props.apiData.length || dataLength == 1) {
            gsap.fromTo(".order-card", { opacity: 0 }, { opacity: 1, duration: 2 });
          } else {
            gsap.fromTo(".order-card", { opacity: 0.2 }, { opacity: 1, duration: 1 });
          }
          setDataLength(props.apiData.length);
        }

        dataLength !== props.apiData.length ? checkLength() : console.log("no");
        //

        return (
          <div className="order-card" key={orders.id}>
            <div>
              <img className="order-img" src="images/beer-w.png" alt="beers" />
              <h3 className="order-number"> {`#${orders.id}`}</h3>
            </div>
            <ul>
              {Object.entries(duplicatesResult).map(([key, value]) => {
                return (
                  <li key={orders.id + Math.random()} className="order-beer">
                    {value === 1 ? "" : `x${value}`} {key}{" "}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </article>
  );
}

export default Orders;
