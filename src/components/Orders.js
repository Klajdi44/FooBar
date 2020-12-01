function Orders(props) {
	// props.apiData.length < 1 ? null : props.apiData.map(orders => 

	return (
		<article className="orders-wrapper">
			{	props.apiData.map(orders => {

				const duplicatesResult = {};
				orders.order.map(function (beer) {
					duplicatesResult[beer] = (duplicatesResult[beer] || 0) + 1;
					return duplicatesResult;
				});

				console.log(duplicatesResult);

				return (
					<div className="order-card" key={orders.id}>
						<div >
							<img className="order-img" src="images/beer-w.png" alt="beers" />
							<h3 className="order-number"> {`#${orders.id}`}</h3>
						</div>
						<ul>
							{Object.entries(duplicatesResult).map(([key, value]) => {
								return <li className="order-beer">{value === 1 ? "" : `x${value}`} {key} </li>
							})}
						</ul>
					</div>
				)
			})}
		</article>
	)
}

export default Orders;
