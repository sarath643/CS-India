// src/pages/Dashboard.tsx
import LineChart from '@/components/charts/lineChart';
import PieChart from '@/components/charts/pieChart';
import FilterState from '@/components/filterState';
import MapView from '@/components/maps';
import SummaryCard from '@/components/summaryCard';
import React from 'react';
import bgImage from '@/assets/C1.png';

const Dashboard: React.FC = () => {
  return (
    <div className='space-y-4 bg-center sm:space-y-8 '>
      <div className='relative p-6 text-black rounded-lg bg-opacity-10 dark:text-white bg-gradient-to-r from-purple-300/50 to-blue-50'>
        <h1 className='mb-4 text-3xl font-bold'>COVID-Stats India</h1>
        <p className='mb-4'>
          Welcome to the COVID-Stats India.
          <br />
          India, with over 1.3 billion people, has faced significant challenges during the COVID-19
          pandemic since January 2020. The country has experienced several infection waves, each
          impacting public health infrastructure and policy.
          <br />
          This page provides up-to-date information on the spread of COVID-19 across different
          states in India. You can view data on Total Cases, Active Cases, Recovered Cases, and
          Deaths.
        </p>

        <h3 className='mb-2 text-lg font-medium'>Understanding the Data:</h3>
        <ul className='list-disc list-inside'>
          <li>Total Cases: Cumulative confirmed cases</li>
          <li>Active Cases: Currently infected individuals</li>
          <li>Recovered Cases: Total recovered individuals</li>
          <li>Deaths: Total fatalities attributed to COVID-19</li>
        </ul>
        <div
          className='absolute top-0 left-0 w-full h-full rounded-lg opacity-40 bg-opacity-5 '
          style={{ backgroundImage: `url(${bgImage})` }}></div>
      </div>
      <SummaryCard />
      <div className='p-2 text-black rounded-lg shadow-sm bg-white/30 dark:text-white'>
        <p className='p-2 mb-4'>
          Use the filter below to select a specific state, or leave it unselected to view data for
          the entire country. The charts and map will update automatically based on your selection.
        </p>
        <div
          className='p-5 border-l-4 rounded text-accent/70 bg-accent/10 border-accent/50'
          role='alert'>
          <p className='font-bold'>How to use :</p>
          <ul className='list-disc list-outside '>
            <li>Use the state filter to focus on a specific region</li>
            <li>The pie chart shows the distribution of cases</li>
            <li>The map provides a geographic view of case numbers</li>
            <li>The line chart compares different metrics over cases in states</li>
          </ul>
        </div>
      </div>

      <FilterState />
      <div className='grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 '>
        <PieChart />

        <LineChart />
      </div>
      <MapView />
    </div>
  );
};

export default Dashboard;
