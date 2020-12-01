
function Bartender(props) {
	console.log(props.apiData);
	return (

		<article className='bartender-wrapper' >
			<h1 className='bartenders-heading'>Bartenders</h1>
			{props.apiData.map(bartender => {

				// const replaceKeg = bartender.statusDetail === 'replaceKeg' ? 'Replacing Keg' : null;
				// const reserveTap = bartender.statusDetail === 'reserveTap' ? 'Reserving tap' : replaceKeg;
				// const startServing = bartender.statusDetail === 'startServing' ? 'Starting service' : reserveTap;
				// const receivePayment = bartender.statusDetail === 'receivePayment' ? 'Receiving payment' : startServing;
				// const waiting = bartender.statusDetail === 'waiting' ? 'Waiting' : receivePayment;
				// const releaseTap = bartender.statusDetail === 'releaseTap' ? 'Releasing Tap' : waiting;
				// const pourBeer = bartender.statusDetail === 'pourBeer' ? "Pouring beer" : releaseTap;

				const statuses = {
					replaceKeg: 'Replacing Keg',
					pourBeer: 'Pouring Beer',
					reserveTap: 'Reserving tap',
					startServing: 'Starting service',
					receivePayment: 'Receiving payment',
					waiting: 'Waiting',
					releaseTap: 'Releasing Tap',
				}



				// switch (bartenderStatus) {
				// 	case bartender.statusDetail === 'pourBeer':
				// 		return setBartenderStatus('Pouring beer');
				// 	case bartenderStatus === 'releaseTap':
				// 		return setBartenderStatus('Releasing Tap');
				// 	case bartenderStatus === 'receivePayment':
				// 		return setBartenderStatus('Receiving Payment');
				// 	default:
				// }

				return (
					<div className='bartender-card' key={bartender.name}>

						<div className='bartender-left-col'>
							<img src={`images/${bartender.name}.png`} alt="Bartenders" />
							<h2>{bartender.name}</h2>
						</div>

						<div className='bartender-mid-col'>
							<div>
								<span>Serving Customer</span>
								<h4> {bartender.servingCustomer === null ? 'None' : `#${bartender.servingCustomer}`}</h4>
							</div>
							<br />
							<div>
								<span>Currently</span>
								<h4> {statuses[bartender.statusDetail]}</h4>
							</div>
						</div>

						<div className='bartender-right-col'>
							<span>Tap</span>
							<h4>{bartender.usingTap === null ? "None" : bartender.usingTap}</h4>
						</div>

					</div>
				)
			})}

		</article>
	);
}

export default Bartender;
