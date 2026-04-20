import { Suspense } from 'react';
import WeatherApp from '@/components/WeatherApp';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeatherApp />
    </Suspense>
  );
}
