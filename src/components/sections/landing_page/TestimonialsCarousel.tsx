"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "./data/testimonials";

export default function TestimonialsCarousel() {
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const autoplay = Autoplay({
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      duration: 10,
      skipSnaps: false,
      containScroll: false,
    },
    [autoplay],
  );

  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelected(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative mt-7">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {testimonials.map((item, index) => {
            const active = index === selected;

            return (
              <div
                key={item.id}
                className="min-w-0 flex-[0_0_110%] px-3 md:flex-[0_0_70%] lg:flex-[0_0_55%] xl:flex-[0_0_28%]"
              >
                <motion.div
                  animate={{
                    scale: active ? 1 : 0.96,
                    opacity: active ? 1 : 0.55,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                  }}
                  className="h-full py-4"
                >
                  <Card className="bg-background h-full overflow-hidden rounded-xl border-black/[0.05] shadow-[0_8px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500">
                    <CardContent className="p-8 pb-5">
                      <div className="flex items-center justify-between">
                        <Quote className="h-10 w-10 text-orange-500" />

                        <div className="flex gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-orange-500 text-orange-500"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-muted-foreground mt-6 line-clamp-6 text-lg leading-relaxed">
                        "{item.review}"
                      </p>

                      <div className="mt-6">
                        <h3 className="text-lg font-semibold">{item.name}</h3>

                        <p className="text-sm text-orange-500">{item.role}</p>

                        <p className="text-muted-foreground text-sm">
                          {item.organization}
                        </p>
                      </div>

                      <div className="mt-6 border-t pt-5">
                        <div className="inline-flex items-center gap-2 rounded-full bg-green-200 dark:bg-green-500/10 px-3 py-1 text-green-800 dark:text-green-300">
                          <BriefcaseBusiness className="h-4 w-4" />
                          <span className="text-xs font-medium">
                            {item.outcome}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className="group flex items-center justify-center"
          >
            <motion.div
              animate={{
                width: selected === index ? 32 : 8,
                opacity: selected === index ? 1 : 0.4,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className={`h-2 rounded-full ${
                selected === index ? "bg-orange-500" : "bg-muted-foreground/30"
              } `}
            />
          </button>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-3">
        <Button
          size="icon"
          variant="outline"
          onClick={() => emblaApi?.scrollPrev()}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={() => emblaApi?.scrollNext()}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
