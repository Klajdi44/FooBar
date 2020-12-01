function Orders(props) {
  return (
    <article className="orders-wrapper">
      <h1>Orders</h1>
      {props.apiData.map((orders) => {
        const duplicatesResult = {};
        orders.order.map(function (x) {
          duplicatesResult[x] = (duplicatesResult[x] || 0) + 1;
          return duplicatesResult;
        });

        const maps = Object.entries(duplicatesResult).map(([key, value]) => {
          return (
            <span>
              {key} x{value}
              <br />
            </span>
          );
        });
        console.table(orders);
        console.table(duplicatesResult);

        return (
          <div>
            <h1>{orders.id}</h1>
            <div>{maps}</div>
          </div>
        );
      })}
    </article>
  );
}

export default Orders;
