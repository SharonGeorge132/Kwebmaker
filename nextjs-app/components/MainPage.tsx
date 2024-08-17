import Image from 'next/image';

const MainPage = () => {
  return (
    <div className="relative h-screen bg-purple-700">
      <Image
        src="/path-to-your-image.png" // Replace with the path to your image
        layout="fill"
        objectFit="cover"
        alt="Interior Emulsions"
        className="opacity-80"
      />
      
      {/* Overlay Text and Button */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Interior Emulsions</h1>
        <p className="text-white text-lg md:text-2xl mt-4">Excellent Fungal Resistance | Smooth Finish</p>
        <button className="mt-6 px-6 py-3 bg-white text-purple-700 font-semibold rounded-full">
          Read More
        </button>
      </div>

      {/* Rainbow Strip at the Bottom */}
      <div className="absolute bottom-0 w-full">
        <div className="h-8 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      </div>
    </div>
  );
};

export default MainPage;
