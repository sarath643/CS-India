import { covidData, IcovidData, IndiaCovidData, StateCovidData } from '@/utils/data/covidData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CovidState {
  covidData: IndiaCovidData;
  filteredData: StateCovidData | IcovidData;
}

// Initial state includes the full data and an empty array for filtered data
const initialState: CovidState = {
  covidData,
  filteredData: covidData.totalData, // By default, show all states
};
export const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    setCovidData: (state, action: PayloadAction<IndiaCovidData>) => {
      state.covidData = action.payload;
      state.filteredData = action.payload.totalData;
    },
    setFilteredData: (state, action: PayloadAction<StateCovidData | IcovidData>) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setCovidData, setFilteredData } = covidSlice.actions;
export default covidSlice.reducer;
