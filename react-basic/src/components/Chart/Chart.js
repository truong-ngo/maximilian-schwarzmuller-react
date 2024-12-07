import "./Chart.css"
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const valueArray = props.dataPoints.map(items => items.value)
    const maxValue = Math.max(...valueArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
