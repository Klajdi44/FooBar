import ReactEcharts from "echarts-for-react";

function Statistics(props) {
  const allBeer = [];
  const duplicatesResult = {};

  props.apiData.forEach((orders) => {
    orders.order.map((beer) => {
      allBeer.push(beer);

      return allBeer;
    });
  });

  allBeer.map((beer) => {
    duplicatesResult[beer] = (duplicatesResult[beer] || 0) + 1;
    return duplicatesResult;
  });

  const obj = Object.entries(duplicatesResult).map(([key, value]) => {
    return { value, name: key };
  });

  const getOption = () => ({
    backgroundColor: "#2c2c2c",

    title: {
      text: "Demand",
      left: "15",
      top: "15",
      textStyle: {
        color: "#fff",
        fontSize: "19",
      },
    },

    tooltip: {
      trigger: "item",
      triggerOn: "mousemove|click",
      formatter: "{b} : {c} ({d}%)",
    },

    visualMap: {
      show: false,
      min: 1,
      max: 20,
      inRange: {
        colorLightness: [0, 3],
        // colorLightness: [4, -1]
      },
    },
    series: [
      {
        name: "Beer",
        type: "pie",
        radius: "60%",
        center: ["50%", "50%"],
        data: obj.sort((a, b) => {
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
          length: 1,
          length2: 20,
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
      <ReactEcharts option={getOption()} style={{ height: 390 }} />
      <span className="in-queue">
        In Queue: <h1>{props.apiData.length}</h1>{" "}
      </span>
    </article>
  );
}
export default Statistics;
