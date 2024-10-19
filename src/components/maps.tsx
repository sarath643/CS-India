import { useEffect, useState, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { LatLngTuple } from 'leaflet';

const ChangeView = ({ center, zoom }: { center: LatLngTuple; zoom: number }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const MapView = () => {
  const data = useSelector((state: RootState) => state.covid.covidData);
  const filteredData = useSelector((state: RootState) => state.covid.filteredData);
  const initialCenter = useMemo<LatLngTuple>(() => [20.5937, 78.9629], []);
  const [center, setCenter] = useState<LatLngTuple>(initialCenter);
  const [zoom, setZoom] = useState(4);
  const mapRef = useRef(null);

  useEffect(() => {
    if (filteredData && 'state' in filteredData && filteredData.state) {
      setCenter([filteredData.lat, filteredData.long]);
      setZoom(6); // Zoom in when a state is selected
    } else {
      setCenter(initialCenter);
      setZoom(4); // Zoom out to show all of India when no state is selected
    }
    console.log('render');
  }, [filteredData, initialCenter]);

  return (
    <div className='relative p-4 bg-white rounded-lg shadow-md h-[32rem] min-h-[24rem] md:h-[40rem] '>
      <h2 className='mb-4 text-xl text-black dark:text-white opacity-80'>Cases by State</h2>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '90%', width: '100%', zIndex: 0 }}
        ref={mapRef}>
        <ChangeView center={center} zoom={zoom} />
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {data?.states.map((item) => (
          <CircleMarker
            key={item.state}
            center={[item.lat, item.long]}
            radius={Math.sqrt(item.totalCases) / 100}
            fillColor='red'
            color='red'
            weight={1}
            fillOpacity={0.5}>
            <Tooltip>
              <div>
                <p>{item.state}</p>
                <div className='flex flex-col text-left '>
                  <p>Total Cases: {item.totalCases}</p>
                  <p>Active Cases: {item.activeCases}</p>
                  <p>Recovered: {item.recoveredCases}</p>
                  <p>Deaths: {item.deathCases}</p>
                </div>
              </div>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
