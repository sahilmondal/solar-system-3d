import SolarSystem from "@/components/SolarSystem";

export default function Home() {
  return (
    <main className="h-[100dvh] w-[100vw]">
      <h1 className="absolute z-50 top-16 left-16 text-3xl">
        Our Solar System
      </h1>
      <SolarSystem />
    </main>
  );
}
