import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Landmark, UserCheck, CreditCard, FileText, FileBadge, 
  CarFront, Book, Plane, Train, 
  Bus, Hotel, Smartphone, Zap, Droplet, 
  Flame, GraduationCap, Medal, FileDown, Camera, 
  Printer, Crop, Wallet, ShieldCheck, ExternalLink
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('government');

  const categories = [
    { id: 'government', name: 'Government' },
    { id: 'banking', name: 'Banking & Financial' },
    { id: 'online', name: 'Online Services' },
    { id: 'education', name: 'Education' },
    { id: 'digital', name: 'Digital Services' },
  ];

  const servicesData: Record<string, {name: string, icon: any, link: string}[]> = {
    government: [
      { name: 'Aadhaar Update & Print', icon: <UserCheck />, link: 'https://myaadhaar.uidai.gov.in/' },
      { name: 'PAN Card Apply/Correction', icon: <CreditCard />, link: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html' },
      { name: 'Voter ID Services', icon: <UserCheck />, link: 'https://voters.eci.gov.in/' },
      { name: 'Passport Application', icon: <Plane />, link: 'https://www.passportindia.gov.in/' },
      { name: 'Birth & Death Certificate', icon: <FileText />, link: 'https://crsorgi.gov.in/' },
      { name: 'Income Certificate', icon: <FileBadge />, link: 'https://serviceonline.bihar.gov.in/' },
      { name: 'Caste Certificate', icon: <FileBadge />, link: 'https://serviceonline.bihar.gov.in/' },
      { name: 'Residential Certificate', icon: <FileBadge />, link: 'https://serviceonline.bihar.gov.in/' },
      { name: 'Driving License Services', icon: <CarFront />, link: 'https://parivahan.gov.in/' },
      { name: 'Ration Card Services', icon: <Book />, link: 'https://epds.bihar.gov.in/' },
    ],
    banking: [
      { name: 'AEPS Money Withdrawal', icon: <Wallet />, link: '#contact' },
      { name: 'Money Transfer', icon: <CreditCard />, link: '#contact' },
      { name: 'Mini Statement', icon: <FileText />, link: '#contact' },
      { name: 'Bank Account Opening', icon: <Landmark />, link: '#contact' },
      { name: 'PMJJBY & PMSBY', icon: <ShieldCheck />, link: '#contact' },
      { name: 'Atal Pension Yojana', icon: <ShieldCheck />, link: '#contact' },
      { name: 'Loan Assistance', icon: <Landmark />, link: '#contact' },
    ],
    online: [
      { name: 'Railway Ticket Booking', icon: <Train />, link: 'https://www.irctc.co.in/' },
      { name: 'Flight Ticket Booking', icon: <Plane />, link: 'https://www.irctc.co.in/' },
      { name: 'Bus Ticket Booking', icon: <Bus />, link: 'https://www.redbus.in/' },
      { name: 'Hotel Booking', icon: <Hotel />, link: '#contact' },
      { name: 'Mobile Recharge', icon: <Smartphone />, link: '#contact' },
      { name: 'DTH Recharge', icon: <Monitor />, link: '#contact' },
      { name: 'Electricity Bill Payment', icon: <Zap />, link: 'https://www.nbpdcl.co.in/' },
      { name: 'Water Bill Payment', icon: <Droplet />, link: '#contact' },
      { name: 'Gas Booking', icon: <Flame />, link: '#contact' },
    ],
    education: [
      { name: 'Online Admission Forms', icon: <GraduationCap />, link: '#contact' },
      { name: 'Scholarship Forms', icon: <Medal />, link: 'https://pmsonline.bih.nic.in/' },
      { name: 'Exam Form Fill-up', icon: <FileText />, link: '#contact' },
      { name: 'Result Download', icon: <FileDown />, link: '#contact' },
      { name: 'Admit Card Print', icon: <Printer />, link: '#contact' },
      { name: 'Online Courses Registration', icon: <Monitor />, link: '#contact' },
    ],
    digital: [
      { name: 'Passport Size Photo', icon: <Camera />, link: '#contact' },
      { name: 'Lamination', icon: <FileText />, link: '#contact' },
      { name: 'Xerox & Printing', icon: <Printer />, link: '#contact' },
      { name: 'Resume/CV Making', icon: <FileText />, link: '#contact' },
      { name: 'Document Scanning', icon: <Crop />, link: '#contact' },
      { name: 'PVC Card Printing', icon: <CreditCard />, link: '#contact' },
      { name: 'Website Design', icon: <Monitor />, link: '#contact' },
      { name: 'Logo Design', icon: <Crop />, link: '#contact' },
    ]
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-2">What We Offer</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h3>
          <p className="max-w-2xl mx-auto text-gray-600">Access a wide range of government, financial, and digital services in one place securely and affordably.</p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === cat.id 
                  ? 'bg-brand-blue text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {servicesData[activeTab].map((service, idx) => (
                <a 
                  key={idx}
                  href={service.link}
                  target={service.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-lg flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <div className="w-6 h-6 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                    <span className="font-medium text-gray-800 group-hover:text-brand-orange transition-colors">{service.name}</span>
                  </div>
                  {service.link.startsWith('http') && (
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-brand-orange shrink-0" />
                  )}
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Monitor(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
}