
import React from 'react';

const ContactUs: React.FC = () => {
  const mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.91717395048!2d76.3204918748074!3d10.893874389262194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d159a65d087b%3A0x86701f5f9024c6f2!2sCentum%20CPY%20Cherpulassery!5e0!3m2!1sen!2sin!4v1710323386000!5m2!1sen!2sin";
  const mapsUrl = "https://maps.app.goo.gl/dPeJBrxLXknCKTTYA";

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Hero Map Section (Moved to top and made larger) */}
      <section className="w-full h-[450px] sm:h-[500px] lg:h-[60vh] rounded-[3.5rem] overflow-hidden bg-slate-200 border border-slate-100 relative shadow-2xl group/map">
        <iframe 
          src={mapLink}
          className="w-full h-full border-0 grayscale-[15%] group-hover/map:grayscale-0 transition-all duration-700"
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Centum CPY Location Map"
        ></iframe>
        
        {/* Overlay Badges */}
        <div className="absolute top-8 left-8 pointer-events-none flex flex-col gap-3">
          <div className="bg-white/95 backdrop-blur px-5 py-2.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 w-fit">
            <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Visit Our Cherpulassery Campus</span>
          </div>
          <div className="bg-slate-900/95 backdrop-blur px-5 py-2.5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 w-fit">
             <i className="fas fa-map-marker-alt text-red-500 text-xs"></i>
             <span className="text-[10px] font-black uppercase tracking-widest text-white/90">Main Entrance Hub</span>
          </div>
        </div>

        {/* Floating Action Badge */}
        <div className="absolute bottom-8 right-8">
           <a 
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-red-800 text-slate-900 hover:text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl transition-all flex items-center gap-3 border border-slate-200"
           >
             <i className="fas fa-directions"></i>
             Open in Google Maps
           </a>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pt-8">
        {/* Contact Form */}
        <section className="bg-white p-8 sm:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 flex items-center gap-3">
            <i className="fas fa-paper-plane text-red-800"></i>
            Send a Message
          </h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-800/5 focus:border-red-800 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-800/5 focus:border-red-800 transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-800/5 focus:border-red-800 transition-all appearance-none">
                <option>Admission Inquiry</option>
                <option>Scholarship Inquiry</option>
                <option>Career Opportunities</option>
                <option>Others</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
              <textarea className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-800/5 focus:border-red-800 transition-all min-h-[150px]" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full bg-red-800 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-slate-900 transition-all active:scale-95">
              Submit Inquiry
            </button>
          </form>
        </section>

        {/* Office Info */}
        <div className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-blue-50/50 rounded-[2.5rem] border border-blue-100 space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-800 shadow-sm border border-blue-100">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call Us</h4>
                <p className="text-lg font-black text-slate-900 mt-1">+91 7593038781</p>
                <p className="text-xs text-slate-500 font-medium">Available 9am - 7pm</p>
              </div>
            </div>
            <div className="p-8 bg-red-50/50 rounded-[2.5rem] border border-red-100 space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-800 shadow-sm border border-red-100">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Us</h4>
                <p className="text-lg font-black text-slate-900 mt-1">info@centumeducation.in</p>
                <p className="text-xs text-slate-500 font-medium">Response within 24h</p>
              </div>
            </div>
          </div>

          <div className="p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 text-red-500 text-[10px] font-black uppercase tracking-widest">
                <i className="fas fa-map-marker-alt"></i>
                Main Campus
              </div>
              <h3 className="text-2xl font-black tracking-tight leading-tight">Cherpulassery, Palakkad <br/> Kerala, India</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Centum Education, Near Private Bus Stand, Cherpulassery, Palakkad Dist, Kerala - 679503
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-slate-900 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-800 hover:text-white transition-all shadow-lg"
                >
                  View Directions
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-125">
              <i className="fas fa-building text-[10rem]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
