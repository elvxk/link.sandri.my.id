import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Bubble from "@/components/Bubble/Bubble";

export default function Home() {
  return (
    <div className="flex flex-col container">
      <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-col items-center md:items-start gap-3 lg:gap-4 md:w-[500px] order-last md:order-1">
          <p className="font-cera font-bold text-xl leading-8 tracking-wide lg:text-3xl">
            Hey there, @elvxk here.
          </p>
          <p className="font-cera font-bold text-center md:text-start text-sm tracking-wide lg:text-lg">
            Find all essential links in one place! Click to access our website,
          </p>
          <Bubble />
        </div>
        <figure className="relative mx-auto order-1 md:order-last">
          <img
            src="/elvxk.webp"
            className="self-center max-h-[150px]  hover:-rotate-12"
          />
        </figure>
      </div>
      <div className="flex gap-4 lg:gap-6 flex-col mt-10 w-full justify-center">
        <Link
          href={"https://sandri.my.id"}
          className={buttonVariants({ size: "lg" })}
          target="_blank"
        >
          Portfolio Website
        </Link>
        <Link
          href={"https://youtube.com/@elvxk"}
          className={buttonVariants({ size: "lg" })}
          target="_blank"
        >
          Youtube
        </Link>
      </div>
    </div>
  );
}
