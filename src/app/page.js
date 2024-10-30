import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Bubble from "@/components/Bubble/Bubble";
import { IoIosArrowForward } from "react-icons/io";
import link from "@/lib/link";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col container">
      <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-col items-center md:items-start gap-1 md:gap-4 md:w-[500px] order-last md:order-1">
          <p className="font-cera font-bold text-md md:text-xl leading-8 tracking-wide lg:text-3xl">
            Hey there, @elvxk here.
          </p>
          <p className="font-cera font-bold text-center md:text-start text-xs tracking-wide lg:text-lg">
            Find all essential links in one place! Click to access our website,
          </p>
          <div className="hidden md:block">
            <Bubble />
          </div>
        </div>
        <figure className="relative mx-auto order-1 md:order-last">
          <img
            src="/elvxk.webp"
            className="self-center max-h-[100px] lg:max-h-[150px]  hover:-rotate-12"
          />
        </figure>
      </div>
      <div className="flex gap-4 lg:gap-6 flex-col mt-4 md:mt-10 w-full justify-center">
        {link.map((data, i) => {
          return (
            <Link
              key={i}
              href={data.url}
              className={buttonVariants({ size: "lg" })}
              target="_blank"
            >
              <p className="flex items-center justify-between w-full gap-2 text-lg">
                <span>{data.icon}</span>
                <span>{data.name}</span>
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
            </Link>
          );
        })}
        <Card>
          <iframe
            className="m-4"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZbJY5nDxyRg?si=amJGAQonwE4cNEPJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Card>
      </div>
    </div>
  );
}
