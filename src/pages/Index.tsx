
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <main>
        <FeaturedDestinations />
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-athletic-navy">Travel For Athletes</h2>
              <p className="text-lg text-gray-700 mb-4">
                AthleteTravel is your gateway to discovering destinations that cater specifically to your 
                athletic pursuits. Whether you're a runner seeking challenging trails, 
                a cyclist looking for scenic routes, or a triathlete preparing for your next event, 
                we have carefully curated locations that will enhance your training and experience.
              </p>
              <p className="text-lg text-gray-700">
                Each destination comes with detailed athletic-focused travel tips, sample 
                itineraries designed for athletes, and information about local training 
                facilities and communities.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden h-80">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                alt="Athlete swimming in ocean"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
