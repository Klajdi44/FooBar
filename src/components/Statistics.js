import ReactEcharts from "echarts-for-react";

function Statistics(props) {
  const allBeer = [];
  const duplicatesResult = {};
  props.apiData.map((orders) => {
    orders.order.map(function (beer) {
      allBeer.push(beer);

      return allBeer;
    });
  });

  allBeer.map((beer) => {
    duplicatesResult[beer] = (duplicatesResult[beer] || 0) + 1;
    return duplicatesResult;
  });

  const obj = Object.entries(duplicatesResult).map(([key, value]) => {
    return { value: value, name: String(key) };
  });

  const getOption = () => ({
    backgroundColor: "#2c2c2c",

    title: {
      text: "Demand",
      left: "center",
      top: 0,
      textStyle: {
        color: "#fff",
        fontSize: "35",
      },
    },

    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },

    visualMap: {
      show: false,
      min: 10,
      max: 500,
      inRange: {
        colorLightness: [4, -1],
        // colorLightness: [4, -1]
      },
    },
    series: [
      {
        name: "Beer",
        type: "pie",
        radius: "70%",
        center: ["50%", "50%"],
        data: obj.sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: "radius",
        label: {
          color: "#fff",
          fontSize: 15,
        },
        labelLine: {
          lineStyle: {
            color: "#fff",
          },
          smooth: 0.2,
          length: 4,
          length2: 4,
        },
        itemStyle: {
          color: "#c23531",
          shadowBlur: 200,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },

        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function (idx) {
          return Math.random() * 200;
        },
      },
    ],
  });

  return (
    <article className="statistics-wrapper">
      <ReactEcharts option={getOption()} style={{ height: 500 }} />
      <span className="in-queue">
        In Queue: <h1>{props.apiData.length}</h1>{" "}
      </span>
    </article>
  );
}
export default Statistics;
