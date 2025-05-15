
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DestinationCard, { Destination } from '@/components/DestinationCard';
import DestinationFilter, { FilterOptions } from '@/components/DestinationFilter';
import { MapPin } from 'lucide-react';

const destinationsData: Destination[] = [
  {
    id: 1,
    name: "Boulder, Colorado",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    region: "North America",
    country: "USA",
    interests: ["Running", "Cycling", "Climbing"],
    description: "A paradise for trail runners and cyclists with high-altitude training benefits.",
    travelTips: [
      "Visit during spring or fall for the most pleasant training conditions",
      "Acclimate for 2-3 days before intense training at altitude",
      "Boulder Creek Path offers a flat running option for recovery days",
      "The local running stores organize group runs several times per week"
    ],
    itineraries: [
      {
        title: "Trail Runner's Weekend",
        days: [
          "Day 1: Arrive and easy 3-mile shake-out run at Boulder Creek Path",
          "Day 2: Morning run at Chautauqua Park, afternoon recovery at hot springs",
          "Day 3: Long run at Walker Ranch Loop, followed by brunch at Alpine Modern"
        ]
      },
      {
        title: "Cycling Getaway",
        days: [
          "Day 1: Bike rental and easy spin around Boulder Reservoir",
          "Day 2: Challenge ride up Flagstaff Mountain",
          "Day 3: Scenic ride through Boulder Canyon to Nederland"
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Mallorca, Spain",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    region: "Europe",
    country: "Spain",
    interests: ["Cycling", "Swimming", "Triathlon"],
    description: "Perfect cycling roads and crystal clear waters for swim training.",
    travelTips: [
      "Spring and fall offer the best cycling conditions with fewer tourists",
      "Bring both mountain and road bikes to experience the variety of terrain",
      "Sa Calobra is a must-ride for serious cyclists",
      "Open water swimming is best in the protected bays of Port de Pollença"
    ],
    itineraries: [
      {
        title: "Cyclist's Paradise Week",
        days: [
          "Day 1: Arrival and bike fitting, easy coastal spin",
          "Day 2: Cap Formentor lighthouse out-and-back ride",
          "Day 3: Sa Calobra climb day",
          "Day 4: Recovery day with beach swimming",
          "Day 5: Tramuntana mountain range exploration"
        ]
      },
      {
        title: "Triathlon Training Camp",
        days: [
          "Day 1: Morning swim in Port de Pollença bay, afternoon bike fitting",
          "Day 2: Brick training with coastal ride and transition run",
          "Day 3: Long ride through central Mallorca, evening recovery swim",
          "Day 4: Trail running in the Tramuntana mountains, technique swim session",
          "Day 5: Race simulation day with all three disciplines"
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Chamonix, France",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    region: "Europe",
    country: "France",
    interests: ["Trail Running", "Hiking", "Ultra Running"],
    description: "World-class mountain trails and breathtaking Alpine scenery.",
    travelTips: [
      "Summer months (June-September) are ideal for trail running",
      "Purchase a Mont Blanc Multipass for lift access to higher trails",
      "Always check weather forecasts before heading into the mountains",
      "Trail running shoes with good grip are essential for the technical terrain"
    ],
    itineraries: [
      {
        title: "UTMB Trail Preview",
        days: [
          "Day 1: Arrival and easy valley floor run",
          "Day 2: Grand Balcon Nord route with lift assistance",
          "Day 3: Recovery day with gentle hiking and spa",
          "Day 4: Courmayeur to Champex section of UTMB",
          "Day 5: Technical downhill practice on La Flégère"
        ]
      },
      {
        title: "Vertical Kilometer Training",
        days: [
          "Day 1: Technique work on moderate trails",
          "Day 2: Vertical Kilometer route practice with timing",
          "Day 3: Recovery hike with scenic photography",
          "Day 4: Alternative VK route with steeper sections",
          "Day 5: Time trial attempt on official VK course"
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Kona, Hawaii",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    region: "North America",
    country: "USA",
    interests: ["Triathlon", "Swimming", "Running"],
    description: "Train on the legendary Ironman World Championship course.",
    travelTips: [
      "Heat acclimation is crucial - arrive at least 10 days before any serious training",
      "The Energy Lab section of the run course is best attempted early morning",
      "Hydrate more than usual due to the humidity and heat",
      "Swimming at Kailua Bay early morning offers the calmest conditions"
    ],
    itineraries: [
      {
        title: "Ironman Course Reconnaissance",
        days: [
          "Day 1: Arrival and recovery swim at Kailua Bay",
          "Day 2: Queen K Highway ride (first 30 miles)",
          "Day 3: Hawi descent and climb practice",
          "Day 4: Energy Lab run course section at sunrise",
          "Day 5: Open water swim race simulation at Dig Me Beach"
        ]
      },
      {
        title: "Recovery Week in Paradise",
        days: [
          "Day 1: Gentle ocean swimming and beach relaxation",
          "Day 2: Easy spin to coffee plantations",
          "Day 3: Snorkeling and active recovery",
          "Day 4: Sunrise beach run and afternoon massage",
          "Day 5: Cultural day with light hiking to waterfalls"
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Queenstown, New Zealand",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    region: "Oceania",
    country: "New Zealand",
    interests: ["Trail Running", "Mountain Biking", "Hiking"],
    description: "A mountain sports paradise with endless trails and stunning views.",
    travelTips: [
      "Summer (December-February) offers the best conditions for trail sports",
      "The Queenstown Trail network provides options for all abilities",
      "Local bike shops offer quality rentals; no need to bring your own",
      "Prepare for four seasons in one day - layer your clothing"
    ],
    itineraries: [
      {
        title: "Mountain Biking Adventure",
        days: [
          "Day 1: Bike fitting and Queenstown Bike Park introduction",
          "Day 2: Full day at Cardrona Bike Park with coaching",
          "Day 3: Recovery ride on flat lakeside trails",
          "Day 4: Coronet Peak descents with shuttle service",
          "Day 5: Epic Rude Rock to Skippers adventure ride"
        ]
      },
      {
        title: "Trail Running Exploration",
        days: [
          "Day 1: Easy lakeside running to acclimate",
          "Day 2: Ben Lomond Track with summit attempt",
          "Day 3: Recovery day with gentle hiking and hot pools",
          "Day 4: Technical Moonlight Track traverse",
          "Day 5: Routeburn Track day run (partial course)"
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Cape Town, South Africa",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    region: "Africa",
    country: "South Africa",
    interests: ["Running", "Cycling", "Swimming"],
    description: "Diverse training terrain from mountains to coastline in one location.",
    travelTips: [
      "November to March offers the best weather for outdoor training",
      "Train early morning to avoid afternoon wind on Table Mountain",
      "Join the local Park Run on Saturday mornings for community running",
      "Sea swimming is best at Clifton beaches with less current"
    ],
    itineraries: [
      {
        title: "Runner's Cape Tour",
        days: [
          "Day 1: Easy promenade run along Sea Point",
          "Day 2: Table Mountain trails via Constantia Nek",
          "Day 3: Recovery beach run and swimming at Camps Bay",
          "Day 4: Lion's Head loop trail run at sunrise",
          "Day 5: Chapman's Peak coastal route with support"
        ]
      },
      {
        title: "Mixed Sport Adventure",
        days: [
          "Day 1: Sea Point swim and promenade run brick session",
          "Day 2: Cape Peninsula cycling tour",
          "Day 3: Trail running on Table Mountain via Platteklip Gorge",
          "Day 4: Recovery ocean swim and yoga session",
          "Day 5: Franschhoek Pass cycling with winery recovery"
        ]
      }
    ]
  }
];

const Destinations = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    region: '',
    interests: []
  });

  // Extract unique regions and interests for filter options
  const regions = useMemo(() => {
    return Array.from(new Set(destinationsData.map(d => d.region)));
  }, []);

  const allInterests = useMemo(() => {
    const interestsSet = new Set<string>();
    destinationsData.forEach(destination => {
      destination.interests.forEach(interest => {
        interestsSet.add(interest);
      });
    });
    return Array.from(interestsSet);
  }, []);

  // Filter destinations based on selected filters
  const filteredDestinations = useMemo(() => {
    return destinationsData.filter(destination => {
      // Filter by region
      if (filters.region && destination.region !== filters.region) {
        return false;
      }
      
      // Filter by interests
      if (filters.interests.length > 0) {
        const hasMatchingInterest = destination.interests.some(interest => 
          filters.interests.includes(interest)
        );
        if (!hasMatchingInterest) {
          return false;
        }
      }
      
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-athletic-blue/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-2">
            <MapPin className="h-5 w-5 text-athletic-blue mr-2" />
            <h1 className="text-3xl font-bold text-athletic-navy">Athletic Destinations</h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            Discover perfect destinations for your athletic pursuits. Filter by region or 
            activity to find your next training ground or active vacation spot.
          </p>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <DestinationFilter 
                regions={regions}
                availableInterests={allInterests}
                filters={filters}
                onFilterChange={setFilters}
              />
            </div>
          </aside>
          
          <div className="lg:col-span-3">
            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredDestinations.map(destination => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-medium mb-2">No destinations found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters to see more results.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Destinations;
