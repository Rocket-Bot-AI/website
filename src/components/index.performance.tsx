import ReactECharts from 'echarts-for-react'; // or var ReactECharts = require('echarts-for-react');

import options from '@/components/index.heatmapOptions';

const Performance = () => {
  console.log(options);
  return (
    <div className='performance min-h-[600px] w-full bg-gray-500 py-32 text-gray-100'>
      <div className='mx-auto flex max-w-[1024px] max-w-screen-xl flex-col flex-wrap items-center'>
        <div id='performance' className='mb-8 text-5xl text-cyan-500'>
          Rocket Bot 🤖
        </div>
        <div className='mb-4 max-w-[800px] text-center text-xl'>
          Rocket Bot is your AI-powered trading companion, engineered to propel
          your investments to new heights with its data-driven precision. Our
          cutting-edge AI algorithms analyze real-time market data, ensuring you
          make well-informed trades while leaving emotions behind. Whether
          you're a seasoned trader or a beginner, Rocket Bot maximizes your
          returns by continuously adapting to market conditions. We prioritize
          your security with top-tier encryption and offer a user-friendly
          interface for effortless customization. With access to global markets
          and transparent performance tracking, Rocket Bot is your ticket to
          financial success. Join the Rocket Revolution today and watch your
          investments soar like never before.
        </div>

        <div className='mt-12 text-3xl text-gray-100'>
          The monthly Performance of Rocket Bot
        </div>
        <ReactECharts
          style={{ height: 600, width: '100%' }}
          option={options}
          notMerge
          lazyUpdate
          theme='theme_name'
        />
      </div>
    </div>
  );
};

export default Performance;
