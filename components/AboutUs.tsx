
import React from 'react';

const AboutUs: React.FC = () => {
  const hods = [
    { name: 'AKHIL', role: 'Biology HOD', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' },
    { name: 'PRADEEP', role: 'Physics HOD', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
    { name: 'UNNI', role: 'Chemistry HOD', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
    { name: 'UNAIZ', role: 'Maths HOD', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
    
  ];

  const stats = [
    { count: '100+', label: 'Teachers', desc: 'Our institution offers a team of 100 dedicated and highly qualified educators who bring expertise and passion to the classroom.' },
    { count: '100%', label: 'Satisfied Students', desc: 'We take immense pride in the satisfaction of our students, with a remarkable 100% expressing contentment with their educational experience.' },
    { count: '200+', label: 'New Students Enrolled Monthly', desc: 'Every month, we welcome and integrate an average of 200+ new students into our academic community.' },
    { count: '10+', label: 'Studios', desc: 'We provide multifaceted spaces tailored to various learning activities, facilitating dynamic teaching methodologies.' },
  ];

  return (
    <div className="bg-white font-sans text-slate-900 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Hero Section */}
      <section className="bg-[#FFF8F0] pt-16 sm:pt-24 pb-0 relative overflow-hidden flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto px-6 mb-12 relative z-10">
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-none mb-2">
            About <br/> <span className="text-red-600">CENTUM</span>
          </h1>
          <p className="text-slate-700 font-medium text-sm sm:text-base max-w-lg mx-auto mt-4 leading-relaxed">
            CENTUM was founded to offer life-changing tuition for all, and this mission makes us excited to get up and come to work everyday.
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="relative z-10 -mb-1 mt-4">
           <img 
             src="https://static.vecteezy.com/system/resources/thumbnails/024/620/101/small/group-of-children-studying-together-smiling-and-holding-books-generated-by-ai-free-photo.jpg?q=tbn:ANd9GcQ28SELqMf_xjvFnRvohJuQIuf0cEKM6K9lmA&s?w=1380&t=st=1710330000~exp=1710330600~hmac=..." 
             className="h-[250px] sm:h-[400px] object-cover object-top drop-shadow-xl mask-image-b"
             alt="Happy Students"
             onError={(e) => (e.target as HTMLImageElement).src = 'https://img.freepik.com/free-photo/group-students-posing-together_23-2148166567.jpg'}
           />
        </div>
        
        {/* Background Shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      </section>

      {/* 2. Law of Success */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-xl sm:text-3xl font-black text-red-600 uppercase tracking-tight">
            CENTUM's Law of Success is your shortcut to great scores
          </h2>
          <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto">
            Experience the Power of CENTUM's Law of Success — a proven strategy from Centum Tuition, the best online and offline tuition centre in Kerala. Designed for CBSE and State syllabus students, it enhances learning, boosts confidence, and ensures top scores. Choose Centum for smart, effective, and result-driven education.
          </p>
        </div>
      </section>

      {/* 3. Text Content Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-6">
             <h3 className="text-2xl font-black text-slate-900">
               A New Turn In <br/> <span className="text-red-600">Edification</span>
             </h3>
             <p className="text-xs sm:text-sm text-slate-600 font-medium leading-loose">
               Experience the CENTUM's transformative education. Book a Free Demo and become part of the 100% satisfied students who've witnessed the transformative power of our educational programs.
             </p>
          </div>
          <div className="space-y-8">
            <div className="space-y-3">
              <h4 className="text-lg font-black text-slate-900">CENTUM: Learning Made Simple</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-loose">
                CENTUM was established with a mission: to offer life-changing tuition for all. This commitment fuels our enthusiasm every day as we strive to revolutionize education in Kerala. We take pride in being the best tuition centre in Ernakulam, supporting students from diverse backgrounds with our comprehensive online & offline tuition services. Our tailored lessons cater to unique needs of the students.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-black text-slate-900">Transformative Education For Your Child:</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-loose">
                At CENTUM, our goal is to provide top-notch education, ensuring that our network of tutors caters to students from every walk of life. We're committed to excellence as the best tuition centre for CBSE syllabus and State syllabus in Kochi, offering unparalleled educational support for students' academic growth. Join us at CENTUM, where our passion for transformative education drives our dedication to being among the top 10 tuition centre in Kerala.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-20 px-6 relative bg-fixed bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"}}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {stats.map((stat, i) => (
             <div key={i} className="bg-white rounded-xl p-6 shadow-2xl flex flex-col gap-3 text-center sm:text-left">
                <h3 className="text-3xl font-black text-red-600">{stat.count}</h3>
                <h4 className="text-sm font-black text-slate-900 uppercase">{stat.label}</h4>
                <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
                  {stat.desc}
                </p>
             </div>
           ))}
        </div>
      </section>

      {/* 5. HODs Section */}
      <section className="py-20 px-6">
         <div className="text-center mb-16 space-y-4 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-100">
            <h2 className="text-3xl font-black text-slate-900">HODs in Academics</h2>
            <div className="inline-block bg-red-600 text-white text-[10px] font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
              State & CBSE
            </div>
         </div>
         
         <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
           {hods.map((hod, i) => (
             <div 
               key={i} 
               className="flex flex-col items-center gap-4 w-[220px] group animate-in slide-in-from-bottom-8 fade-in duration-700"
               style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'both' }}
             >
                <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-lg flex bg-white transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
                   {/* Red strip with star */}
                   <div className="w-12 bg-red-600 h-full flex items-center justify-center shrink-0 relative overflow-hidden">
                      <i className="far fa-star text-white text-xl relative z-10 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-125"></i>
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-white/20 -translate-y-full group-hover:translate-y-full transition-transform duration-700 ease-in-out"></div>
                   </div>
                   {/* Image */}
                   <div className="flex-1 bg-slate-200 relative overflow-hidden">
                      <img 
                        src={hod.image} 
                        alt={hod.name} 
                        className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                   </div>
                </div>
                <div className="text-center transition-transform duration-300 group-hover:translate-y-1">
                   <h4 className="text-lg font-black text-slate-900 uppercase group-hover:text-red-700 transition-colors duration-300">{hod.name}</h4>
                   <p className="text-xs font-bold text-slate-500 uppercase">{hod.role}</p>
                </div>
             </div>
           ))}
         </div>
      </section>

      {/* 6. Personalized Learning */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              Personalized Learning <br/> Experiences:
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-loose">
              At CENTUM, we aim to revolutionize education by providing personalized tuition services for all. This mission drives our passion daily, making us eager to embark on our work. We take pride in being the best tuition centre in Kerala, offering comprehensive online & offline tuition in Kerala, including specialized programs for CBSE and State syllabus in Kochi. Our tailored lessons cater to individual needs and the demanding schedules of students, ensuring a flexible and top-tier educational experience.
            </p>
         </div>
         <div className="relative flex justify-center lg:justify-end">
             {/* Blob Background */}
             <div className="absolute top-0 right-0 w-[110%] h-[110%] bg-[#FFDDAA] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10 -translate-y-10 translate-x-10 sm:translate-x-0"></div>
             <img 
               src="https://lemonlearning.com/hubfs/Imported_Blog_Media/learning-by-doing-1-Jun-13-2025-06-38-38-1126-PM.jpg" 
               alt="Students" 
               className="w-full max-w-md drop-shadow-2xl rounded-lg"
               onError={(e) => (e.target as HTMLImageElement).src = 'https://img.freepik.com/free-photo/two-young-women-students-with-backpacks-books_23-2148166578.jpg'}
             />
         </div>
      </section>

    </div>
  );
};

export default AboutUs;
