
import React, { useState } from 'react';

const OnlineAdmission: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Supabase Configuration
  const SUPABASE_URL = 'https://xhmisvxohwofpzxkizpi.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_n7cCpkRy1wBo95YQHwQykw_gxA98bNd';

  const subjects = [
    'Physics', 'Chemistry', 'Mathematics', 
    'Biology', 'English', 'Hindi'
  ];

  const grades = ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D+'];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // 1. Extract Subject Grades into a JSON object
    const subjectGrades: Record<string, string> = {};
    subjects.forEach(subject => {
      const grade = formData.get(`grade_${subject}`);
      if (grade) subjectGrades[subject] = grade.toString();
    });

    // 2. Determine which class category was selected
    let selectedClass = '';
    let selectedMedium = '';
    ['VIII', 'IX', 'X', '+1', '+2'].forEach(cat => {
      const val = formData.get(`class_${cat}`);
      if (val) {
        selectedClass = cat;
        selectedMedium = val.toString(); // 'MM' or 'EM'
      }
    });

    // Helper to parse integers safely
    const parseSafeInt = (val: any) => {
      const n = parseInt(val as string, 10);
      return isNaN(n) ? null : n;
    };

    // 3. Prepare the Payload for Supabase
    const payload = {
      class_category: selectedClass,
      class_medium: selectedMedium,
      student_name: formData.get('student_name'),
      student_name_malayalam: formData.get('student_name_malayalam'),
      school_name: formData.get('school_name'),
      gender: formData.get('gender'),
      dob_day: parseSafeInt(formData.get('dob_day')),
      dob_month: parseSafeInt(formData.get('dob_month')),
      dob_year: parseSafeInt(formData.get('dob_year')),
      father_name: formData.get('father_name'),
      father_occupation: formData.get('father_occupation'),
      mother_name: formData.get('mother_name'),
      mother_occupation: formData.get('mother_occupation'),
      address: formData.get('address'),
      pin_code: formData.get('pin_code'),
      mobile_whatsapp: formData.get('mobile_whatsapp'),
      mobile_secondary: formData.get('mobile_secondary'),
      email: formData.get('email'),
      relation_with_centum: formData.get('relation_with_centum'),
      preferred_batch: formData.get('batch'),
      subject_grades: subjectGrades
    };

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/centum_admissions`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const err = await response.json();
        throw new Error(err.message || 'Failed to submit application');
      }
    } catch (error: any) {
      console.error('Submission Error:', error);
      alert(`Submission failed: ${error.message}. Please try again or contact support.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8 shadow-xl">
          <i className="fas fa-check text-4xl"></i>
        </div>
        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Application Submitted!</h2>
        <p className="text-slate-500 mt-4 max-w-md mx-auto font-medium">
          Thank you for applying to Centum Academy. Our academic counselors will review your application and contact you within 24 hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-10 bg-slate-900 text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-800 transition-all shadow-xl"
        >
          Fill Another Form
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Form Header Area */}
      <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-slate-200/50">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 border-b border-slate-100 pb-10">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              ACADEMY <span className="text-red-800">CHERPULASSERY</span>
            </h1>
            <h2 className="text-xl font-black text-slate-400 uppercase tracking-[0.2em] border-l-4 border-red-800 pl-4">
              Application Form
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-2 w-full md:w-auto">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Office Use Only</p>
              <p className="text-[10px] font-bold text-slate-300">Admn. No: ____</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Serial No.</p>
              <p className="text-[10px] font-bold text-slate-300">SN: 2025-___</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Class Category Selection */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Select Class Category</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['VIII', 'IX', 'X', '+1', '+2'].map((grade) => (
                <div key={grade} className="flex items-center gap-4 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                  <span className="text-xs font-black text-slate-900 w-10">{grade}</span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group/opt">
                      <input type="radio" name={`class_${grade}`} value="MM" className="w-4 h-4 accent-red-800" />
                      <span className="text-[10px] font-bold text-slate-600 group-hover/opt:text-red-800 transition-colors">MM</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group/opt">
                      <input type="radio" name={`class_${grade}`} value="EM" className="w-4 h-4 accent-red-800" />
                      <span className="text-[10px] font-bold text-slate-600 group-hover/opt:text-red-800 transition-colors">EM</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 1. Student Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-l-4 border-red-800 pl-4">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">1. Student Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">a) Name of Student (Block Letter)</label>
                <input name="student_name" required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none uppercase" placeholder="NAME AS PER RECORDS" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">b) In Malayalam</label>
                <input name="student_name_malayalam" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" placeholder="വിദ്യാർത്ഥിയുടെ പേര്" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">2. Name of School</label>
                <input name="school_name" required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" placeholder="CURRENT SCHOOL NAME" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">3. Gender</label>
                <div className="flex gap-8 px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="gender" value="male" className="w-4 h-4 accent-red-800" />
                    <span className="text-sm font-bold text-slate-700">Male</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="gender" value="female" className="w-4 h-4 accent-red-800" />
                    <span className="text-sm font-bold text-slate-700">Female</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">4. Date of Birth</label>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <input name="dob_day" required type="text" maxLength={2} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-sm font-bold text-center focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" placeholder="DD" />
                  </div>
                  <div className="flex-1">
                    <input name="dob_month" required type="text" maxLength={2} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-sm font-bold text-center focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" placeholder="MM" />
                  </div>
                  <div className="flex-[2]">
                    <input name="dob_year" required type="text" maxLength={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-sm font-bold text-center focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" placeholder="YYYY" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Parent/Occupation Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-l-4 border-red-800 pl-4">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Parental Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">5. Name of Father</label>
                <input name="father_name" required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Father's Occupation</label>
                <input name="father_occupation" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">6. Name of Mother</label>
                <input name="mother_name" required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mother's Occupation</label>
                <input name="mother_occupation" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" />
              </div>
            </div>
          </div>

          {/* Address & Communication */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-l-4 border-red-800 pl-4">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Address & Contact</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">7. Address</label>
                <textarea name="address" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none min-h-[120px]" placeholder="STREET, LOCALITY, TOWN"></textarea>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">PIN Code</label>
                <input name="pin_code" required type="text" maxLength={6} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" placeholder="679503" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">9. a) Mobile No (WhatsApp)</label>
                <input name="mobile_whatsapp" required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" placeholder="+91" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">b) Second Mobile No.</label>
                <input name="mobile_secondary" type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">c) Email ID</label>
                <input name="email" type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" placeholder="student@example.com" />
              </div>
            </div>
          </div>

          {/* Academic & Batch */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-l-4 border-red-800 pl-4">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Academic Details</h3>
            </div>
            
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">10. Relation with Centum (if any)</label>
              <input name="relation_with_centum" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:ring-4 focus:ring-red-800/5 focus:border-red-800 outline-none" placeholder="SIBLING / RELATIVE / ALUMNUS" />
            </div>

            {/* Subject-wise Grade Matrix */}
            <div className="space-y-6 bg-slate-50 p-6 sm:p-8 rounded-[2rem] border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <label className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">11. Subject-wise Grade Obtained (Last Exam)</label>
                <span className="hidden sm:block text-[8px] font-black text-slate-400 uppercase tracking-widest">Scroll to view grades</span>
              </div>
              
              <div className="space-y-4">
                {subjects.map((subject) => (
                  <div key={subject} className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <span className="text-xs font-black text-slate-900 w-28 shrink-0">{subject}</span>
                    <div className="flex-1 overflow-x-auto scrollbar-hide">
                      <div className="flex gap-2 min-w-max">
                        {grades.map((grade) => (
                          <label 
                            key={`${subject}-${grade}`} 
                            className="flex-1 min-w-[45px] sm:min-w-[55px] flex items-center justify-center p-2.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-red-50 hover:border-red-200 transition-all peer-checked:bg-red-800"
                          >
                            <input type="radio" name={`grade_${subject}`} value={grade} className="hidden peer" />
                            <span className="text-[10px] font-black text-slate-500 peer-checked:text-red-800 uppercase">{grade}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">12. Preferred Batch</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex-1 flex items-center justify-between p-5 bg-slate-50 border border-slate-200 rounded-2xl cursor-pointer hover:border-red-800/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-red-800 shadow-sm">
                      <i className="fas fa-sun"></i>
                    </div>
                    <span className="text-sm font-black text-slate-800 uppercase tracking-tight">Morning Batch</span>
                  </div>
                  <input type="radio" name="batch" value="morning" className="w-5 h-5 accent-red-800" />
                </label>
                <label className="flex-1 flex items-center justify-between p-5 bg-slate-50 border border-slate-200 rounded-2xl cursor-pointer hover:border-red-800/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-800 shadow-sm">
                      <i className="fas fa-calendar-star"></i>
                    </div>
                    <span className="text-sm font-black text-slate-800 uppercase tracking-tight">Holiday Batch</span>
                  </div>
                  <input type="radio" name="batch" value="holiday" className="w-5 h-5 accent-red-800" />
                </label>
              </div>
            </div>
          </div>

          {/* Submission Area */}
          <div className="pt-10 border-t border-slate-100">
            <div className="bg-slate-900 rounded-[2rem] p-8 sm:p-12 text-white relative overflow-hidden">
              <div className="relative z-10 space-y-8">
                <div className="flex items-start gap-4">
                  <input required type="checkbox" id="affirmation" className="mt-1.5 w-5 h-5 accent-red-800 shrink-0" />
                  <label htmlFor="affirmation" className="text-sm font-medium text-slate-300 italic">
                    "I affirm that the details shown above are true to the best of my knowledge."
                  </label>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-6">
                  <div className="text-center sm:text-left space-y-1">
                    <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em]">Signature Verification</p>
                    <p className="text-lg font-black text-white uppercase tracking-tight">Digital Submission 2025</p>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-red-800 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-red-800 transition-all shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-circle-notch fa-spin"></i>
                        Processing...
                      </>
                    ) : 'Submit Application'}
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-800/10 rounded-full blur-[100px] pointer-events-none"></div>
            </div>
          </div>
        </form>
      </div>

      {/* Footer Details */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest px-8">
        <p>Place: Cherpulassery</p>
        <p>Date: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default OnlineAdmission;
