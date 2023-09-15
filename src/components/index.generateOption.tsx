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
