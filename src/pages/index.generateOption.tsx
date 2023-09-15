const generateOption = (state: any) => {};
// const generateOption = (state: any) => {
//   const option = {
//     // title: {
//     //   text: `Data Amount: ${echarts.format.addCommas(state.dates.length)}`,
//     // },
//     tooltip: {
//       trigger: 'axis',
//       position(pos, params, el, elRect, size) {
//         const obj = { top: 10 };
//         obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
//         return obj;
//       },
//       axisPointer: {
//         type: 'cross',
//       },
//       textStyle: {
//         fontSize: 12,
//       },
//     },
//     // // An area-selecting component, with which user can select part of data from a chart to display in detail, or do calculations with them.
//     // brush: {
//     //   xAxisIndex: 'all',
//     //   brushLink: 'all',
//     //   outOfBrush: {
//     //     colorAlpha: 0.1,
//     //   },
//     // },
//     // // A group of utility tools, which includes export, data view, dynamic type switching, data area zooming, and reset.
//     // toolbox: {
//     //   feature: {
//     //     dataZoom: {
//     //       yAxisIndex: false,
//     //     },
//     //   },
//     // },
//     axisPointer: {
//       link: [
//         {
//           xAxisIndex: 'all',
//         },
//       ],
//       label: {
//         backgroundColor: '#777',
//       },
//     },
//     // Here is where we add more panels
//     grid: [
//       {
//         left: '1%',
//         right: '5%',
//         top: 20,
//         bottom: 240,
//         borderColor: '#4c4c4c',
//         borderWidth: 1,
//         show: true,
//       },
//       {
//         left: '1%',
//         right: '5%',
//         height: 80,
//         bottom: 150,
//         borderColor: '#4c4c4c',
//         borderWidth: 1,
//         show: true,
//       },
//       {
//         left: '1%',
//         right: '5%',
//         height: 80,
//         bottom: 60,
//         borderColor: '#4c4c4c',
//         borderWidth: 1,
//         show: true,
//       },
//     ],
//     xAxis: [
//       {
//         type: 'category',
//         boundaryGap: false,
//         data: state.dates,
//         show: false,
//         axisLine: { onZero: false },
//         splitLine: { show: false },
//         min: 'dataMin',
//         max: 'dataMax',
//       },
//       {
//         type: 'category',
//         show: false,
//         gridIndex: 1,
//         boundaryGap: false,
//         data: state.dates,
//         axisLine: { onZero: false },
//         splitLine: { show: false },
//         min: 'dataMin',
//         max: 'dataMax',
//       },
//       {
//         type: 'category',
//         gridIndex: 2,
//         boundaryGap: false,
//         data: state.dates,
//         // inverse: true,
//         axisLine: { onZero: false },
//         splitLine: { show: false },
//         min: 'dataMin',
//         max: 'dataMax',
//       },
//     ],
//
//     yAxis: [
//       {
//         position: 'right',
//         scale: true,
//         splitArea: {
//           show: true,
//         },
//       },
//       {
//         position: 'right',
//         scale: true,
//         gridIndex: 1,
//         splitNumber: 2,
//       },
//       {
//         position: 'right',
//         scale: true,
//         gridIndex: 2,
//         splitNumber: 2,
//       },
//     ],
//     dataZoom: [
//       {
//         type: 'inside',
//         xAxisIndex: [0, 1, 2],
//         start: 0,
//         end: 80,
//       },
//       {
//         show: true,
//         xAxisIndex: [0, 1, 2],
//         type: 'slider',
//         bottom: 10,
//         start: 10,
//         end: 100,
//       },
//     ],
//     series: [
//       {
//         name: 'OHLC',
//         type: 'candlestick',
//         data: state.candleData,
//         markPoint: {
//           label: {
//             formatter(param) {
//               return param != null ? `${Math.round(param.value)}` : '';
//             },
//             fontSize: 8,
//             distance: 350,
//             show: false,
//           },
//           data: state.markData,
//           symbol: 'triangle',
//           symbolSize: 12,
//         },
//         markLine: {
//           data: state.tradeArrows,
//         },
//       },
//     ],
//   };
//
//   state.indicators.map((indicator) => option.series.push(indicator));
//   console.log(option.series[0].markLine.data);
//
//   return option;
// };

const option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    show: false,
    data: [
      16011.8, 34737.2, 40738.4, 55786.4, 52199.598, 52431.4, 49913, 67981.4,
      57900.2, 58176.598, 55386.598, 65606.6, 71687.195, 77486, 88918.4,
      98026.6, 89027.6, 145184.8, 150794.39, 186954.6, 213677.39, 228606.2,
      230950.2, 211138.39, 212891.39, 220491, 239010.2, 245193, 238290,
      234599.2, 234790.2, 268584.78, 269589.4, 268369.78, 272473.78, 272367.78,
      270380.78,
    ],
  },
  yAxis: {
    type: 'value',
    show: false,
  },
  title: {
    text: 'APY: 86.78%',
    right: 100,
    bottom: 80,
    textStyle: {
      color: 'cyan',
    },
  },
  series: [
    {
      label: {
        // Absolute pixel values
        position: [10, 10],
        // Relative percentage
        position: ['50%', '50%'],
      },
      data: [
        16011.8, 34737.2, 40738.4, 55786.4, 52199.598, 52431.4, 49913, 67981.4,
        57900.2, 58176.598, 55386.598, 65606.6, 71687.195, 77486, 88918.4,
        98026.6, 89027.6, 145184.8, 150794.39, 186954.6, 213677.39, 228606.2,
        230950.2, 211138.39, 212891.39, 220491, 239010.2, 245193, 238290,
        234599.2, 234790.2, 268584.78, 269589.4, 268369.78, 272473.78,
        272367.78, 270380.78,
      ],

      type: 'line',
      color: 'cyan',
      lineStyle: {
        width: 3,
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgb(0, 255, 255, 0.5)',
            },
            {
              offset: 1,
              color: 'rgba(0, 0, 0, 0)',
            },
          ],
          global: false, // default is false
        },
      },
      symbol: 'none',
    },
  ],
};

export { option };

export default generateOption;
