"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SlidersHorizontal } from "lucide-react";

export default function Home() {
  const [minBedroom, setMinBedroom] = useState("");
  const [maxBedroom, setMaxBedroom] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat text-white px-4 -pt-14 sm:pt-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/background.jpeg')",
      }}
    >
      <div className="mt-34 text-center w-full max-w-4xl">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Minimum effort, maximum convenience
        </h1>
        <p className="mt-3 text-base md:text-lg font-normal text-gray-100">
          A new way of renting in Dhaka
        </p>

        {/* Search Box with Floating Filter Button */}
        <div className="relative mt-8 bg-transparent p-2 rounded-2xl w-full max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl w-full max-w-4xl mx-auto z-10">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full px-3 py-3">
              {/* Search Input */}
              <div className="flex items-center w-full sm:flex-1 gap-2 bg-gray-100 rounded-xl border border-gray-100 px-4 py-3">
                <FiSearch className="text-gray-900 text-lg" />
                <input
                  type="text"
                  placeholder="Search by Area, Popular Landmarks, or Nearby Location"
                  className="flex-1 outline-none bg-transparent text-gray-800 text-sm placeholder:text-sm"
                />
              </div>

              {/* Buttons Wrapper */}
              <div className="flex w-full gap-3 sm:flex-0 sm:w-auto">
                {/* Mobile-only Filters Button */}
                <button 
                  className="flex items-center gap-1 text-red-400 hover:text-red-600 font-medium text-sm bg-white px-4 py-3 rounded-xl transition sm:hidden w-full"
                  onClick={() => setIsFilterVisible(true)}  // Add this line
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>

                {/* Search Button */}
                <button className="bg-red-400 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-xl transition duration-200 w-[250px] sm:w-auto">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Floating Filters Button for Desktop */}
          <div className={`relative -top-9 left-0 z-5 hidden sm:block ${isFilterVisible ? 'invisible' : 'visible'}`}>
            <button
              className="flex items-center gap-1 text-red-400 hover:text-red-600 font-medium text-sm bg-white px-4 py-2 pt-10 rounded-xl transition opacity-100 cursor-pointer"
              onClick={() => setIsFilterVisible(true)}
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
          </div>

          {/* Desktop Filter Box */}
          <div className={`relative z-0 -top-30 hidden sm:block mt-6 bg-white p-4 rounded-2xl shadow-md w-full max-w-4xl mx-auto ${isFilterVisible ? 'visible' : 'invisible'}`}>
            <div className="flex justify-between items-start flex-wrap gap-4 pt-5">
              {/* Top Row: Reset all + Close Button */}
              <div className="flex justify-between items-center mb-4 w-full">
                <button 
                  className="text-red-400 hover:text-red-600 font-medium text-sm"
                  onClick={() => {
                    setMinBedroom("");
                    setMaxBedroom("");
                    setPropertyType("");
                    // Reset price range inputs
                    const minPriceInput = document.querySelector('input[placeholder="Min"]') as HTMLInputElement;
                    const maxPriceInput = document.querySelector('input[placeholder="Max"]') as HTMLInputElement;
                    if (minPriceInput) minPriceInput.value = '';
                    if (maxPriceInput) maxPriceInput.value = '';
                    // Reset all checkboxes
                    const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
                    checkboxes.forEach(checkbox => checkbox.checked = false);
                  }}
                >
                  Reset all
                </button>
                <button 
                  className="text-gray-900 hover:text-gray-800 text-xl font-normal"
                  onClick={() => {
                    setIsFilterVisible(false);
                    // Reset all state values
                    setMinBedroom("");
                    setMaxBedroom("");
                    setPropertyType("");
                    // Reset price range inputs
                    const minPriceInput = document.querySelector('input[placeholder="Min"]') as HTMLInputElement;
                    const maxPriceInput = document.querySelector('input[placeholder="Max"]') as HTMLInputElement;
                    if (minPriceInput) minPriceInput.value = '';
                    if (maxPriceInput) maxPriceInput.value = '';
                    // Reset all checkboxes
                    const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
                    checkboxes.forEach(checkbox => checkbox.checked = false);
                  }}
                >
                  &times;
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 -mt-2">
              {/* Bedrooms */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-left">Bedrooms</h3>
                <div className="flex gap-2">
                  <div className="relative w-full">
                    <select
                      value={minBedroom}
                      onChange={(e) => setMinBedroom(e.target.value)}
                      className={`w-full appearance-none rounded-xl border border-gray-200 p-2 text-sm ${
                        minBedroom === "" ? "text-gray-400" : "text-gray-700"
                      } pr-8`}
                    >
                      <option value="" disabled className="text-gray-400">
                        Min Bedroom
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                      <svg className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative w-full">
                    <select
                      value={maxBedroom}
                      onChange={(e) => setMaxBedroom(e.target.value)}
                      className={`w-full appearance-none rounded-xl border border-gray-200 p-2 text-sm ${
                        maxBedroom === "" ? "text-gray-400" : "text-gray-700"
                      } pr-8`}
                    >
                      <option value="" disabled className="text-gray-400">
                        Max Bedroom
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                      <svg className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-left">Price range</h3>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full rounded-xl border border-gray-200 p-2 text-sm text-gray-700 placeholder:text-sm placeholder:text-gray-400"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full rounded-xl border border-gray-200 p-2 text-sm text-gray-700 placeholder:text-sm placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-left">Property Type</h3>
                <div className="relative">
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className={`w-full appearance-none rounded-xl border border-gray-200 p-2 text-sm ${
                      propertyType === "" ? "text-gray-400" : "text-gray-700"
                    } pr-8`}
                  >
                    <option value="" disabled className="text-gray-400">
                      Any Type
                    </option>
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <svg className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="mt-5">
              <h3 className="font-semibold text-gray-800 mb-2 text-left">Options</h3>
              <div className="flex flex-wrap gap-10">
                {["Furnished", "Unfurnished", "Swimming Pool", "Gym", "Pet Friendly"].map(
                  (option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <input type="checkbox" className="accent-red-400 " />
                      {option}
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-end gap-4">
              <button 
                className="text-gray-900 hover:text-gray-800 font-medium text-sm"
                onClick={() => {
                  setIsFilterVisible(false);
                  // Reset all state values
                  setMinBedroom("");
                  setMaxBedroom("");
                  setPropertyType("");
                  // Reset price range inputs - Update selectors to specifically target desktop view
                  const desktopFilterBox = document.querySelector('.hidden.sm\\:block.mt-6');
                  if (desktopFilterBox) {
                    const minPriceInput = desktopFilterBox.querySelector('input[placeholder="Min"]') as HTMLInputElement;
                    const maxPriceInput = desktopFilterBox.querySelector('input[placeholder="Max"]') as HTMLInputElement;
                    if (minPriceInput) minPriceInput.value = '';
                    if (maxPriceInput) maxPriceInput.value = '';
                    // Reset all checkboxes
                    const desktopCheckboxes = desktopFilterBox.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
                    desktopCheckboxes.forEach(checkbox => checkbox.checked = false);
                  }
                }}
              >
                Cancel
              </button>
              <button className="border bg-white-400 hover:bg-red-500 text-red-400 hover:text-white border-red-400 font-semibold px-6 py-2 rounded-xl text-sm">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Filter Overlay */}
        <div 
          className={`
            fixed inset-0 bg-black bg-opacity-50 z-50 sm:hidden
            ${isFilterVisible ? 'block' : 'hidden'}
          `}
        >
          <div className="fixed inset-x-4 bottom-4 top-20 bg-white rounded-2xl overflow-y-auto">
            <div className="p-4">
              {/* Top Row: Reset all + Close Button */}
              <div className="flex justify-between items-center mb-4">
                <button 
                  className="text-red-400 hover:text-red-600 font-medium text-sm"
                  onClick={() => {
                    setMinBedroom("");
                    setMaxBedroom("");
                    setPropertyType("");
                    // Reset price range inputs - Update selectors to target mobile view inputs
                    const mobileFilterOverlay = document.querySelector('.fixed.inset-x-4');
                    if (mobileFilterOverlay) {
                      const minPriceInput = mobileFilterOverlay.querySelector('input[placeholder="Min"]') as HTMLInputElement;
                      const maxPriceInput = mobileFilterOverlay.querySelector('input[placeholder="Max"]') as HTMLInputElement;
                      if (minPriceInput) minPriceInput.value = '';
                      if (maxPriceInput) maxPriceInput.value = '';
                    }
                    // Reset all checkboxes within mobile view
                    const mobileCheckboxes = mobileFilterOverlay?.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
                    mobileCheckboxes?.forEach(checkbox => checkbox.checked = false);
                  }}
                >
                  Reset all
                </button>
                <button 
                  className="text-gray-900 hover:text-gray-800 text-xl font-normal"
                  onClick={() => {
                    setIsFilterVisible(false);
                    // Reset all state values
                    setMinBedroom("");
                    setMaxBedroom("");
                    setPropertyType("");
                    // Reset price range inputs - Update selectors to target mobile view inputs
                    const mobileFilterOverlay = document.querySelector('.fixed.inset-x-4');
                    if (mobileFilterOverlay) {
                      const minPriceInput = mobileFilterOverlay.querySelector('input[placeholder="Min"]') as HTMLInputElement;
                      const maxPriceInput = mobileFilterOverlay.querySelector('input[placeholder="Max"]') as HTMLInputElement;
                      if (minPriceInput) minPriceInput.value = '';
                      if (maxPriceInput) maxPriceInput.value = '';
                      // Reset all checkboxes within mobile view
                      const mobileCheckboxes = mobileFilterOverlay.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
                      mobileCheckboxes.forEach(checkbox => checkbox.checked = false);
                    }
                  }}
                >
                  &times;
                </button>
              </div>

              {/* Copy the existing filter content here */}
              <div className="space-y-6">
                {/* Bedrooms */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">Bedrooms</h3>
                  <div className="flex gap-2">
                    <div className="relative w-full">
                      <select
                        value={minBedroom}
                        onChange={(e) => setMinBedroom(e.target.value)}
                        className={`w-full appearance-none rounded-xl border border-gray-200 p-2 text-sm ${
                          minBedroom === "" ? "text-gray-400" : "text-gray-700"
                        } pr-8`}
                      >
                        <option value="" disabled className="text-gray-400">
                          Min Bedroom
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                        <svg className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <div className="relative w-full">
                      <select
                        value={maxBedroom}
                        onChange={(e) => setMaxBedroom(e.target.value)}
                        className={`w-full appearance-none rounded-xl border border-gray-200 p-2 text-sm ${
                          maxBedroom === "" ? "text-gray-400" : "text-gray-700"
                        } pr-8`}
                      >
                        <option value="" disabled className="text-gray-400">
                          Max Bedroom
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                        <svg className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">Price range</h3>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full rounded-xl border border-gray-200 p-2 text-sm text-gray-700 placeholder:text-sm placeholder:text-gray-400"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full rounded-xl border border-gray-200 p-2 text-sm text-gray-700 placeholder:text-sm placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">Property Type</h3>
                  <div className="relative">
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className={`w-full appearance-none rounded-xl border border-gray-200 p-2 text-sm ${
                        propertyType === "" ? "text-gray-400" : "text-gray-700"
                      } pr-8`}
                    >
                      <option value="" disabled className="text-gray-400">
                        Any Type
                      </option>
                      <option>Residential</option>
                      <option>Commercial</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                      <svg className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Options */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">Options</h3>
                  <div className="flex flex-col gap-3">
                    {["Furnished", "Unfurnished", "Swimming Pool", "Gym", "Pet Friendly"].map(
                      (option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 text-gray-700 text-sm"
                        >
                          <input type="checkbox" className="accent-red-400" />
                          {option}
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex justify-end gap-4">
                  <button 
                    className="text-gray-900 hover:text-gray-800 font-medium text-sm"
                    onClick={() => {
                      setIsFilterVisible(false);
                      // Reset all state values
                      setMinBedroom("");
                      setMaxBedroom("");
                      setPropertyType("");
                      // Reset price range inputs - Update selectors to target mobile view inputs
                      const mobileFilterOverlay = document.querySelector('.fixed.inset-x-4');
                      if (mobileFilterOverlay) {
                        const minPriceInput = mobileFilterOverlay.querySelector('input[placeholder="Min"]') as HTMLInputElement;
                        const maxPriceInput = mobileFilterOverlay.querySelector('input[placeholder="Max"]') as HTMLInputElement;
                        if (minPriceInput) minPriceInput.value = '';
                        if (maxPriceInput) maxPriceInput.value = '';
                        // Reset all checkboxes within mobile view
                        const mobileCheckboxes = mobileFilterOverlay.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
                        mobileCheckboxes.forEach(checkbox => checkbox.checked = false);
                      }
                    }}
                  >
                    Cancel
                  </button>
                  <button 
                    className="border bg-white-400 hover:bg-red-500 text-red-400 hover:text-white border-red-400 font-semibold px-6 py-2 rounded-xl text-sm"
                    onClick={() => setIsFilterVisible(false)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-6 flex justify-center">
          <div className="text-xs text-white tracking-widest animate-bounce">
            ↓ Browse Properties ↓
          </div>
        </div>
      </div>
    </main>
  );
}
