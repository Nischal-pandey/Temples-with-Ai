import React from 'react';
import { MapPin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TempleCardProps {
  name: string;
  location: string;
  description: string;
  imageUrl: string;
}

export function TempleCard({ name, location, description, imageUrl }: TempleCardProps) {
  return (
    <ScrollReveal>
      <div className="temple-card bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <div className="flex items-center text-gray-600 mt-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}