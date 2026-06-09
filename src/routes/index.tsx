import { createFileRoute } from "@tanstack/react-router";
import { BackgroundFX } from "@/components/birthday/BackgroundFX";
import { LoadingScreen } from "@/components/birthday/LoadingScreen";
import { ScrollProgress } from "@/components/birthday/ScrollProgress";
import { Hero } from "@/components/birthday/Hero";
import { MainCharacter } from "@/components/birthday/MainCharacter";
import { MemoryLane } from "@/components/birthday/MemoryLane";
import { VideoMoments } from "@/components/birthday/VideoMoments";
import { ThingsSheLoves } from "@/components/birthday/ThingsSheLoves";
import { Message } from "@/components/birthday/Message";
import { WishJar } from "@/components/birthday/WishJar";
import { FinalSurprise } from "@/components/birthday/FinalSurprise";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative bg-bg text-fg selection:bg-glossy-pink/40 overflow-x-hidden">
      <LoadingScreen />
      <BackgroundFX />
      <ScrollProgress />
      <main className="relative">
        <Hero />
        <MainCharacter />
        <MemoryLane />
        <VideoMoments />
        <ThingsSheLoves />
        <Message />
        <WishJar />
        <FinalSurprise />
      </main>
    </div>
  );
}
