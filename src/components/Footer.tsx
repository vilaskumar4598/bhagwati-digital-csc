import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 inline-flex">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/CSC_Logo.svg/512px-CSC_Logo.svg.png" 
                alt="CSC Logo" 
                className="h-12 w-auto object-contain bg-white rounded-md p-1"
              />
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-white leading-tight">Bhagwati Digital<span className="text-brand-orange">.</span></span>
                <span className="text-xs text-gray-400 font-medium tracking-wide">COMMON SERVICE CENTRE</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for all government and digital services under the Digital India initiative.
            </p>
            <a href="https://whatsapp.com/channel/0029VbBSqeREAKWGDYGC5b41" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm shadow-sm ring-1 ring-[#1DA851]/50">
              <WhatsAppIcon size={18} />
              Join WhatsApp Channel
            </a>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">All Services</a></li>
              <li><a href="#testimonials" className="hover:text-brand-orange transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Top Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Aadhaar Services</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">PAN Card Application</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Ticket Booking</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Money Withdrawal (AEPS)</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Income/Caste Certificate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Important Portals</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Voter Portal (NVSP)</a></li>
              <li><a href="https://digitalindia.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Digital India</a></li>
              <li><a href="https://locator.csccloud.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">CSC Locator</a></li>
              <li><a href="https://myaadhaar.uidai.gov.in/en_IN" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">UIDAI (Aadhaar)</a></li>
              <li><a href="https://onlineservices.proteantech.in/paam/endUserRegisterContact.html" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">NSDL / UTIITSL (PAN)</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bhagwati Digital CSC. All rights reserved.</p>
          <p>CSC ID: 251147740018</p>
        </div>
      </div>
    </footer>
  );
}
