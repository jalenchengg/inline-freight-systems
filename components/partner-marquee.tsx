import Image from "next/image";
import { Marquee } from "./ui/marquee";
import { partners } from "@/lib/partners";

export function PartnerMarquee() {
  return (
    <div className="bg-black/30 py-12">
      <div className="mx-auto px-4">
        <Marquee className="py-4" pauseOnHover={true} repeat={3}>
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-8 flex items-center justify-center rounded-lg p-4 transition-transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              aria-label={`Visit ${partner.name} website`}
            >
              <div className="relative h-16 w-32">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain grayscale filter transition-all duration-300 hover:grayscale-0"
                  sizes="(max-width: 768px) 128px, 128px"
                />
              </div>
            </a>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
