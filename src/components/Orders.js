

function Orders(props) {
	console.log(props.apiData);


	return (
		<article className="orders-wrapper">
			{	 props.apiData.length < 1 ? null : props.apiData.map(orders => {
				return (
					<div className="order-card" key={orders.id}>
						<div >
							<img className="order-img" src="images/beer-w.png" alt="beers" />
							<h3 className="order-number"> {`#${orders.id}`}</h3>
						</div>
						<ul>
							{orders.order.map(beer => {
								return (
									<li className="order-beer">{beer}</li>)
							})}
						</ul>
					</div>
				)
			})}
		</article>
	)
}

export default Orders