import { Chef } from "./_components/chef";
import { Delivery } from "./_components/delivery/delivery";
import { Features } from "./_components/features";
import { Slider } from "./_components/Hero/slider";
import { PopularBurgers } from "./_components/popular-burgers";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center container pt-50 overflow-hidden bg-cream">
      <Slider />
      <Features />
      <PopularBurgers />
      <Delivery />
      <Chef />
    </div>
  );
}
