import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Landmark, UserCheck, CreditCard, FileText, FileBadge, 
  CarFront, Book, Plane, Train, 
  Bus, Hotel, Smartphone, Zap, Droplet, 
  Flame, GraduationCap, Medal, FileDown, Camera, 
  Printer, Crop, Wallet, ShieldCheck, ExternalLink, Monitor, BookOpen, Award, Sprout, HeartPulse
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
      { name: 'PM Kisan Portal', icon: <Sprout />, link: 'https://pmkisan.gov.in/' },
      { name: 'DBT Agriculture Bihar', icon: <Sprout />, link: 'https://dbtagriculture.bihar.gov.in/' },
      { name: 'EPFO Member Portal (PF)', icon: <Landmark />, link: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/' },
      { name: 'National Pension System (NPS)', icon: <ShieldCheck />, link: 'https://www.npscra.nsdl.co.in/' },
      { name: 'Atal Pension Yojana (APY)', icon: <HeartPulse />, link: 'https://www.npscra.nsdl.co.in/' },
      { name: 'Voter ID Services', icon: <UserCheck />, link: 'https://voters.eci.gov.in/' },
      { name: 'Passport Application', icon: <Plane />, link: 'https://www.passportindia.gov.in/' },
      { name: 'Income / Caste / Residence (RTPS)', icon: <FileBadge />, link: 'https://serviceonline.bihar.gov.in/' },
      { name: 'Driving License (Parivahan)', icon: <CarFront />, link: 'https://parivahan.gov.in/' },
      { name: 'Ration Card Portal (EPDS)', icon: <Book />, link: 'https://epds.bihar.gov.in/' },
      { name: 'e-Shram Card Portal', icon: <FileText />, link: 'https://eshram.gov.in/' },
    ],
    banking: [
      { name: 'EPFO Passbook & PF Claim', icon: <Landmark />, link: 'https://passbook.epfindia.gov.in/MemberPassBook/Login' },
      { name: 'PM Kisan Samman Nidhi Status', icon: <Sprout />, link: 'https://pmkisan.gov.in/' },
      { name: 'AEPS Money Withdrawal Portal', icon: <Wallet />, link: 'https://digitalseva.csc.gov.in/' },
      { name: 'CSC Money Transfer', icon: <CreditCard />, link: 'https://digitalseva.csc.gov.in/' },
      { name: 'Bank Account Opening', icon: <Landmark />, link: 'https://digitalseva.csc.gov.in/' },
      { name: 'PMJJBY & PMSBY Insurance', icon: <ShieldCheck />, link: 'https://www.jansuraksha.gov.in/' },
      { name: 'Jan Samarth Loan Portal', icon: <Landmark />, link: 'https://www.jansamarth.in/' },
      { name: 'Free CIBIL Score Check', icon: <FileText />, link: 'https://www.cibil.com/' },
    ],
    online: [
      { name: 'Railway Ticket Booking (IRCTC)', icon: <Train />, link: 'https://www.irctc.co.in/' },
      { name: 'Flight Ticket Booking', icon: <Plane />, link: 'https://www.air.irctc.co.in/' },
      { name: 'Bus Ticket Booking (RedBus)', icon: <Bus />, link: 'https://www.redbus.in/' },
      { name: 'Hotel Booking Portal', icon: <Hotel />, link: 'https://www.hotel.irctc.co.in/' },
      { name: 'Mobile Recharge Online', icon: <Smartphone />, link: 'https://paytm.com/recharge' },
      { name: 'DTH Recharge Online', icon: <Monitor />, link: 'https://paytm.com/dth-recharge' },
      { name: 'Electricity Bill (NBPDCL)', icon: <Zap />, link: 'https://www.nbpdcl.co.in/' },
      { name: 'Electricity Bill (SBPDCL)', icon: <Zap />, link: 'https://www.sbpdcl.co.in/' },
      { name: 'LPG Gas Booking (HP/Indane)', icon: <Flame />, link: 'https://myhpgas.in/' },
    ],
    education: [
      { name: 'Online Admission Form (OFSS)', icon: <GraduationCap />, link: 'https://www.ofssbihar.org/' },
      { name: 'Exam Form Fill-Up Portal', icon: <FileText />, link: 'https://biharboardonline.bihar.gov.in/' },
      { name: 'Admit Card Print Portal', icon: <Printer />, link: 'https://biharboardonline.bihar.gov.in/' },
      { name: 'Result Download Portal', icon: <FileDown />, link: 'https://results.biharboardonline.bihar.gov.in/' },
      { name: 'Bihar Post Matric Scholarship', icon: <Medal />, link: 'https://pmsonline.bih.nic.in/' },
      { name: 'National Scholarship Portal (NSP)', icon: <Award />, link: 'https://scholarships.gov.in/' },
      { name: 'Bihar Student Credit Card', icon: <CreditCard />, link: 'https://www.7nishchayyuvaupsham.bihar.gov.in/' },
      { name: 'DigiLocker Marksheet Download', icon: <FileDown />, link: 'https://digilocker.gov.in/' },
      { name: 'SWAYAM Online Courses', icon: <BookOpen />, link: 'https://swayam.gov.in/' },
      { name: 'IGNOU Online Admission', icon: <GraduationCap />, link: 'https://ignouadmission.samarth.edu.in/' },
    ],
    digital: [
      { name: 'Passport Size Photo Maker', icon: <Camera />, link: 'https://www.cutout.pro/passport-photo-maker' },
      { name: 'Digital Seva CSC Portal', icon: <FileText />, link: 'https://digitalseva.csc.gov.in/' },
      { name: 'iLovePDF Tools & Editor', icon: <Printer />, link: 'https://www.ilovepdf.com/' },
      { name: 'Canva Online Resume Maker', icon: <FileText />, link: 'https://www.canva.com/resumes/templates/' },
      { name: 'Adobe PDF Merge & Scanner', icon: <Crop />, link: 'https://www.adobe.com/acrobat/online/merge-pdf.html' },
      { name: 'Order Aadhaar PVC Card', icon: <CreditCard />, link: 'https://myaadhaar.uidai.gov.in/genricPVC' },
      { name: 'Canva Free Logo Maker', icon: <Crop />, link: 'https://www.canva.com/create/logos/' },
      { name: 'Remove BG Background Remover', icon: <Crop />, link: 'https://www.remove.bg/' },
    ]
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-2">What We Offer</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h3>
          <p className="max-w-2xl mx-auto text-gray-600">Access a wide range of government, financial, and digital services directly online.</p>
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
                  target="_blank"
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
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-brand-orange shrink-0" />
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}