function Storage(props) {
  return (
    <article className="storage-wrapper">
      <h1>Storage</h1>
      {props.apiData.map((storage) => {
        const imageUrl = storage.name.replace(/\s+/g, "").toLowerCase();

        return (
          <div className="storage-card">
            <div className="storage-left-col">
              <img src={`images/${imageUrl}.png`}></img>
            </div>
            <div className="storage-right-col">
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
