import ReactECharts from 'echarts-for-react'; // or var ReactECharts = require('echarts-for-react');
import React, { useEffect, useState } from 'react';

import Header from '@/components/Header';
import CTA from '@/components/index.cta';
import { option } from '@/components/index.generateOption';
import Performance from '@/components/index.performance';

const defaultState = {
  height: 0,
  equityData: [],
  dates: [],
  candleData: [],
  markData: [],
  scatterData: [],
  indicators: [],
};

function App() {
  const [state, setState] = useState(defaultState);
  useEffect(() => {
    if (state.height === 0) {
      setState((prevState) => ({
        ...prevState,
        height: window.innerHeight,
      }));
      // fetchData(setState);
      // fetchIndicators(setState);
      // fetchTradeArrows(setState);
    }
  }, [state]);

  if (state.height === 0) {
    return <div className='' />;
  }

  return (
    <div className='min-h-screen bg-gray-600'>
      <Header></Header>
      <div className='hero bg-gray-700'>
        <div className='mx-auto flex max-w-[1024px] max-w-screen-xl flex-wrap items-center justify-evenly'>
          <div className='w-2/5'>
            <CTA />
          </div>
          <div className='w-3/5'>
            <ReactECharts
              style={{ height: 600 }}
              // option={generateOption(state)}
              option={option}
              notMerge
              lazyUpdate
              theme='theme_name'
            />
          </div>
        </div>
      </div>
      <Performance />
    </div>
  );
}

export default App;
