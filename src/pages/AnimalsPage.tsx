import React from "react";

const AnimalsPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">animals</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div className="group relative">
              <img
                src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
              />
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  dog
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                lorem4
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalsPage;
