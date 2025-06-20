import Container from "@/components/container";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
            <div className="rounded-full border border-white/10 bg-white/33 px-4 py-1 text-sm text-white backdrop-blur-sm">
              20K+ Satisfied Customers
            </div>
            <h1 className="text-center text-5xl leading-[99%] font-medium md:text-7xl">
              Your Partner for Global Logistics
            </h1>
            <p className="text-center text-xl font-medium">
              Streamline your supply chain with a smart solution designed to
              move your business forward.
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
              <span>Request Quote</span>
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
      <Container className="mx-auto flex w-full flex-col gap-6 px-4 py-48 md:w-1/2 md:px-0">
        <h1 className="text-center text-3xl leading-[99%] font-medium md:text-5xl">
          Navigate complex global supply chains with speed, efficiency, and
          trust
        </h1>
        <p className="text-center text-xl font-medium">
          Whether you're shipping across oceans or across borders, our
          experienced logistics professionals are with your cargo every step of
          the way.
        </p>
      </Container>
    </div>
  );
}
