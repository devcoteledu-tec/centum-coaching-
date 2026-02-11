
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const features = [
    { 
      title: "Live Interactive Offline Classes",
      icon: "fa-earth-americas", // Globe
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    { 
      title: "Daily Skill Assessment Exams",
      icon: "fa-pen-to-square", // Pen/Assessment
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    { 
      title: "Chapter Wise Exams",
      icon: "fa-medal", // Medal
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    { 
      title: "Monthly Progress Card",
      icon: "fa-address-card", // ID/Card
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    { 
      title: "Previous Year Question Discussion",
      icon: "fa-chalkboard-user", // Teaching
      color: "text-cyan-500",
      bg: "bg-cyan-50"
    },
    { 
      title: "Centum's Study Material",
      icon: "fa-book-open", // Book
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    { 
      title: "Regular Communication With Parents",
      icon: "fa-hands-holding-child", // Care/Parents
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    { 
      title: "Model Exam",
      icon: "fa-file-signature", // Exam paper
      color: "text-teal-500",
      bg: "bg-teal-50"
    },
    { 
      title: "Exam Special Youtube Live",
      icon: "fa-youtube", // Youtube
      color: "text-red-600",
      bg: "bg-red-50",
      isBrand: true
    }
  ];

  // Duplicate the array to create a seamless infinite loop
  const seamlessFeatures = [...features, ...features];

  return (
    <section className="relative bg-[#d63031] py-10 sm:py-16 -mx-4 sm:-mx-8 lg:-mx-16 px-0 overflow-hidden">
       <div className="max-w-7xl mx-auto text-center relative z-10 mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-md">
          Why Choose Centum's <br className="hidden sm:block"/>
          Live Interactive Offline Classes?
        </h2>
      </div>
      
      {/* Infinite Horizontal Marquee */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 sm:gap-8 w-max animate-scroll px-4">
          {seamlessFeatures.map((item, idx) => (
            <div 
              key={`${idx}-${item.title}`} 
              className="bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center gap-5 hover:-translate-y-2 transition-transform duration-300 shadow-xl border-b-8 border-black/5 hover:border-black/10 shrink-0 w-[280px] sm:w-[320px] h-[260px]"
            >
               <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center text-3xl shadow-inner ${item.color}`}>
                 <i className={`${item.isBrand ? 'fab' : 'fas'} ${item.icon}`}></i>
               </div>
               <h3 className="font-bold text-slate-800 text-sm sm:text-base leading-snug text-center">
                 {item.title}
               </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
