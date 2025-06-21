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
        <h2 className="text-center text-3xl leading-[99%] font-medium md:text-5xl">
          Navigate complex global supply chains with speed, efficiency, and
          trust
        </h2>
        <p className="text-center text-xl font-medium">
          Whether you&apos;re shipping across oceans or across borders, our
          experienced logistics professionals are with your cargo every step of
          the way.
        </p>
      </Container>
      <Container className="mx-auto flex max-w-screen-xl flex-col gap-10 px-4">
        <h2 className="w-full text-3xl leading-[99%] font-medium md:w-1/2 md:text-5xl">
          Seamless cargo management solutions for any load
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-black/25 p-6 shadow transition-all ease-in-out hover:border-sky-300">
            <div className="mb-32 flex flex-col gap-2">
              <div className="grid w-max place-items-center rounded-full bg-sky-200 p-4">
                <Ship />
              </div>
              <h3 className="text-2xl font-medium">Freight Transportation</h3>
            </div>
            <p>
              We coordinate ocean, air, and inland freight transportation with
              trusted global carriers, ensuring your cargo moves safely and on
              schedule.
            </p>
          </div>
          <div className="rounded-lg border border-black/25 p-6 shadow transition-all ease-in-out hover:border-sky-300">
            <div className="mb-32 flex flex-col gap-2">
              <div className="grid w-max place-items-center rounded-full bg-sky-200 p-4">
                <Globe />
              </div>
              <h3 className="text-2xl font-medium">Global Logistics Network</h3>
            </div>
            <p>
              With agents in over 20 countries, we provide local oversight on a
              global scale — from Asia to North America and beyond.
            </p>
          </div>
          <div className="rounded-lg border border-black/25 p-6 shadow transition-all ease-in-out hover:border-sky-300">
            <div className="mb-32 flex flex-col gap-2">
              <div className="grid w-max place-items-center rounded-full bg-sky-200 p-4">
                <Archive />
              </div>
              <h3 className="text-2xl font-medium">Supply Chain Management</h3>
            </div>
            <p>
              We bridge the gap between you and your suppliers. Our Asia-based
              teams give you visibility and control at every link of your supply
              chain.
            </p>
          </div>
          <div className="rounded-lg border border-black/25 p-6 shadow transition-all ease-in-out hover:border-sky-300">
            <div className="mb-32 flex flex-col gap-2">
              <div className="grid w-max place-items-center rounded-full bg-sky-200 p-4">
                <Speech />
              </div>
              <h3 className="text-2xl font-medium">
                Logistics Intelligence & Optimization
              </h3>
            </div>
            <p>
              Markets change fast, and so do we. Inline Freight System
              constantly monitors trade trends to optimize speed, cost, and
              reliability for your business.
            </p>
          </div>
          <div className="rounded-lg border border-black/25 p-6 shadow transition-all ease-in-out hover:border-sky-300">
            <div className="mb-32 flex flex-col gap-2">
              <div className="grid w-max place-items-center rounded-full bg-sky-200 p-4">
                <Computer />
              </div>
              <h3 className="text-2xl font-medium">Information Systems</h3>
            </div>
            <p>
              Real-time tracking, digital documentation, and integrated data
              tools empower smarter, faster decisions because great logistics go
              beyond just moving freight.
            </p>
          </div>
        </div>
      </Container>
      <Container className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
        <div className="flex h-full flex-col">
          <div className="flex flex-grow flex-col gap-6">
            <h2 className="text-center text-3xl leading-[99%] font-medium md:text-left md:text-5xl">
              A commitment to excellence and customer satisfication.
            </h2>
            <p className="text-center text-xl font-medium md:text-left">
              With a strong presence in Asia and a global network of agents in
              20+ countries, Inline Freight System Inc is consistently ranked
              among the top in Transpacific cargo volume. Our proximity to your
              suppliers and deep market intelligence help streamline every part
              of your supply chain.
            </p>
          </div>
          <Button
            className={cn(
              "mx-auto mt-8 md:mx-0 md:mt-0",
              buttonVariants({
                size: "xl",
              }),
            )}
          >
            Request a quote
          </Button>
        </div>
        <div className="relative hidden aspect-square overflow-hidden rounded-xl md:block">
          <Image src="/bg2.png" alt="freight" fill className="object-cover" />
        </div>
      </Container>
      <div className="relative w-full md:h-screen">
        <div className="absolute top-0 left-0 -z-10 h-full w-full">
          <Image src="/bg3.png" alt="freight" fill className="object-cover" />
          <div className="absolute top-0 left-0 h-full w-full bg-black/20 object-cover" />
        </div>
        <div className="relative z-10 flex h-full w-full flex-col p-6">
          <div className="flex h-full flex-grow flex-col">
            <h2 className="mb-6 text-3xl leading-[99%] font-medium text-[#f7f7f7] md:mb-0 md:text-5xl">
              Our Expertise for Your Comfort
            </h2>
          </div>
          <div className="flex flex-col-reverse items-start justify-between gap-4 md:flex-row md:items-end">
            <Button
              className={cn(
                "flex items-center gap-2",
                buttonVariants({
                  variant: "glass",
                  size: "xl",
                }),
              )}
            >
              <span>Learn More</span>
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
            <p className="max-w-lg text-xl font-medium text-[#f7f7f7]">
              Founded in 2009, Inline Freight System Inc set out with a clear
              mission: to deliver world-class logistics services with unmatched
              customer care.
              <br />
              <br />
              Today, we serve clients across North America, Europe, Asia, South
              America, Australia, and the Middle East. Our extensive agent
              network and deep expertise in Transpacific Trade position us as
              one of the leading logistics providers in the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
