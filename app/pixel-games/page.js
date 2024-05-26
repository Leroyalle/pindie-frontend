'use client';
import { useGetDataByCategory } from '../api/api-hooks';
import { endpoints } from '@/app/api/config';
import { Preloader } from '../components/Preloader/Preloader';
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
export default function Pixel() {
  const pixelGames = useGetDataByCategory(endpoints.games, 'pixel');

  return (
    <main className="main-inner">
      {pixelGames ? (
        <CardsListSection id="pixel" title="Пиксельные" data={pixelGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
