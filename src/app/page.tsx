import { FiSearch } from "react-icons/fi";
import { SlidersHorizontal } from "lucide-react";

export default function Home() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat text-white px-4 pt-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/background.jpeg')",
      }}
    >
      <div className="mt-8 text-center w-full max-w-4xl">
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
                  className="flex-1 outline-none bg-transparent text-gray-800 placeholder:text-sm"
                />
              </div>

              {/* Buttons Wrapper */}
              <div className="flex w-full gap-3 sm:flex-0 sm:w-auto">
                {/* Mobile-only Filters Button */}
                <button className="flex items-center gap-1 text-red-400 hover:text-red-600 font-medium text-sm bg-white px-4 py-3 rounded-xl transition sm:hidden w-full">
                  <SlidersHorizontal size={16} />
                  Filters
                </button>

                {/* Search Button */}
                <button className="bg-red-400 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-xl transition duration-200 w-full sm:w-auto">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Floating Filters Button for Desktop */}
          <div className="relative -top-9 left-0 z-0 hidden sm:block">
            <button
              className="flex items-center gap-1 text-red-400 hover:text-red-600 font-medium text-sm bg-white px-4 py-2 pt-10 rounded-xl transition opacity-100 cursor-allowed"
              disabled
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-24 flex justify-center">
          <div className="text-xs text-white tracking-widest animate-bounce">
            ↓ Browse Properties ↓
          </div>
        </div>
      </div>
    </main>
  );
}
