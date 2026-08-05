import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Landmark, UserCheck, CreditCard, FileText, FileBadge, 
  CarFront, Book, CheckCircle, Plane, Train, 
  Bus, Hotel, Smartphone, Zap, Droplet, 
  Flame, GraduationCap, Medal, FileDown, Camera, 
  Printer, Crop, Wallet, ShieldCheck
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

  const servicesData: Record<string, {name: string, icon: any}[]> = {
    government: [
      { name: 'Aadhaar Update & Print', icon: <UserCheck /> },
      { name: 'PAN Card Apply/Correction', icon: <CreditCard /> },
      { name: 'Voter ID Services', icon: <UserCheck /> },
      { name: 'Passport Application', icon: <Plane /> },
      { name: 'Birth & Death Certificate', icon: <FileText /> },
      { name: 'Income Certificate', icon: <FileBadge /> },
      { name: 'Caste Certificate', icon: <FileBadge /> },
      { name: 'Residential Certificate', icon: <FileBadge /> },
      { name: 'Driving License Services', icon: <CarFront /> },
      { name: 'Ration Card Services', icon: <Book /> },
    ],
    banking: [
      { name: 'AEPS Money Withdrawal', icon: <Wallet /> },
      { name: 'Money Transfer', icon: <CreditCard /> },
      { name: 'Mini Statement', icon: <FileText /> },
      { name: 'Bank Account Opening', icon: <Landmark /> },
      { name: 'PMJJBY & PMSBY', icon: <ShieldCheck /> },
      { name: 'Atal Pension Yojana', icon: <ShieldCheck /> },
      { name: 'Loan Assistance', icon: <Landmark /> },
    ],
    online: [
      { name: 'Railway Ticket Booking', icon: <Train /> },
      { name: 'Flight Ticket Booking', icon: <Plane /> },
      { name: 'Bus Ticket Booking', icon: <Bus /> },
      { name: 'Hotel Booking', icon: <Hotel /> },
      { name: 'Mobile Recharge', icon: <Smartphone /> },
      { name: 'DTH Recharge', icon: <Monitor /> },
      { name: 'Electricity Bill Payment', icon: <Zap /> },
      { name: 'Water Bill Payment', icon: <Droplet /> },
      { name: 'Gas Booking', icon: <Flame /> },
    ],
    education: [
      { name: 'Online Admission Forms', icon: <GraduationCap /> },
      { name: 'Scholarship Forms', icon: <Medal /> },
      { name: 'Exam Form Fill-up', icon: <FileText /> },
      { name: 'Result Download', icon: <FileDown /> },
      { name: 'Admit Card Print', icon: <Printer /> },
      { name: 'Online Courses Registration', icon: <Monitor /> },
    ],
    digital: [
      { name: 'Passport Size Photo', icon: <Camera /> },
      { name: 'Lamination', icon: <FileText /> },
      { name: 'Xerox & Printing', icon: <Printer /> },
      { name: 'Resume/CV Making', icon: <FileText /> },
      { name: 'Document Scanning', icon: <Crop /> },
      { name: 'PVC Card Printing', icon: <CreditCard /> },
      { name: 'Website Design', icon: <Monitor /> },
      { name: 'Logo Design', icon: <Crop /> },
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
                <div 
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 group cursor-default"
                >
                  <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-lg flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    {/* Render icon with standard size */}
                    <div className="w-6 h-6 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">{service.name}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Quick fallback for Monitor icon which wasn't fully imported in the right place potentially
function Monitor(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
}
