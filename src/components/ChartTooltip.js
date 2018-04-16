import React from "react";
import { Line } from 'react-chartjs-2';
import ReactTooltip from 'react-tooltip';

const ChartTooltip = (props) => {
  const sizes = [...Array(50).keys()];
  const chartTypes = {
    'O(n)': sizes,
    'O(log n)': sizes.map(x => Math.log10(x)),
    'O(nlog n)': sizes.map(x => x*Math.log10(x)),
    'O(n^2)': sizes.map(x => x**2)
  }
  const data = {
      labels: sizes,
      datasets: [{
        label: props.type,
        borderColor: 'rgba(255,99,132,1)',
        data: chartTypes[props.type]
      }]
  };
  const opts = {
    maintainAspectRatio: false,
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  display: false
              }
          }],
          xAxes: [{
              ticks: {
                  beginAtZero: true,
                  display: false
              }
          }]
      }
  }
  return (
    <ReactTooltip id={props.id} place="bottom">
     <Line data={data}
           options={opts}
           width={500}
           height={500}
      />
    </ReactTooltip>
  );
}

export default ChartTooltip;