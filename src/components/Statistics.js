import ReactEcharts from "echarts-for-react";


function Statistics(props) {
	console.log(props.apiData.length);
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
			min: 50,
			max: 500,
			inRange: {
				colorLightness: [4, -1]
			}
		},
		series: [
			{
				name: 'Beer',
				type: 'pie',
				radius: '70%',
				center: ['50%', '50%'],
				data: [
					{ value: 335, name: 'El leffe' },
					{ value: 100, name: 'El bla' },
					{ value: 390, name: 'El chiko' },
					{ value: 200, name: 'El Jose' },
					{ value: 500, name: 'El chikita' },
					{ value: 300, name: 'El dorado' },
					{ value: 310, name: 'Row 26' },
					{ value: 274, name: 'Steampunk' },
					{ value: 235, name: 'Ruined childhood' },
					{ value: 400, name: 'fairyTale ale' }
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
					length: 0,
					length2: 0
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
			<h1>InQueue {props.apiData.length}</h1>
		</article >
	);
}
export default Statistics;
