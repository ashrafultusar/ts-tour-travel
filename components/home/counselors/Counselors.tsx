import React from 'react';
import Image from 'next/image';

const Counselors: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#f1f5f9] flex flex-col items-center py-16 overflow-hidden">
      
      {/* Background Stripes */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-stripes" />

      {/* Title */}
      <h2 className="relative z-10 text-4xl font-bold text-gray-800 mb-20 text-center">
        Meet Our Counselors
      </h2>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-center w-full max-w-6xl px-4">
        
        {/* White Info Card */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-2xl md:-mr-24 mb-10 md:mb-20 relative z-20">
          <div className="relative">
            {/* Quote Icon Start */}
            <span className="text-3xl font-serif font-bold text-gray-900 absolute -left-6 -top-2">&quot;</span>
            
            <p className="text-gray-700 leading-relaxed italic text-base md:text-[17px]">
              {/* Ekhane Jahirul's er bodole &apos; bebohar kora hoyeche */}
              Engr. Jahirul Islam Piash serves as the General Manager of Tawakkul Malaysia Education Consultancy, 
              overseeing all operations in Bangladesh. With a solid background in engineering and management, 
              he plays a crucial role in ensuring that the company&apos;s services are executed smoothly and 
              meet high standards. Jahirul&apos;s meticulous attention to detail and strategic oversight enhance 
              operational efficiency, contributing significantly to the firm&apos;s success in the region. 
              He fosters a collaborative work environment that encourages continuous improvement, 
              ensuring Tawakkul Malaysia remains a leading force in educational consultancy.
            </p>
            
            {/* Quote Icon End */}
            <span className="text-3xl font-serif font-bold text-gray-900 ml-1">&quot;</span>
          </div>

          <div className="mt-8">
            <h3 className="text-[#00a3ff] font-bold text-xl mb-1">
              Engr. Md. Jahirul Islam Piash
            </h3>
            <p className="text-gray-500 font-medium">General Manager</p>
          </div>
        </div>

        {/* Person Image */}
        <div className="relative z-10 w-full max-w-md md:max-w-lg">
          <Image 
            src="/counselor.png" // Apnar image path
            alt="Engr. Md. Jahirul Islam Piash"
            width={600}
            height={700}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Counselors;