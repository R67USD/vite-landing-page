const RepeatingTextStrip = () => {
  // Creating an array of repeated text to ensure it fills the width
  const repeatedText = Array(20).fill("Purple Haze Media |"); // Increased count for wider screens

  return (
    <div className="w-full relative h-[99px] bg-white overflow-hidden border-y border-gray-100">
      <div className="absolute inset-0 flex items-center">
        <div className="flex whitespace-nowrap animate-scroll">
          {/* First set of text */}
          <div className="flex">
            {repeatedText.map((text, index) => (
              <span
                key={`first-${index}`}
                className="repeating-strip text-[#F5F5F5] text-[4vh] font-bold px-2"
              >
                {text}
              </span>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex">
            {repeatedText.map((text, index) => (
              <span
                key={`second-${index}`}
                className="repeating-strip text-[#F5F5F5] text-[4vh] font-bold px-2"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepeatingTextStrip;
