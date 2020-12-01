function Taps(props) {
  return (
    <article className="taps-wrapper">
      <h1>Taps</h1>
      <div className="taps-flex-wrapper">
        {props.apiData.map((taps) => {
          const imageUrl = taps.beer.replace(/\s+/g, "").toLowerCase();
          const percentage = (taps.level * 100) / taps.capacity;
          const wave = {
            backgroundSize: `200px ${percentage}%`,
          };

          return (
            <div style={wave} className="taps-card wave">
              <h3>{taps.beer}</h3>
              <img src={`images/${imageUrl}.png`}></img>
              <span>{percentage}%</span>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Taps;
