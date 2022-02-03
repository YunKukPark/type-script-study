import { fetchCoinHistory } from 'api';
import React from 'react';
import { useQuery } from 'react-query';

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery(['ohlcv', coinId], () => fetchCoinHistory(coinId));

  return <div>Chart</div>;
}

export default Chart;
