const RepeatingTextStrip = () => {
  const repeatedText = Array(20).fill("Purple Haze Media |");

  return (
    <div className="relative bg-white overflow-hidden border-y border-gray-100">
      <div className="flex whitespace-nowrap animate-scroll">
        {/* First set of text */}
        <div className="flex">
          {repeatedText.map((text, index) => (
            <span
              key={`first-${index}`}
              className="max-sm:leading-[62px] max-sm:max-h-[75px] max-sm:text-[35px] text-[95.56px] font-petrov leading-[98.8px] font-bold text-left text-[#F5F5F5] px-2"
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
              className="max-sm:leading-[62px] max-sm:max-h-[75px] max-sm:text-[35px] text-[95.56px] font-petrov leading-[98.8px] font-bold text-left text-[#F5F5F5] px-2"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepeatingTextStrip;
