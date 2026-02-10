
import React, { useEffect, useRef, useState } from 'react';

const TeachingHeart: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mediaItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
      alt: "Centum Award Ceremony",
      delay: "100ms"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
      alt: "Centum in News",
      delay: "300ms"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
      alt: "Centum Educational Event",
      delay: "500ms"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="bg-[#FACC15] py-10 sm:py-16 -mx-4 sm:-mx-8 lg:-mx-16 px-4 sm:px-8 lg:px-16 overflow-hidden relative"
    >
      <div className="max-w-[1600px] mx-auto relative z-10">
        <h2 className={`text-slate-950 text-3xl sm:text-5xl font-black text-center mb-8 sm:mb-12 tracking-tight uppercase transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          Teaching From The Heart
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {mediaItems.map((item) => (
            <div 
              key={item.id} 
              style={{ 
                animationDelay: item.delay,
                visibility: isVisible ? 'visible' : 'hidden'
              }}
              className={`group relative aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] cursor-pointer border-4 border-white transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] ${isVisible ? 'animate-drop-down' : ''}`}
            >
              {/* Inner container for the floating effect after landing */}
              <div className={isVisible ? 'animate-float' : ''} style={{ animationDelay: `${parseInt(item.delay) + 800}ms` }}>
                {/* Main Image */}
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-500"></div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#004080] border-b-[10px] border-b-transparent ml-2"></div>
                  </div>
                </div>

                {/* YouTube Icon Overlay (Bottom Left) */}
                <div className="absolute bottom-4 left-4 w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:-translate-y-1 transition-transform">
                  <i className="fab fa-youtube text-white text-xl sm:text-2xl"></i>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute -inset-full top-0 block w-1/2 h-full z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shine"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default TeachingHeart;
