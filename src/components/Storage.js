import React, { useEffect } from 'react';
import gsap from 'gsap';
function Storage(props) {

  useEffect(() => {
    gsap.fromTo(".storage-card", { opacity: 0, }, { opacity: 1, stagger: 0.1, duration: 1 });
  }, []);

  return (
    <article className="storage-wrapper">
      <h1>Storage</h1>
      {props.apiData.map((storage) => {
        // const imageUrl = storage.name.replace(/\s+/g, "").toLowerCase();

        return (
          <div className="storage-card" key={storage.name}>
            <div className="storage-bot-col">
              <span>{storage.name}</span>
              <h3>{storage.amount}</h3>
            </div>
          </div>
        );
      })}
    </article>
  );
}

export default Storage;
