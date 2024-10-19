import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

interface SummaryProps {
  className?: string;
}

const Card: React.FC<{ title: string; count: number; className: string }> = ({
  title,
  count,
  className,
}) => (
  <div className={`p-4 sm:p-6 rounded-lg shadow-md ${className} transition-colors duration-300`}>
    <div className='flex items-center justify-between mb-4'>
      <h2 className='text-lg font-semibold sm:text-xl'>{title}</h2>
    </div>
    <p className='text-2xl font-bold'>{count.toLocaleString()}</p>
  </div>
);

const SummaryCard: React.FC<SummaryProps> = ({ className }) => {
  const data = useSelector((state: RootState) => state.covid.covidData);

  return (
    <div className={`grid max-w-5xl  grid-cols-1 gap-6 sm:grid-cols-2 ${className}`}>
      <Card
        title={`Total Cases`}
        count={data?.totalData.totalCases}
        className='text-gray-800 bg-white dark:bg-gray-900 dark:text-white'
      />
      <Card
        title={`Active Cases`}
        count={data?.totalData.activeCases}
        className='text-gray-800 bg-white dark:bg-gray-900 dark:text-white'
      />
      <Card
        title={`Recovered Cases`}
        count={data?.totalData.recoveredCases}
        className='text-gray-800 bg-white dark:bg-gray-900 dark:text-white'
      />
      <Card
        title={`Deaths`}
        count={data?.totalData.deathCases}
        className='text-gray-800 bg-white dark:bg-gray-900 dark:text-white'
      />
    </div>
  );
};

export default SummaryCard;
