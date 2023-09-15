// prettier-ignore
const hours = [
"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "YEAR"
];
// prettier-ignore
const days = [ "2020", "2021", "2022", "2023"]
// prettier-ignore
const data = [[0, 0, 0.0], [0, 1, 0.0], [0, 2, 0.0], [0, 3, 0.0], [0, 4, 0.0], [0, 5, 0.0], [0, 6, 0.0], [0, 7, -35.95], [0, 8, 116.95], [0, 9, 17.28], [0, 10, 36.94], [0, 11, -6.43], [0, 12, 108.8], [1, 0, 0.44], [1, 1, -4.8], [1, 2, 36.2], [1, 3, -14.83], [1, 4, 0.48], [1, 5, -4.8], [1, 6, 18.45], [1, 7, 9.27], [1, 8, 8.09], [1, 9, 14.75], [1, 10, 10.24], [1, 11, -9.18], [1, 12, 70.56], [2, 0, 63.08], [2, 1, 3.86], [2, 2, 23.98], [2, 3, 14.29], [2, 4, 6.99], [2, 5, 1.03], [2, 6, -8.58], [2, 7, 0.83], [2, 8, 3.57], [2, 9, 8.4], [2, 10, 2.59], [2, 11, -2.82], [2, 12, 167.66], [3, 0, -1.55], [3, 1, 0.08], [3, 2, 14.39], [3, 3, 0.37], [3, 4, -0.45], [3, 5, 1.53], [3, 6, -0.04], [3, 7, -0.73], [3, 8, 0.0], [3, 9, 0.0], [3, 10, 0.0], [3, 11, 0.0], [3, 12, 13.48]]
    .map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});
const options = {
  tooltip: {
    position: 'top',
  },
  grid: {
    height: '50%',
    top: '10%',
  },
  xAxis: {
    type: 'category',
    data: hours,
    splitArea: {
      show: true,
    },
  },
  gradientColor: ['#ff7f7a', '#00c674'],
  yAxis: {
    type: 'category',
    data: days,
    splitArea: {
      show: true,
    },
  },
  visualMap: {
    min: 0,
    max: 10,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: '15%',
  },
  series: [
    {
      name: 'Monthly Return',
      type: 'heatmap',
      data: data,
      label: {
        show: true,
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};

export default options;
