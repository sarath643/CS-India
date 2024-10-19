import { RootState } from '@/store';
import { setFilteredData } from '@/store/covidSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from './select';

const FilterState = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.covid.covidData);
  const [selectedState, setSelectedState] = useState({
    id: 'All',
    label: 'All States',
  });

  const handleStateChange = (stateValue: { id: string; label: string }) => {
    const filteredData =
      stateValue && data?.states.find((item) => item.id.toString() === stateValue.id);

    if (filteredData) {
      dispatch(setFilteredData(filteredData));
    } else {
      dispatch(setFilteredData(data?.totalData));
    }
    console.log(filteredData, 'filteredData in filters');

    setSelectedState(stateValue);
  };

  const states = data?.states.map((item) => ({ id: item.id.toString(), label: item.state }));

  return (
    <div className='items-center w-full mb-4 md:flex '>
      <p className='mb-2 text-sm font-medium text-gray-700 dark:text-white md:mb-0 md:mr-2'>
        Filter by{' '}
      </p>
      <div className='w-full max-w-sm '>
        <Select
          className='w-full'
          label=''
          id='filter'
          value={selectedState}
          onChange={(value) => {
            handleStateChange(value);
            console.log(value);
          }}
          options={[
            {
              id: 'All',
              label: 'All States',
            },
            ...states,
          ]}
        />
      </div>
    </div>
  );
};

export default FilterState;
