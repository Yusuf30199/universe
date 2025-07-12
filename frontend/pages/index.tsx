import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [rides, setRides] = useState([]);

  const getRides = async () => {
    const res = await axios.get(`http://localhost:4000/transportation/rides?lat=${lat}&lng=${lng}`);
    setRides(res.data);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-3xl mb-4 font-bold">UniServe Ulaşım Hizmeti</h1>
      <input
        type="text"
        placeholder="Enlem (lat)"
        value={lat}
        onChange={e => setLat(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Boylam (lng)"
        value={lng}
        onChange={e => setLng(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={getRides}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
Sürüşleri Getir
      </button>

      <ul className="mt-6">
        {rides.map((ride: any) => (
          <li key={ride.id} className="mb-2 border p-2 rounded">
            <strong>{ride.provider}</strong> - Tahmini Varış: {ride.eta} - Ücret: ${ride.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
