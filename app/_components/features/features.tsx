import { Card } from "./card";

export const Features: React.FC = () => {
  return (
    <div className="pt-5 pb-3 w-full flex flex-col justify-center items-center gap-4">
      {/* Heading */}
      <h1 className="heading mt-6 text-neutral-content">
        بهتــرین طعـم برگر را با ما تجربه کنید
      </h1>
      {/* cards */}
      <div className="w-[90%] md:w-[80%] mb-5 mx-auto flex items-center gap-12">
        <Card />
      </div>
    </div>
  );
};
