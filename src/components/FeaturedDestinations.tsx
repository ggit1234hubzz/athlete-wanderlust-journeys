
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: "Boulder, Colorado",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    region: "North America",
    interests: ["Running", "Cycling", "Climbing"],
    description: "A paradise for trail runners and cyclists with high-altitude training benefits."
  },
  {
    id: 2,
    name: "Mallorca, Spain",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    region: "Europe",
    interests: ["Cycling", "Swimming", "Triathlon"],
    description: "Perfect cycling roads and crystal clear waters for swim training."
  },
  {
    id: 3,
    name: "Chamonix, France",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    region: "Europe",
    interests: ["Trail Running", "Hiking", "Ultra Running"],
    description: "World-class mountain trails and breathtaking Alpine scenery."
  }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-athletic-navy">Featured Athletic Destinations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Link to="/destinations" key={destination.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-athletic-blue mr-2" />
                    <p className="text-sm text-gray-500">{destination.region}</p>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.interests.map((interest) => (
                      <Badge key={interest} variant="outline" className="bg-athletic-blue/10 border-athletic-blue text-athletic-navy">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
