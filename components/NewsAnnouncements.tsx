
import React, { useState, useEffect } from 'react';
import { supabaseFetch } from '../services/supabase';

interface NewsData {
  id: number;
  title: string;
  excerpt: string;
  image_url: string;
  category: string;
  created_at: string;
  read_more_url?: string;
}

interface NewsAnnouncementsProps {
  onNavigate?: (tab: string) => void;
}

const NewsAnnouncements: React.FC<NewsAnnouncementsProps> = ({ onNavigate }) => {
  const [newsItems, setNewsItems] = useState<NewsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      setLoading(true);
      try {
        // Fetching 3 news items instead of 2 to fill the layout better
        const newsData = await supabaseFetch<NewsData>('centum_news?select=*&order=created_at.desc&limit=3');
        if (newsData) setNewsItems(newsData);
      } catch (error) {
        console.error("NewsAnnouncements data fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeData();
  }, []);

  return (
    <section className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 shadow-sm overflow-hidden">
      <div className="space-y-10">
        {/* Full Width News & Events Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight">
              <i className="fas fa-newspaper text-red-800"></i>
              News & Events
            </h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Stay updated with our latest milestones</p>
          </div>
          <button 
            onClick={() => onNavigate?.('news')}
            className="text-[10px] font-black text-red-800 uppercase tracking-widest bg-red-50 px-5 py-2.5 rounded-xl hover:bg-red-800 hover:text-white transition-all shadow-sm"
          >
            Explore All News
          </button>
        </div>

        {/* News Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {loading ? (
            [1, 2, 3].map(n => <div key={n} className="h-32 bg-slate-50 animate-pulse rounded-2xl border border-slate-100"></div>)
          ) : newsItems.length > 0 ? (
            newsItems.map((item) => (
              <a 
                key={item.id} 
                href={item.read_more_url || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col gap-5 group cursor-pointer bg-slate-50/30 p-4 rounded-[2rem] border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="w-full h-48 flex-shrink-0 bg-slate-100 rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm relative">
                  <img 
                    src={item.image_url || "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400"} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt="News" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-800/90 backdrop-blur text-white px-3 py-1.5 rounded-xl text-[8px] font-black uppercase tracking-widest shadow-lg">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 px-2">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      {new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h4 className="text-base font-black text-slate-900 leading-tight group-hover:text-red-800 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-3 line-clamp-2 font-medium leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-100/50 flex items-center justify-between">
                    <span className="text-[9px] font-black text-slate-400 group-hover:text-red-800 uppercase tracking-widest transition-colors">Learn More</span>
                    <i className="fas fa-arrow-right text-[10px] text-slate-300 group-hover:text-red-800 group-hover:translate-x-1 transition-all"></i>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-slate-300 font-bold uppercase tracking-widest text-[10px] border-2 border-dashed border-slate-100 rounded-3xl">
              <i className="fas fa-newspaper text-3xl mb-4 block opacity-50"></i>
              No recent news items available
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsAnnouncements;

