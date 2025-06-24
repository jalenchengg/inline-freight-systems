import AgentDirectory from "@/components/agent_directory";
import Container from "@/components/container";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Archive, Computer, Globe, Ship, Speech } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="h-screen w-full">
        <div className="absolute top-0 left-0 -z-10 h-full w-full">
          <Image
            priority
            src="/bg.png"
            alt="logo"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black/20 object-cover" />
        </div>
        <div className="relative z-10 grid h-full w-full place-items-center">
          <div className="flex w-full flex-col items-center gap-6 px-4 text-[#f7f7f7] md:w-1/3 md:px-0">
            <h1 className="text-center text-5xl leading-[99%] font-medium md:text-7xl">
              A Directory for our Agents
            </h1>
            <p className="text-center text-xl font-medium">
              Our extensive agent network and deep expertise in Transpacific
              Trade position us as one of the leading logistics providers in the
              industry.
            </p>
            <Button
              className={cn(
                "flex gap-2",
                buttonVariants({
                  variant: "glass",
                  size: "xl",
                }),
              )}
            >
              <span>View Locations</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 12.59L11.09 2H4.5V0H14.5V10H12.5V3.41L1.91 14L0.5 12.59Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <AgentDirectory />
    </div>
  );
}
