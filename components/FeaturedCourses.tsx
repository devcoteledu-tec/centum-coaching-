
import React from 'react';

interface FeaturedCoursesProps {
  onNavigate?: (tab: string) => void;
}

const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ onNavigate }) => {
  const courses = [
    {
      id: 1,
      title: "State Syllabus",
      classes: ["10"],
      features: [
        "Basic and Regular courses",
        "All Subjects",
        "Foundation Coaching"
      ],
      image: "https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4898.jpg", 
    },
    {
      id: 2,
      title: "State Syllabus",
      classes: ["+1", "+2"],
      features: [
        "Online and Offline classes",
        "Bio Maths, Computer Science, Commerce & Humanities",
        "+1 Entrance - NEET & KEAM"
      ],
      image: "https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg",
    },
    {
      id: 3,
      title: "CBSE Syllabus",
      classes: ["8", "9"],
      features: [
        "Regular tuition",
        "Physics, Chemistry, Mathematics, Biology & Social Science",
        "Foundation"
      ],
      image: "https://img.freepik.com/free-vector/lesson-concept-illustration_114360-7565.jpg",
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-red-800 rounded-full opacity-5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-5xl mx-auto space-y-6">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">Popular Courses</h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            At CENTUM's tuition centre, we teach every subject for State syllabus Classes 8-10, +1, +2 and CBSE Classes 8-10. 
            Our online and offline tuition uses chapter-wise expert guidance, daily exams, and study materials to help students 
            master Maths, Science, Social Studies, English, and more. Each class ensures concept clarity, effective revision, 
            and exam success, making CENTUM the top tuition centre in Kerala.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group h-full"
            >
              {/* Illustration Area */}
              <div className="h-64 bg-slate-50 p-6 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-blue-50/30"></div>
                 <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-contain relative z-10 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col items-center text-center flex-1 space-y-6">
                <h3 className="text-xl font-black text-slate-900">{course.title}</h3>
                
                {/* Large Red Numbers */}
                <div className="text-4xl font-black text-red-700 tracking-wider flex items-center gap-3">
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
                    <li key={idx} className="text-xs sm:text-sm font-bold text-slate-500 leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Admission Button */}
                <button 
                  onClick={() => onNavigate?.('online-admission')}
                  className="w-full bg-red-700 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-800 transition-all shadow-lg shadow-red-900/20 active:scale-95"
                >
                  For Admission
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
