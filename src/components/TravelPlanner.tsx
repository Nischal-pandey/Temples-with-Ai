import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { temples } from '../data/temples';

interface TravelPlan {
  startDate: string;
  duration: string;
  selectedTemples: string[];
}

export function TravelPlanner() {
  const [plan, setPlan] = useState<TravelPlan>({
    startDate: '',
    duration: '',
    selectedTemples: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle travel plan submission
    console.log('Travel plan:', plan);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-semibold mb-4">Plan Your Temple Journey</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Start Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            value={plan.startDate}
            onChange={(e) => setPlan({ ...plan, startDate: e.target.value })}
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Duration (days)
          </label>
          <input
            type="number"
            min="1"
            max="30"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            value={plan.duration}
            onChange={(e) => setPlan({ ...plan, duration: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Select Temples
          </label>
          <div className="space-y-2 max-h-48 overflow-y-auto border rounded-lg p-3">
            {temples.map((temple) => (
              <label key={temple.id} className="flex items-center hover:bg-gray-50 p-2 rounded cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-orange-600 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 mr-2"
                  checked={plan.selectedTemples.includes(temple.name)}
                  onChange={(e) => {
                    const selected = e.target.checked
                      ? [...plan.selectedTemples, temple.name]
                      : plan.selectedTemples.filter((t) => t !== temple.name);
                    setPlan({ ...plan, selectedTemples: selected });
                  }}
                />
                <div>
                  <span className="font-medium">{temple.name}</span>
                  <span className="text-sm text-gray-500 ml-2">({temple.location})</span>
                </div>
              </label>
            ))}
          </div>
          {plan.selectedTemples.length === 0 && (
            <p className="text-sm text-red-500 mt-1">Please select at least one temple</p>
          )}
        </div>

        <button
          type="submit"
          disabled={plan.selectedTemples.length === 0}
          className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-lg hover:opacity-90 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Plan My Journey
        </button>
      </form>
    </div>
  );
}