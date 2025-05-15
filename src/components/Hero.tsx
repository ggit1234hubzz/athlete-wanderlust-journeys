
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-[60vh]" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl">
          Athletic Adventures For Every Traveler
        </h1>
        <p className="text-xl text-white mb-8 max-w-xl">
          Discover destinations perfectly suited for your training needs and athletic pursuits.
        </p>
        <Link to="/destinations">
          <Button size="lg" className="bg-athletic-blue hover:bg-athletic-navy text-white">
            <MapPin className="mr-2 h-5 w-5" /> Explore Destinations
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
