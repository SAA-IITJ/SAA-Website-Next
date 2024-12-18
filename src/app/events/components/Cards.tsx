"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";
import {useRouter} from "next/navigation";

interface Event {
  description: string;
  startDate: string;
  endDate: string;
  startTime: string;
  img: string;
  link: string;
}

interface ThreeDCardDemoProps {
  name: string;
  event: Event;
  link: string;
}

export function ThreeDCardDemo({ name, event , link }: ThreeDCardDemoProps) {
  // Append '.html' to the event.link if it doesn't already end with '.html'
  // const linkWithHtml = event.link.endsWith('.html') ? event.link : `${event.link}.html`;
  const linkWithHtml = `${link}.html`;

  const router = useRouter()
  

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-neutral-300 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-slate-900 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {event.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={event.img}
            height={1000}
            width={1000}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href= {linkWithHtml}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
          >
            <p>View Event</p>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            onClick={() => {router.push(linkWithHtml)}}
          >
            More Info
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
