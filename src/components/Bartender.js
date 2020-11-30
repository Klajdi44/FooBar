
function Bartender(props) {
	// console.log(props.apiData, bartenderStatus);
	return (

		<article className='bartender-wrapper' >
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
								<h3>Serving Customer</h3>
								<span> {bartender.servingCustomer === null ? 'None' : bartender.servingCustomer}</span>
							</div>
							<br />
							<div>
								<h3>Currently</h3>
								<span> {statuses[bartender.statusDetail]}</span>
							</div>
						</div>

						<div className='bartender-right-col'>
							<h3>Tap</h3>
							<span>{bartender.usingTap === null ? "None" : bartender.usingTap}</span>
						</div>

					</div>
				)
			})}

		</article>
	);
}

export default Bartender;
