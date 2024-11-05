import { Features } from "./_components/features";
import { Slider } from "./_components/Hero/slider";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center container pt-50 overflow-hidden">
      <Slider />
      <Features />
    </div>
  );
}
