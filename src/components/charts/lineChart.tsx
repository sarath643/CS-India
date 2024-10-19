import { RootState } from '@/store';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

const LineChart = () => {
  const data = useSelector((state: RootState) => state.covid.filteredData);

  const title = `COVID-19 Stats in ${('state' in data && data?.state) || 'India'}`;
  const wrapTitle = `COVID-19 Stats in <br> ${'state' in data && data?.state}`;

  return (
    <Plot
      // data={[
      //   {
      //     x: ['Total', 'Recovered', 'Active', 'Deaths'],
      //     y: [data.totalCases, data.recoveredCases, data.activeCases, data.deathCases], // data.totalCases,
      //     name: 'SF Zoo',
      //     type: 'bar',
      //     marker: { color: ['#072ce6', '#008526', '#FFA500', '#b80000'] },
      //   },
      // ]}
      // layout={{ title: 'COVID-19 Trend', barcornerradius: 10 }}

      data={[
        {
          x: [1, 2, 3, 4],
          y: [data.totalCases, data.totalCases, data.totalCases, data.totalCases], // data.totalCases,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'blue' },
          name: 'Total',
        },
        {
          x: [1, 2, 3, 4],
          y: [data.activeCases, data.activeCases, data.activeCases, data.activeCases],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'orange' },
          name: 'Active',
        },
        {
          x: [1, 2, 3, 4],
          y: [data.recoveredCases, data.recoveredCases, data.recoveredCases, data.recoveredCases],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'green' },
          name: 'Recovered',
        },
        {
          x: [1, 2, 3, 4],
          y: [data.deathCases, data.deathCases, data.deathCases, data.deathCases],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
          name: 'Death',
        },
      ]}
      layout={{
        title: 'state' in data && data?.state.length > 12 ? wrapTitle : title,
      }}
      useResizeHandler={true}
      config={{
        editable: false,
        displayModeBar: false,
      }}
    />
  );
};

export default LineChart;
