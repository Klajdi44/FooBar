import React from 'react';

function Bartender(props) {
	console.log(props.bartenders);
	return (

		<section className='bartender-wrapper' >

			{props.bartenders.map(bartender => {
				return (
					<section className='bartender-card' key={bartender.name}>
						<div className='bartender-left-col'>
							<img src={`images/${bartender.name}.png`} alt="Bartender" />
							<h2>{bartender.name}</h2>
						</div>
						<div className='bartender-mid-col'>
							<div>
								<h3>Serving Customer</h3>
								<h2> {bartender.servingCustomer}</h2>
							</div>

							<div>
								<h3>Currently</h3>
								<h2> {bartender.statusDetail}</h2>
							</div>
						</div>

						<div className='bartender-right-col'>
							<h3>Tap</h3>
							<h2>{bartender.usingTap}</h2>
						</div>

					</section>
				)
			})}

		</section>
	);
}

export default Bartender;
