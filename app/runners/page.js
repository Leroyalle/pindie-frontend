"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "@/app/api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
export default function Runners() {
  const runnersGames = useGetDataByCategory(endpoints.games, "runner");

  return (
    <main className="main-inner">
      {runnersGames ? (
        <CardsListSection id="runner" title="Раннеры" data={runnersGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
