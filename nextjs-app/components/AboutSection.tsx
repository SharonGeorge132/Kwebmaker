import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="about-section bg-white flex items-center justify-between py-12 px-8">
      <div className="text-section max-w-lg">
        <h2 className="text-4xl font-bold mb-4">About Astral Paints</h2>
        <h3 className="text-3xl font-bold text-black mb-2">
          Bringing Your Dreams To Life
        </h3>
        <div className="underline-decoration mb-6"></div>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis
          phasellus porttitor amet odio tempor. Ac molestie fames id urna dui
          posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at
          in pharetra velit luctus id pellentesque.
        </p>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis
          phasellus porttitor amet odio tempor. Ac molestie fames id urna dui
          posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at
          in pharetra velit luctus id pellentesque.
        </p>
        <button className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600">
          Read More
        </button>
      </div>

      <div className="image-section relative">
        <Image
          src="data:image/png;base64,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" 
          alt="Astral Paints Interior"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
        <div className="play-icon absolute inset-0 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-6.752 4.829A1 1 0 017 15.829V8.171a1 1 0 011.496-.868l6.752 4.829a1 1 0 010 1.736z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
