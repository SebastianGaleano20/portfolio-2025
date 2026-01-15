import Image from "next/image";
import { getHomeInfo } from "../lib/get-home-info";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const Hero = async () => {
  const { Title, image, description } = await getHomeInfo();

  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="flex max-w-4xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {Title}
        </h1>
        <div className="flex flex-col gap-4">
          <BlocksRenderer content={description} />
        </div>

        {image && (
          <div className="relative h-64 w-64 overflow-hidden rounded-full">
            <Image
              src={image}
              alt="Hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
};
