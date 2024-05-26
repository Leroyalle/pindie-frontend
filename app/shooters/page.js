"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "@/app/api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
export default function Shooters() {
  const shootersGames = useGetDataByCategory(endpoints.games, "shooter");

  return (
    <main className="main-inner">
      {shootersGames ? (
        <CardsListSection id="shooters" title="Шутеры" data={shootersGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
