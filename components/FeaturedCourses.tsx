
import React from 'react';

interface FeaturedCoursesProps {
  onNavigate?: (tab: string) => void;
}

const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ onNavigate }) => {
  const courses = [
    {
      id: 1,
      title: "STATES Syllabus",
      classes: ["10"],
      features: [
        "Basic and Regular courses",
        "All Subjects",
        "Foundation Coaching"
      ],
      image: "https://img.freepik.com/premium-vector/cute-happy-little-student-boy-is-learning-calssroomdoodle-vector-cartoon-character_77116-1519.jpg", 
    },
    {
      id: 2,
      title: "NCERT Syllabus",
      classes: ["+1", "+2"],
      features: [
        "Regular coaching",
        "Bio Maths, Computer Science, Commerce & Humanities",
        "+1 Entrance - NEET & KEAM"
      ],
      image: "https://octamultimedia.com/wp-content/uploads/2025/04/Learn-3D-Animation-Course-in-Guwahati-with-Octa-Animation-Multimedia.webp",
    },
    {
      id: 3,
      title: "STATES Syllabus",
      classes: ["8", "9"],
      features: [
        "Regular coaching",
        "Physics, Chemistry, Mathematics, Biology & Social Science",
        "Foundation"
      ],
      image: "https://img.freepik.com/free-vector/lesson-concept-illustration_114360-7565.jpg",
    }
  ];

  const silkBgUrl = "https://png.pngtree.com/png-vector/20230112/ourlarge/pngtree-abstract-red-wave-curve-shadow-dynamic-png-image_6561120.png";

  return (
    <section 
      className="py-16 sm:py-24 relative overflow-hidden -mx-4 sm:-mx-8 lg:-mx-16 px-4 sm:px-8 lg:px-16"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)), url('${silkBgUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: '#800000' // Base maroon color to support the image
      }}
    >
      {/* Decorative inner glow for better focus on content */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-5xl mx-auto space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 uppercase tracking-tighter drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
            Popular Courses
          </h2>
          <div className="w-32 h-2 bg-red-800 mx-auto rounded-full shadow-lg"></div>
          <p className="text-slate-900 text-sm sm:text-lg font-black leading-relaxed max-w-3xl mx-auto drop-shadow-[0_1px_2px_rgba(255,255,255,1)]">
            At CENTUM's tuition centre, we teach every subject for State syllabus Classes 8-10, +1, +2. 
            Our expert guidance and study materials help students master their subjects and achieve exam success.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="relative bg-white/95 backdrop-blur-md rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white overflow-hidden flex flex-col hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(128,0,0,0.2)] transition-all duration-500 group h-full"
            >
              {/* Illustration Area */}
              <div className="h-64 bg-slate-50/80 p-6 flex items-center justify-center relative overflow-hidden border-b border-slate-100">
                 <div className="absolute inset-0 bg-red-50/30"></div>
                 <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-contain relative z-10 mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Area */}
              <div className="p-10 flex flex-col items-center text-center flex-1 space-y-6 relative z-10">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{course.title}</h3>
                
                {/* Large Red Numbers */}
                <div className="text-4xl font-black text-red-700 tracking-wider flex items-center gap-3 drop-shadow-sm">
                  {course.classes.map((num, i) => (
                    <React.Fragment key={i}>
                      <span>{num}</span>
                      {i < course.classes.length - 1 && <span className="text-slate-300 font-light text-3xl">|</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Features List */}
                <ul className="space-y-3 flex-1 w-full">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full shrink-0 shadow-sm"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Admission Button */}
                <button 
                  onClick={() => onNavigate?.('online-admission')}
                  className="w-full bg-red-800 text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-red-900/20 active:scale-95"
                >
                  Apply for Admission
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
