
import React from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter } from "lucide-react";

export interface FilterOptions {
  region: string;
  interests: string[];
}

interface DestinationFilterProps {
  regions: string[];
  availableInterests: string[];
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const DestinationFilter: React.FC<DestinationFilterProps> = ({
  regions,
  availableInterests,
  filters,
  onFilterChange
}) => {
  const handleRegionChange = (region: string) => {
    onFilterChange({
      ...filters,
      region
    });
  };

  const handleInterestChange = (interest: string) => {
    const updatedInterests = filters.interests.includes(interest)
      ? filters.interests.filter(i => i !== interest)
      : [...filters.interests, interest];
    
    onFilterChange({
      ...filters,
      interests: updatedInterests
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-athletic-blue" />
        <h3 className="text-lg font-semibold">Filters</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <Label htmlFor="region" className="text-sm font-medium mb-2 block">Region</Label>
          <Select value={filters.region} onValueChange={handleRegionChange}>
            <SelectTrigger id="region" className="w-full">
              <SelectValue placeholder="All Regions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Regions</SelectItem>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>{region}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Separator />
        
        <div>
          <Label className="text-sm font-medium mb-2 block">Interests</Label>
          <div className="space-y-2 mt-2">
            {availableInterests.map((interest) => (
              <div key={interest} className="flex items-center space-x-2">
                <Checkbox 
                  id={`interest-${interest}`} 
                  checked={filters.interests.includes(interest)}
                  onCheckedChange={() => handleInterestChange(interest)}
                />
                <Label htmlFor={`interest-${interest}`} className="text-sm cursor-pointer">
                  {interest}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationFilter;
