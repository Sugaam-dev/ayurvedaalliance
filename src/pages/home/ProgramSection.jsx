import React from "react";

const ProgramSection = ({ data }) => {
  const { title, subtitle, items, buttonText, variant = "grid" } = data;

  return (
    <section className="bg-[#f3f3f3] py-12 px-4 md:px-10 lg:px-16">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        {title}
      </h2>
      <p className="text-gray-500 mb-8">{subtitle}</p>

      {/* Grid variant — used by Meditation & Yoga */}
      {variant === "grid" && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[250px]">
          {/* LEFT BIG CARD */}
          <div className="relative col-span-2 row-span-2 rounded-xl overflow-hidden group">
            <img
              src={items[0].img}
              alt={items[0].label}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="absolute bottom-4 left-4 text-white font-semibold">
              {items[0].label}
            </p>
          </div>

          {/* SMALL CARDS — index 1 & 2 */}
          {[items[1], items[2]].map((item, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden group">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <p className="absolute bottom-3 left-3 text-white text-sm">
                {item.label}
              </p>
            </div>
          ))}

          {/* RIGHT BIG CARD — index 3 */}
          <div className="relative row-span-2 rounded-xl overflow-hidden group">
            <img
              src={items[3].img}
              alt={items[3].label}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="absolute bottom-4 left-4 text-white font-semibold">
              {items[3].label}
            </p>
          </div>

          {/* BOTTOM SMALL CARDS — index 4 & 5 */}
          {[items[4], items[5]].map((item, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden group">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <p className="absolute bottom-3 left-3 text-white text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Columns variant — used by Wisdom */}
      {variant === "columns" && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {/* LEFT COLUMN — items 0 & 3 */}
          <div className="flex flex-col gap-5">
            <div className="relative h-[180px] rounded-xl overflow-hidden group">
              <img
                src={items[0].img}
                alt={items[0].label}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">
                {items[0].label}
              </p>
            </div>
            <div className="relative h-[230px] rounded-xl overflow-hidden group">
              <img
                src={items[3].img}
                alt={items[3].label}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <p className="absolute bottom-3 left-3 text-white font-semibold text-xs md:text-sm">
                {items[3].label}
              </p>
            </div>
          </div>

          {/* CENTER TALL — item 1 */}
          <div className="relative h-[430px] rounded-xl overflow-hidden group">
            <img
              src={items[1].img}
              alt={items[1].label}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base">
              {items[1].label}
            </p>
          </div>

          {/* RIGHT COLUMN — items 2 & 4 */}
          <div className="flex flex-col gap-5">
            <div className="relative h-[200px] rounded-xl overflow-hidden group">
              <img
                src={items[2].img}
                alt={items[2].label}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">
                {items[2].label}
              </p>
            </div>
            <div className="relative h-[200px] rounded-xl overflow-hidden group">
              <img
                src={items[4].img}
                alt={items[4].label}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <p className="absolute bottom-3 left-3 text-white font-semibold text-xs md:text-sm">
                {items[4].label}
              </p>
            </div>
          </div>

          {/* RIGHT BIG — item 5 */}
          <div className="relative h-[430px] rounded-xl overflow-hidden group">
            <img
              src={items[5].img}
              alt={items[5].label}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base">
              {items[5].label}
            </p>
          </div>
        </div>
      )}

      {/* Optional Button */}
      {buttonText && (
        <div className="flex justify-center mt-10">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm hover:bg-yellow-600 transition">
            {buttonText}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProgramSection;