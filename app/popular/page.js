'use client';
import { useGetDataByCategory } from '../api/api-hooks';
import { endpoints } from '@/app/api/config';
import { Preloader } from '../components/Preloader/Preloader';
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
export default function Popular() {
  const popularGames = useGetDataByCategory(endpoints.games, 'popular');
  return (
    <main className="main-inner">
      {popularGames ? (
        <CardsListSection id="popular" title="Популярные" data={popularGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
