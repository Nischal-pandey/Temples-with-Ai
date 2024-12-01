import React from 'react';
import { Header } from './components/Header';
import { TempleCard } from './components/TempleCard';
import { HotelCard } from './components/HotelCard';
import { Map } from './components/Map';
import { TravelPlanner } from './components/TravelPlanner';
import { temples } from './data/temples';
import { hotels } from './data/hotels';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514222134-b57cbb8ce073")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Discover India's Sacred Temples</h1>
            <p className="text-xl">Embark on a spiritual journey through ancient temples and comfortable stays</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Temple Locations</h2>
        <Map />
      </section>

      {/* Travel Planner Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <TravelPlanner />
          </div>
        </div>
      </section>

      {/* Temples Section */}
      <section id="temples" className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Sacred Temples</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temples.map((temple) => (
            <TempleCard key={temple.id} {...temple} />
          ))}
        </div>
      </section>

      {/* Hotels Section */}
      <section id="hotels" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Nearby Hotels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} {...hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 px-6 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Sacred India Tours. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;