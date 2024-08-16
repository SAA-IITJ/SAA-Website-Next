"use client";

import { useState, useEffect } from "react";
import { ThreeDCardDemo } from "./components/Cards";
import ShuffleHero from "./components/Hero";
import EventList from "./data/eventsData.json";

interface Event {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  startTime: string;
  eventTypeId: string;
  link: string;
  img:string;
}

function Events() {
  const [activeEventType, setActiveEventType] = useState<string>("Flagship Events");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Filter Events by their type
    const events = EventList.filter((event: Event) => event.eventTypeId === activeEventType);
    setFilteredEvents(events);
  }, [activeEventType]);

  const handleClick = (eventType: string) => {
    setActiveEventType(eventType);
  };

  return (
    <>
      <ShuffleHero />
      <div className="flex justify-center mt-44">
        <button
          className={`rounded-l-2xl px-4 py-2 transition-transform duration-200 hover:shadow-black ${activeEventType === 'Flagship Events' ? 'bg-black text-white font-semibold' : 'bg-gray-200 text-black font-semibold'}`}
          onClick={() => handleClick("Flagship Events")}
        >
          Flagship Events
        </button>
        <button
          className={`px-4 py-2 transition-transform duration-200 hover:shadow-black ${activeEventType === 'Ask an Alumnus' ? 'bg-black text-white font-semibold' : 'bg-gray-200 text-black font-semibold'}`}
          onClick={() => handleClick("Ask an Alumnus")}
        >
          Ask an Alumnus
        </button>
        <button
          className={`rounded-r-2xl px-4 py-2 transition-transform duration-200 hover:shadow-black ${activeEventType === 'Alumni Interviews' ? 'bg-black text-white font-semibold' : 'bg-gray-200 text-black font-semibold'}`}
          onClick={() => handleClick("Alumni Interviews")}
        >
          Alumni Interviews
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {filteredEvents.map((event: Event) => (
          <ThreeDCardDemo key={event.id} name={event.name} event={event} />
        ))}
      </div>
    </>
  );
}

export default Events;
