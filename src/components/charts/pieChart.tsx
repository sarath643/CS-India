import { RootState } from '@/store';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

const PieChart = () => {
  const data = useSelector((state: RootState) => state.covid.filteredData);

  const title = `COVID Case Distribution ${('state' in data && data?.state) || 'India'}`;
  const wrapTitle = `COVID Case Distribution <br> ${'state' in data && data?.state}`;

  return (
    <Plot
      data={[
        {
          values: [data.recoveredCases, data.deathCases, data.activeCases],
          labels: ['Recovered', 'Deaths', 'Active Cases'],
          type: 'pie',
          marker: {
            colors: ['#008526', '#b80000', '#FFA500'],
          },
        },
      ]}
      layout={{
        title: 'state' in data && data?.state.length > 12 ? wrapTitle : title,
        annotations: [
          {
            text: `Total Cases: ${data.totalCases}`,
            x: 0.5,
            y: -0.1,
            xref: 'paper',
            yref: 'paper',
            showarrow: false,
          },
        ],
      }}
      useResizeHandler={true}

      //   style={{ width: '100%', height: '100%' }}
    />
  );
};

export default PieChart;
