import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface HotelCardProps {
  name: string;
  location: string;
  rating: number;
  price: string;
  imageUrl: string;
}

export function HotelCard({ name, location, rating, price, imageUrl }: HotelCardProps) {
  return (
    <ScrollReveal>
      <div className="temple-card bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <div className="flex items-center text-gray-600 mt-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
            ))}
          </div>
          <p className="mt-2 text-gray-800 font-semibold">{price}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}