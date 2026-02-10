
import React, { useState, useEffect } from 'react';
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

const Results: React.FC = () => {
  const [activeExam, setActiveExam] = useState('JEE Advanced');
  const [results, setResults] = useState<TopperData[]>([]);
  const [loading, setLoading] = useState(true);

  const exams = ['JEE Advanced', 'JEE Main', 'NEET (UG)', 'KEAM', 'Foundation'];
  
  // Year range for the results archive section
  const resultYears = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

  // Professional Color Themes for the Year Cards
  const cardThemes = [
    { border: 'border-red-100', hoverBorder: 'hover:border-red-400', bg: 'bg-red-50/30', badge: 'bg-red-800', shadow: 'shadow-red-900/5', btn: 'group-hover/btn:text-red-900', icon: 'text-red-600' },
    { border: 'border-blue-100', hoverBorder: 'hover:border-blue-400', bg: 'bg-blue-50/30', badge: 'bg-blue-800', shadow: 'shadow-blue-900/5', btn: 'group-hover/btn:text-blue-900', icon: 'text-blue-600' },
    { border: 'border-emerald-100', hoverBorder: 'hover:border-emerald-400', bg: 'bg-emerald-50/30', badge: 'bg-emerald-800', shadow: 'shadow-emerald-900/5', btn: 'group-hover/btn:text-emerald-900', icon: 'text-emerald-600' },
    { border: 'border-amber-100', hoverBorder: 'hover:border-amber-400', bg: 'bg-amber-50/30', badge: 'bg-amber-600', shadow: 'shadow-amber-900/5', btn: 'group-hover/btn:text-amber-900', icon: 'text-amber-600' },
    { border: 'border-purple-100', hoverBorder: 'hover:border-purple-400', bg: 'bg-purple-50/30', badge: 'bg-purple-800', shadow: 'shadow-purple-900/5', btn: 'group-hover/btn:text-purple-900', icon: 'text-purple-600' },
    { border: 'border-rose-100', hoverBorder: 'hover:border-rose-400', bg: 'bg-rose-50/30', badge: 'bg-rose-700', shadow: 'shadow-rose-900/5', btn: 'group-hover/btn:text-rose-900', icon: 'text-rose-600' },
    { border: 'border-indigo-100', hoverBorder: 'hover:border-indigo-400', bg: 'bg-indigo-50/30', badge: 'bg-indigo-800', shadow: 'shadow-indigo-900/5', btn: 'group-hover/btn:text-indigo-900', icon: 'text-indigo-600' },
    { border: 'border-teal-100', hoverBorder: 'hover:border-teal-400', bg: 'bg-teal-50/30', badge: 'bg-teal-700', shadow: 'shadow-teal-900/5', btn: 'group-hover/btn:text-teal-900', icon: 'text-teal-600' },
  ];

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await supabaseFetch<TopperData>('centum_results?select=*&order=exam_year.desc');
        if (data) setResults(data);
      } catch (error) {
        console.error("Error fetching Centum Results:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, []);

  const filteredToppers = results.filter(topper => topper.exam_type === activeExam);

  const stats = [
    { label: "Selections in IITs", value: "450+", icon: "fa-university" },
    { label: "Selections in MBBS", value: "820+", icon: "fa-user-md" },
    { label: "Top 100 AIRs", value: "12", icon: "fa-star" },
    { label: "Qualified for Mains", value: "2800+", icon: "fa-check-double" }
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Results Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-100 pb-10">
        <div className="space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-800 rounded-lg text-[9px] font-black uppercase tracking-widest border border-purple-100 mx-auto lg:mx-0">
            <i className="fas fa-trophy text-purple-600"></i>
            Legacy of Excellence
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase">Academic Results</h2>
          <p className="text-slate-500 font-medium max-w-xl text-base sm:text-lg border-l-4 border-purple-200 pl-4 mx-auto lg:mx-0 text-left">Explore our historical performance and meet the brilliant minds who have excelled in national entrance examinations.</p>
        </div>
        
        <div className="hidden lg:block text-right">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Achievements</p>
           <p className="text-2xl font-black text-slate-900 tracking-tighter">CENTUM CPY</p>
        </div>
      </div>

      {/* Our Latest Results Section (Year-wise Archive) */}
      <section className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-3">
              <i className="fas fa-calendar-check text-red-800"></i>
              Our Latest Results
            </h3>
            <p className="text-slate-500 text-xs font-medium mt-1 uppercase tracking-widest">Yearly Performance Portals (2018 - 2025)</p>
          </div>
          <div className="h-px flex-1 bg-slate-100 hidden sm:block mx-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {resultYears.map((year, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <div 
                key={year} 
                className={`group relative overflow-hidden bg-white rounded-[2.5rem] p-8 border ${theme.border} ${theme.bg} shadow-lg ${theme.shadow} ${theme.hoverBorder} hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-2 transition-all duration-500 flex flex-col cursor-pointer`}
              >
                {/* Subtle Background Zoom Effect */}
                <div className="absolute -right-6 -bottom-6 text-slate-200/20 text-8xl transition-transform duration-700 group-hover:scale-125 group-hover:rotate-6 pointer-events-none">
                  <i className={`fas ${index % 2 === 0 ? 'fa-graduation-cap' : 'fa-award'}`}></i>
                </div>

                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className={`w-14 h-14 ${theme.badge} text-white rounded-2xl flex items-center justify-center text-xl font-black shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500`}>
                    {year.toString().slice(-2)}
                  </div>
                  <div className="text-right">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Academic Year</p>
                     <p className="text-lg font-black text-slate-900">{year}</p>
                  </div>
                </div>

                <div className="space-y-3 relative z-10">
                  <a 
                    href={`/results/${year}/10th`}
                    className="flex items-center justify-between w-full bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all group/btn"
                  >
                    <div className="flex items-center gap-3">
                      <i className={`fas fa-school text-xs ${theme.icon} opacity-50`}></i>
                      <span className={`text-[10px] font-black uppercase tracking-widest text-slate-700 ${theme.btn}`}>10th Toppers</span>
                    </div>
                    <i className={`fas fa-arrow-right text-[8px] text-slate-300 ${theme.icon} group-hover/btn:translate-x-1 transition-all`}></i>
                  </a>

                  <a 
                    href={`/results/${year}/plus-two`}
                    className="flex items-center justify-between w-full bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all group/btn"
                  >
                    <div className="flex items-center gap-3">
                      <i className={`fas fa-graduation-cap text-xs ${theme.icon} opacity-50`}></i>
                      <span className={`text-[10px] font-black uppercase tracking-widest text-slate-700 ${theme.btn}`}>+2 Toppers</span>
                    </div>
                    <i className={`fas fa-arrow-right text-[8px] text-slate-300 ${theme.icon} group-hover/btn:translate-x-1 transition-all`}></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hall of Fame Section (Our Hall of Excellence) */}
      <section className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[4rem] p-6 sm:p-12 lg:p-20 bg-slate-50 border border-slate-200/60 shadow-inner">
        {/* Background Decorative Text */}
        <div className="absolute top-10 left-10 text-[12rem] font-black text-slate-100/30 select-none pointer-events-none uppercase tracking-tighter hidden lg:block">
          EXCELLENCE
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-amber-50 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-amber-100 shadow-sm">
              <i className="fas fa-crown"></i>
              Student Success Stories
            </div>
            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight">
              Our Hall of <span className="text-red-800">Excellence</span>
            </h3>
            <p className="text-slate-500 text-sm sm:text-lg font-medium mt-6 max-w-2xl mx-auto leading-relaxed">
              Meet the achievers who have turned their dreams into reality through dedication and the right guidance at Centum.
            </p>
          </div>

          {/* Integrated Filter Controls */}
          <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-4 sm:p-6 mb-12 border border-slate-200/50 flex flex-col items-center gap-6">
            <div className="text-center space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Select Examination Category</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {exams.map((exam) => (
                <button
                  key={exam}
                  onClick={() => setActiveExam(exam)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeExam === exam 
                      ? 'bg-purple-900 text-white shadow-xl shadow-purple-200 border border-purple-800' 
                      : 'bg-white text-slate-500 border border-slate-200 hover:bg-purple-50 hover:text-purple-800 hover:border-purple-200'
                  }`}
                >
                  {exam}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 px-4">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <i className="fas fa-star text-amber-500"></i>
              Toppers Spotlight
            </h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] bg-slate-100 px-4 py-1.5 rounded-full">{activeExam} Achievers</span>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              {[1, 2, 3, 4].map(n => (
                <div key={n} className="aspect-[3/4] bg-slate-100 animate-pulse rounded-2xl"></div>
              ))}
            </div>
          ) : filteredToppers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
              {filteredToppers.map((topper) => (
                <div key={topper.id} className="group bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-purple-200 transition-all flex flex-col">
                  <div className="relative mb-8">
                    <div className="aspect-square rounded-[1.8rem] overflow-hidden border-4 border-white shadow-lg bg-slate-50">
                      <img 
                        src={topper.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(topper.student_name)}&background=random&color=fff&size=300`}
                        alt={topper.student_name} 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                      />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-purple-900 text-white px-5 py-2 rounded-xl text-[12px] font-black shadow-xl border border-purple-800/20 whitespace-nowrap z-10">
                      {topper.rank}
                    </div>
                  </div>
                  <div className="text-center flex-1 flex flex-col">
                    <h4 className="font-black text-slate-900 text-base sm:text-lg uppercase tracking-tight line-clamp-1">{topper.student_name}</h4>
                    <p className="text-purple-700 text-[10px] font-black uppercase tracking-widest mt-1">{topper.score}</p>
                    <div className="mt-auto pt-6 flex flex-col gap-2">
                       <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{topper.exam_type} {topper.exam_year}</span>
                       <p className="text-[10px] text-slate-500 italic bg-slate-50 py-3 px-4 rounded-xl border border-slate-100 group-hover:bg-purple-50 group-hover:text-purple-900 transition-colors leading-relaxed">
                         {topper.achievement}
                       </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 mx-4 text-center bg-slate-100/50 rounded-[2.5rem] border border-dashed border-slate-200">
              <i className="fas fa-award text-4xl text-slate-300 mb-4"></i>
              <p className="text-slate-400 font-bold uppercase tracking-widest px-4">No results found for {activeExam} category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-purple-950 rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-20 text-white relative overflow-hidden shadow-2xl shadow-purple-900/20">
        <div className="absolute top-0 right-0 p-10 sm:p-20 opacity-10 rotate-12 pointer-events-none text-white hidden sm:block">
          <i className="fas fa-award text-[10rem] sm:text-[15rem] text-white"></i>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 sm:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-4 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl mx-auto backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-500">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div>
                <h3 className="text-2xl sm:text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</h3>
                <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-purple-200 opacity-70 leading-tight">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Result Verification */}
      <section className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 p-8 sm:p-16 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-900 via-purple-400 to-purple-900 opacity-50"></div>
        <div className="max-w-3xl mx-auto space-y-10 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Check Your Performance</h3>
            <p className="text-slate-500 font-medium text-sm sm:text-base">Secure access to individual rank cards and detailed subject analysis.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Enrollment ID" 
              className="flex-1 bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-300 transition-all text-center sm:text-left"
            />
            <button className="bg-purple-900 text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95 whitespace-nowrap">
              Verify Result
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
