import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact & Appointment</h3>
          <p className="max-w-2xl mx-auto text-gray-600">Visit our center or pre-book an appointment for faster service processing.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* Form Side */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-gray-50 hover:bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-gray-50 hover:bg-white" placeholder="+91 Document" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-gray-50 hover:bg-white text-gray-700">
                  <option value="">Select a service</option>
                  <option value="pan">PAN Card Service</option>
                  <option value="aadhaar">Aadhaar Service</option>
                  <option value="banking">Banking/Money Transfer</option>
                  <option value="ticket">Ticket Booking</option>
                  <option value="other">Other Service</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date & Time</label>
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-gray-50 hover:bg-white text-gray-700" />
                  <input type="time" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-gray-50 hover:bg-white text-gray-700" />
                </div>
              </div>

              <button className="w-full bg-brand-blue hover:bg-blue-900 text-white font-semibold py-4 rounded-xl transition-colors shadow-md">
                Confirm Appointment
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="w-full lg:w-1/2 bg-brand-blue text-white p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <h4 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h4>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-orange" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">Our Location</h5>
                  <p className="text-blue-200 leading-relaxed">
                    Bhagwati Digital Common Service Centre<br />
                    Ramanubigha, Mehus,<br />
                    Sheikhpura, Bihar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-brand-orange" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">Call Us</h5>
                  <p className="text-blue-200">+91 8102557161</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="text-[#25D366]" size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">WhatsApp Channel</h5>
                  <a href="https://whatsapp.com/channel/0029VbBSqeREAKWGDYGC5b41" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                    Join our official channel
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-brand-orange" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">Email</h5>
                  <p className="text-blue-200">bhagwatidigitalcsc@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-brand-orange" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">Working Hours</h5>
                  <p className="text-blue-200">Monday – Saturday</p>
                  <p className="text-blue-200">9:00 AM – 7:00 PM</p>
                  <p className="text-red-300 text-sm mt-1">Sunday Closed</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
