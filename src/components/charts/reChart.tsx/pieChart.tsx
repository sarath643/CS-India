import { TrendingUp } from 'lucide-react';
import { LabelList, Pie, PieChart } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../chart';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../card';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const chartConfig = {
  value: {
    label: 'Percentage',
  },
  recovered: {
    label: 'Recovered Cases',
    color: '#008526',
  },
  active: {
    label: 'Active Cases',
    color: '#FFA500',
  },

  death: {
    label: 'Deaths',
    color: '#b80000',
  },
} satisfies ChartConfig;

export function PieChartNormal() {
  const data = useSelector((state: RootState) => state.covid.filteredData);

  const chartData = [
    { key: 'active', value: data.activeCases, fill: 'var(--color-active)' },
    { key: 'recovered', value: data.recoveredCases, fill: 'var(--color-recovered)' },
    { key: 'death', value: data.deathCases, fill: 'var(--color-death)' },
  ];

  return (
    <Card className='flex flex-col justify-between h-full py-5'>
      <CardHeader className='items-center p-2 pb-0'>
        <CardTitle className='font-normal'>
          COVID Case Distribution {('state' in data && data?.state) || 'India'}
        </CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className='flex-1 p-2 pb-0'>
        <ChartContainer config={chartConfig} className='mx-auto aspect-square max-h-[300px]'>
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey='value' hideLabel />} />
            <Pie
              data={chartData}
              dataKey='value'
              outerRadius={100}
              label
              // label={renderCustomizedLabel}
            >
              {/* <LabelList
                dataKey='key'
                className='fill-skin-text'
                stroke='none'
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) => chartConfig[value]?.label}
              /> */}

              <ChartLegend
                content={<ChartLegendContent nameKey='key' hideIcon={false} />}
                className='-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center'
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 p-2 text-sm'>
        <div className='flex items-center gap-2 font-medium leading-none'>
          Total Cases <span className='text-muted-foreground'>{data.totalCases}</span>
        </div>
        {/* <div className='leading-none text-muted-foreground'>
          Showing total visitors for the last 6 months
        </div> */}
      </CardFooter>
    </Card>
  );
}
