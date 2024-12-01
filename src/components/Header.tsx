import React from 'react';
import { MapPin, Building2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Sacred India Tours</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#temples" className="hover:text-orange-200 transition">Temples</a>
            <a href="#hotels" className="hover:text-orange-200 transition">Hotels</a>
            <a href="#contact" className="hover:text-orange-200 transition">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}