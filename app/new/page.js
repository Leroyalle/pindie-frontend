"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "@/app/api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className="main-inner">
      {newGames ? (
        <CardsListSection id="new" title="Новинки" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
