
import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-athletic-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Compass className="h-6 w-6 text-athletic-blue" />
              <span className="text-xl font-bold text-white">AthleteTravel</span>
            </Link>
            <p className="text-gray-300">
              Discover the perfect destinations for your next athletic adventure.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-athletic-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-athletic-blue transition-colors">
                  Destinations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Email: info@athletetravel.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AthleteTravel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
