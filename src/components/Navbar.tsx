
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Compass, MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Compass className="h-6 w-6 text-athletic-blue" />
          <span className="text-xl font-bold text-athletic-navy">AthleteTravel</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-athletic-slate hover:text-athletic-blue transition-colors">
            Home
          </Link>
          <Link to="/destinations" className="text-athletic-slate hover:text-athletic-blue transition-colors">
            Destinations
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/destinations">
            <Button className="bg-athletic-blue hover:bg-athletic-navy text-white">
              <MapPin className="mr-2 h-4 w-4" /> Find Destinations
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
