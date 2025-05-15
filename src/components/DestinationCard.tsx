
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Route, Utensils, Hotel } from "lucide-react";

export interface Destination {
  id: number;
  name: string;
  image: string;
  region: string;
  country: string;
  interests: string[];
  description: string;
  travelTips: string[];
  itineraries: {
    title: string;
    days: string[];
  }[];
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-56 overflow-hidden">
        <img 
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 text-athletic-blue mr-2" />
          <p className="text-sm text-gray-500">{destination.region} | {destination.country}</p>
        </div>
        <h3 className="text-xl font-semibold">{destination.name}</h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {destination.interests.map((interest) => (
            <Badge key={interest} variant="outline" className="bg-athletic-blue/10 border-athletic-blue text-athletic-navy">
              {interest}
            </Badge>
          ))}
        </div>
        
        <Accordion type="single" collapsible className="border-t pt-4">
          <AccordionItem value="tips">
            <AccordionTrigger className="flex gap-2">
              <div className="flex items-center">
                <Hotel className="h-4 w-4 text-athletic-green mr-2" />
                <span>Travel Tips</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                {destination.travelTips.map((tip, index) => (
                  <li key={index} className="text-gray-600">{tip}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          {destination.itineraries.map((itinerary, idx) => (
            <AccordionItem key={idx} value={`itinerary-${idx}`}>
              <AccordionTrigger className="flex gap-2">
                <div className="flex items-center">
                  <Route className="h-4 w-4 text-athletic-orange mr-2" />
                  <span>{itinerary.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal pl-5 space-y-1">
                  {itinerary.days.map((day, index) => (
                    <li key={index} className="text-gray-600">{day}</li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
