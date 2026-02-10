
import React, { useRef, useState, useEffect } from 'react';
import { supabaseFetch } from '../services/supabase';

interface TopperData {
  id: number;
  student_name: string;
  rank: string;
  exam_type: string;
  score: string;
  image_url: string;
  achievement: string;
  exam_year: number;
}

interface TestimonialsProps {
  onNavigate?: (tab: string) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [toppers, setToppers] = useState<TopperData[]>([]);
  const [loading, setLoading] = useState(true);

  const bgColors = [
    "bg-white border-orange-200", 
    "bg-[#e2ea20]",              
    "bg-[#ffe8e0]",              
    "bg-[#f0f9ff]",              
    "bg-[#f9d423]"               
  ];

  useEffect(() => {
    const fetchToppers = async () => {
      try {
        const data = await supabaseFetch<TopperData>('centum_results?select=*&order=exam_year.desc&limit=12');
        if (data) setToppers(data);
      } catch (error) {
        console.error("Testimonials data fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchToppers();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 260;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-white overflow-hidden group/section">
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-4xl font-light text-slate-800 tracking-tight">
          Our <span className="font-medium">Toppers</span>
        </h2>
        <div className="w-16 h-[1px] bg-slate-300 mx-auto mt-4"></div>
      </div>

      {/* Toppers Scroll Container with Navigation */}
      <div className="max-w-[1400px] mx-auto px-4 relative">
        {/* Nav Buttons */}
        {!loading && toppers.length > 0 && (
          <>
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-12 h-12 bg-white shadow-xl rounded-full hidden lg:flex items-center justify-center text-slate-400 hover:text-red-800 transition-all border border-slate-100 opacity-0 group-hover/section:opacity-100 group-hover/section:-translate-x-4"
              aria-label="Scroll Toppers Left"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-12 h-12 bg-white shadow-xl rounded-full hidden lg:flex items-center justify-center text-slate-400 hover:text-red-800 transition-all border border-slate-100 opacity-0 group-hover/section:opacity-100 group-hover/section:translate-x-4"
              aria-label="Scroll Toppers Right"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </>
        )}

        {loading ? (
          <div className="flex gap-8 justify-center overflow-hidden">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex flex-col items-center gap-6 shrink-0 w-[220px] animate-pulse">
                <div className="w-48 h-48 rounded-full bg-slate-100"></div>
                <div className="h-4 w-32 bg-slate-100 rounded"></div>
                <div className="h-3 w-20 bg-slate-50 rounded"></div>
              </div>
            ))}
          </div>
        ) : toppers.length > 0 ? (
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 scrollbar-hide items-start justify-start"
          >
            {toppers.map((topper, i) => {
              const colorStyle = bgColors[i % bgColors.length];
              const isWhite = colorStyle.includes('bg-white');
              
              return (
                <div 
                  key={topper.id} 
                  className="snap-center shrink-0 flex flex-col items-center text-center w-[220px] group/card transition-transform hover:-translate-y-2 duration-500"
                >
                  {/* Circular Portrait Frame */}
                  <div className={`relative w-48 h-48 rounded-full flex items-center justify-center p-1.5 border-2 ${isWhite ? 'border-orange-200' : 'border-transparent'} shadow-sm group-hover/card:shadow-xl transition-all mb-6`}>
                    <div className={`w-full h-full rounded-full overflow-hidden ${colorStyle} relative`}>
                      <img 
                        src={topper.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(topper.student_name)}&background=random&color=fff&size=300`} 
                        alt={topper.student_name} 
                        className="w-full h-full object-cover grayscale-[30%] group-hover/card:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>

                  {/* Identity */}
                  <div className="space-y-1 px-2">
                    <h4 className="font-bold text-slate-700 text-lg uppercase tracking-wider line-clamp-1">{topper.student_name}</h4>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter line-clamp-1">{topper.rank}</p>
                    <p className="text-[9px] font-black text-slate-300 uppercase mt-1">{topper.exam_type} {topper.exam_year}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Recent topper data updating soon...</p>
          </div>
        )}
      </div>

      {/* Navigation Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
      </div>

      {/* Results CTA */}
      <div className="mt-20 text-center">
        <button 
          onClick={() => onNavigate?.('results')}
          className="text-slate-500 font-bold text-[11px] uppercase tracking-[0.2em] hover:text-red-800 transition-colors flex items-center justify-center gap-2 mx-auto group"
        >
          View Detailed Results Archive
          <i className="fas fa-arrow-right text-[9px] group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
