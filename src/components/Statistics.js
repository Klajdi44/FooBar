import ReactEcharts from "echarts-for-react";


function Statistics(props) {
	// console.log(props.apiData.length);
	// const var1 = props.apiData.length < 1 ? 255 : props.apiData[0].id;

	const getOption = () => ({
		backgroundColor: '#2c2c2c',

		title: {
			text: ' Popularity',
			left: 'center',
			top: 0,
			textStyle: {
				color: '#fff',
				fontSize: '35'
			}
		},

		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},

		visualMap: {
			show: false,
			min: 10,
			max: 500,
			inRange: {
				colorLightness: [0, 10]
				// colorLightness: [4, -1]
			}
		},
		series: [
			{
				name: 'Beer',
				type: 'pie',
				radius: '70%',
				center: ['50%', '50%'],
				data: [
					{ value: 10, name: 'El Hefe' },
					{ value: 20, name: 'Fairy Tale Ale' },
					{ value: 30, name: 'Hollaback Lager' },
					{ value: 30, name: 'GitHop' },
					{ value: 25, name: 'Hoppily Ever After' },
					{ value: 20, name: 'Mowintime' },
					{ value: 10, name: 'Row 26					' },
					{ value: 23, name: 'Steampunk' },
					{ value: 40, name: 'Ruined childhood' },
					{ value: 15, name: 'Sleighride' }
				].sort(function (a, b) { return a.value - b.value; }),
				roseType: 'radius',
				label: {
					color: '#fff',
					fontSize: 15
				},
				labelLine: {
					lineStyle: {
						color: '#fff'
					},
					smooth: 0.2,
					length: 4,
					length2: 4
				},
				itemStyle: {
					color: '#c23531',
					shadowBlur: 200,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				},

				animationType: 'scale',
				animationEasing: 'elasticOut',
				animationDelay: function (idx) {
					return Math.random() * 200;
				}
			}
		]
	}
	);
	return (
		< article className="statistics-wrapper" >
			<ReactEcharts option={getOption()} style={{ height: 500 }} />
			<span className='in-queue'>In Queue: <h1>{props.apiData.length}</h1> </span>

		</article >
	);
}
export default Statistics;
