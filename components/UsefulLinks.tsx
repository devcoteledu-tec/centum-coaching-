
import React from 'react';

const UsefulLinks: React.FC = () => {
  const portals = [
    { name: "NTA", color: "text-slate-600", url: "https://www.nta.ac.in/", logo: "https://nta.ac.in/img/nta_logo.png" },
    { name: "JIPMER", color: "text-teal-600", url: "https://www.jipmer.edu.in/", logo: "https://upload.wikimedia.org/wikipedia/en/b/b3/Jawaharlal_Institute_of_Postgraduate_Medical_Education_and_Research_logo.png" },
    { name: "AIIMS", color: "text-emerald-700", url: "https://www.aiimsexams.ac.in/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/All_India_Institute_of_Medical_Sciences%2C_New_Delhi_Logo.svg/1200px-All_India_Institute_of_Medical_Sciences%2C_New_Delhi_Logo.svg.png" },
    { name: "NEET", color: "text-green-600", url: "https://neet.nta.nic.in/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Central_Board_of_Secondary_Education_logo.png/220px-Central_Board_of_Secondary_Education_logo.png" },
    { name: "KEAM", color: "text-blue-700", url: "https://cee.kerala.gov.in/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Kerala_State_Seal.svg/1200px-Kerala_State_Seal.svg.png" },
    { name: "JEE (Advanced)", color: "text-red-700", url: "https://jeeadv.ac.in/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Indian_Institute_of_Technology_Madras_Logo.svg/1200px-Indian_Institute_of_Technology_Madras_Logo.svg.png" },
    { name: "JEE Main", color: "text-yellow-600", url: "https://jeemain.nta.nic.in/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Central_Board_of_Secondary_Education_logo.png/220px-Central_Board_of_Secondary_Education_logo.png" },
    { name: "ICAR", color: "text-purple-700", url: "https://icar.org.in/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Indian_Council_of_Agricultural_Research_Logo.svg/1200px-Indian_Council_of_Agricultural_Research_Logo.svg.png" },
    { name: "IIST", color: "text-slate-800", url: "https://www.iist.ac.in/", logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/Indian_Institute_of_Space_Science_and_Technology_Logo.png" },
    { name: "NEST", color: "text-purple-600", url: "https://www.nestexam.in/", logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/NEST_logo.png" },
    { name: "NDA", color: "text-indigo-800", url: "https://www.upsc.gov.in/", logo: "https://upload.wikimedia.org/wikipedia/en/d/de/National_Defence_Academy_logo.png" },
    { name: "BITSAT", color: "text-blue-900", url: "https://www.bitsadmission.com/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Bits-pilani-logo.png/220px-Bits-pilani-logo.png" },
    { name: "AMU", color: "text-amber-600", url: "https://www.amu.ac.in/", logo: "https://upload.wikimedia.org/wikipedia/en/b/ba/Aligarh_Muslim_University_logo.png" },
    { name: "AIPVT", color: "text-blue-600", url: "https://vci.dadf.gov.in/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Veterinary_Council_of_India_Logo.png/220px-Veterinary_Council_of_India_Logo.png" },
    { name: "AFMC", color: "text-red-600", url: "https://afmc.nic.in/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Armed_Forces_Medical_College_Logo.png/220px-Armed_Forces_Medical_College_Logo.png" },
    { name: "CUSAT", color: "text-slate-900", url: "https://cusat.ac.in/", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Cochin_University_of_Science_and_Technology_Logo.png/220px-Cochin_University_of_Science_and_Technology_Logo.png" },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header Area */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-100 pb-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-lg text-[9px] font-black uppercase tracking-widest">
            <i className="fas fa-link"></i>
            Important Links
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight">
            Useful <span className="text-red-800">Links</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-xl text-lg border-l-4 border-slate-200 pl-4">
            Direct access to official government and institutional examination portals.
          </p>
        </div>
        
        <div className="hidden lg:block text-right">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Sources</p>
           <p className="text-xl font-black text-slate-900 flex items-center justify-end gap-2 uppercase tracking-tighter">
             Directory
           </p>
        </div>
      </div>

      {/* Grid Display (Replicating the provided image) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {portals.map((portal, index) => (
          <a 
            key={index} 
            href={portal.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center overflow-hidden">
              <img 
                src={portal.logo} 
                alt={portal.name} 
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  // Fallback for missing images
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${portal.name}&background=f1f5f9&color=64748b&size=128&bold=true`;
                }}
              />
            </div>
            <h3 className={`text-base sm:text-xl font-bold mb-3 tracking-wide ${portal.color}`}>
              {portal.name}
            </h3>
            <span className="text-blue-500 text-[10px] sm:text-xs font-medium uppercase tracking-widest hover:underline underline-offset-4">
              Visit Now
            </span>
          </a>
        ))}
      </div>

      {/* Security Advisory Section */}
      <section className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-red-500 shrink-0 border border-white/10">
              <i className="fas fa-lock text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight">Portal Advisory</h3>
              <p className="text-slate-400 text-sm font-medium mt-1">Please ensure you are on official governmental domains before entering sensitive personal information.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsefulLinks;
