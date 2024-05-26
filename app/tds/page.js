"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "@/app/api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
export default function () {
  const tdsGames = useGetDataByCategory(endpoints.games, "TDS");

  return (
    <main className="main-inner">
      {tdsGames ? (
        <CardsListSection id="tds" title="TDS" data={tdsGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
