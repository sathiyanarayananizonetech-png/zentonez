import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Scissors, Droplets, Calendar as CalendarIcon, Clock, User, Phone, CheckCircle, ChevronLeft, ShieldCheck } from 'lucide-react';

type ServiceType = {
  id: string;
  name: string;
  duration: string;
  price: string;
  icon: React.ReactNode;
};

const SERVICES: ServiceType[] = [
  { id: 'hair-spa', name: 'Artisan Hair Spa', duration: '60 Min', price: '₹1800', icon: <Droplets size={24} /> },
  { id: 'nails', name: 'Designer Nails', duration: '60 Min', price: '₹1500', icon: <Sparkles size={24} /> },
  { id: 'pedicure', name: 'Luxury Pedicure', duration: '45 Min', price: '₹1200', icon: <Droplets size={24} /> },
  { id: 'haircut', name: 'Master Haircut', duration: '60 Min', price: '₹1800', icon: <Scissors size={24} /> },
  { id: 'lice-treatment', name: 'Lice Treatment', duration: '60 Min', price: '₹1000', icon: <ShieldCheck size={24} /> },
  { id: 'coloring', name: 'Global Coloring', duration: '120 Min', price: '₹4000', icon: <Sparkles size={24} /> },
];

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM'
];

interface BookingState {
  service: ServiceType | null;
  date: Date | null;
  time: string | null;
  user: { name: string; phone: string; notes: string };
}

export const BookingSystem: React.FC = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingState>({
    service: null,
    date: null,
    time: null,
    user: { name: '', phone: '', notes: '' }
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  // Step 1: Services
  const renderStep1 = () => (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black italic text-on-surface font-serif uppercase">Select Ritual</h2>
        <p className="text-on-surface/60 text-sm mt-2 font-medium">Choose your transformation journey</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SERVICES.map(service => {
          const isSelected = data.service?.id === service.id;
          return (
            <div
              key={service.id}
              onClick={() => {
                setData({ ...data, service });
                setTimeout(nextStep, 300); // Auto-advance
              }}
              className={`p-5 rounded-3xl cursor-pointer border-2 transition-all duration-300 flex items-center gap-4 ${
                isSelected 
                  ? 'border-primary bg-primary/5 shadow-[0_0_20px_rgba(201,162,74,0.15)]' 
                  : 'border-white/5 bg-on-surface/5 hover:bg-on-surface/10'
              }`}
            >
              <div className={`p-3 rounded-2xl ${isSelected ? 'bg-primary text-background' : 'bg-background text-primary'}`}>
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-on-surface text-lg">{service.name}</h3>
                <div className="flex gap-3 text-xs font-black uppercase tracking-widest text-on-surface/50 mt-1">
                  <span>{service.duration}</span>
                  <span>•</span>
                  <span className="text-primary">{service.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );

  // Step 2: Date
  const renderStep2 = () => {
    // Generate next 14 days
    const days = Array.from({ length: 14 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      return d;
    });

    return (
      <motion.div
        key="step2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black italic text-on-surface font-serif uppercase">Select Date</h2>
          <p className="text-on-surface/60 text-sm mt-2 font-medium">When would you like to visit?</p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {days.map((date, idx) => {
            const isToday = idx === 0;
            const isSelected = data.date?.toDateString() === date.toDateString();
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            const dayNum = date.getDate();
            const month = date.toLocaleDateString('en-US', { month: 'short' });

            return (
              <div
                key={idx}
                onClick={() => {
                  setData({ ...data, date });
                  setTimeout(nextStep, 300);
                }}
                className={`flex flex-col items-center justify-center p-4 rounded-3xl cursor-pointer border-2 transition-all duration-300 ${
                  isSelected 
                    ? 'border-primary bg-primary text-background shadow-luxury-deep' 
                    : 'border-white/5 bg-on-surface/5 text-on-surface hover:bg-on-surface/10'
                }`}
              >
                <span className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isSelected ? 'text-background/80' : 'text-on-surface/50'}`}>
                  {isToday ? 'Today' : dayName}
                </span>
                <span className="text-2xl font-black">{dayNum}</span>
                <span className={`text-xs font-bold uppercase mt-1 ${isSelected ? 'text-background/90' : 'text-primary'}`}>
                  {month}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  // Step 3: Time Slots
  const renderStep3 = () => (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black italic text-on-surface font-serif uppercase">Select Time</h2>
        <p className="text-on-surface/60 text-sm mt-2 font-medium">Available slots for {data.date?.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {TIME_SLOTS.map((time, idx) => {
          const isSelected = data.time === time;
          return (
            <div
              key={idx}
              onClick={() => {
                setData({ ...data, time });
                setTimeout(nextStep, 300);
              }}
              className={`text-center p-4 rounded-2xl cursor-pointer border-2 transition-all duration-300 font-bold tracking-widest text-sm ${
                isSelected 
                  ? 'border-primary bg-primary text-background shadow-[0_0_15px_rgba(201,162,74,0.3)]' 
                  : 'border-white/5 bg-on-surface/5 text-on-surface hover:border-primary/50'
              }`}
            >
              {time}
            </div>
          );
        })}
      </div>
    </motion.div>
  );

  // Step 4: Form
  const renderStep4 = () => (
    <motion.div
      key="step4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black italic text-on-surface font-serif uppercase">Your Details</h2>
        <p className="text-on-surface/60 text-sm mt-2 font-medium">Final step to secure your appointment</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-4">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/40 w-5 h-5" />
            <input 
              type="text" 
              value={data.user.name}
              onChange={e => setData({...data, user: {...data.user, name: e.target.value}})}
              className="w-full bg-on-surface/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-on-surface placeholder:text-on-surface/30 focus:outline-none focus:border-primary transition-colors"
              placeholder="Enter your name"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-4">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/40 w-5 h-5" />
            <input 
              type="tel" 
              value={data.user.phone}
              onChange={e => setData({...data, user: {...data.user, phone: e.target.value}})}
              className="w-full bg-on-surface/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-on-surface placeholder:text-on-surface/30 focus:outline-none focus:border-primary transition-colors"
              placeholder="+91 00000 00000"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-4">Special Requests</label>
          <textarea 
            value={data.user.notes}
            onChange={e => setData({...data, user: {...data.user, notes: e.target.value}})}
            className="w-full bg-on-surface/5 border border-white/10 rounded-2xl py-4 px-5 text-on-surface placeholder:text-on-surface/30 focus:outline-none focus:border-primary transition-colors min-h-[120px] resize-none"
            placeholder="Any specific requests or conditions?"
          />
        </div>
        
        <button 
          onClick={nextStep}
          disabled={!data.user.name || !data.user.phone}
          className="w-full mt-6 bg-primary text-background py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:shadow-[0_0_20px_rgba(201,162,74,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Review Booking
        </button>
      </div>
    </motion.div>
  );

  // Step 5: Summary
  const renderStep5 = () => (
    <motion.div
      key="step5"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h2 className="text-3xl font-black italic text-on-surface font-serif uppercase">Confirm Ritual</h2>
        <p className="text-on-surface/60 text-sm mt-2 font-medium">Please review your selections</p>
      </div>
      
      <div className="bg-on-surface/5 rounded-3xl p-6 sm:p-8 space-y-6 border border-white/5">
        <div className="flex gap-4 items-center pb-6 border-b border-white/10">
          <div className="p-4 bg-primary text-background rounded-2xl">
            {data.service?.icon}
          </div>
          <div>
            <h4 className="text-xl font-bold text-on-surface">{data.service?.name}</h4>
            <p className="text-sm text-primary font-black uppercase tracking-widest mt-1">{data.service?.price} • {data.service?.duration}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-on-surface/80">
            <CalendarIcon className="w-5 h-5 text-primary" />
            <span className="font-medium">{data.date?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-4 text-on-surface/80">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-medium">{data.time}</span>
          </div>
          <div className="flex items-center gap-4 text-on-surface/80">
            <User className="w-5 h-5 text-primary" />
            <span className="font-medium">{data.user.name} ({data.user.phone})</span>
          </div>
        </div>
      </div>

      <button 
        onClick={() => {
          // Placeholder for real submission
          alert('Booking Confirmed! (Mock)');
        }}
        className="w-full bg-primary text-background py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:shadow-[0_0_20px_rgba(201,162,74,0.4)] transition-all flex items-center justify-center gap-2"
      >
        <Sparkles size={18} />
        Confirm Appointment
      </button>
    </motion.div>
  );

  return (
    <div className="max-w-2xl mx-auto w-full bg-surface sm:bg-on-surface/[0.02] sm:border border-white/5 sm:rounded-[3rem] p-4 sm:p-10 shadow-luxury-deep">
      
      {/* Progress Header */}
      <div className="mb-10 flex items-center justify-between">
        {step > 1 && step < 5 ? (
          <button 
            onClick={prevStep}
            className="flex items-center gap-2 text-on-surface/50 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest"
          >
            <ChevronLeft size={16} />
            Back
          </button>
        ) : <div className="w-20"></div>}
        
        <div className="flex gap-2">
          {[1, 2, 3, 4].map(i => (
             <div 
               key={i} 
               className={`h-1.5 rounded-full transition-all duration-300 ${
                 i === step ? 'w-8 bg-primary' : i < step ? 'w-4 bg-primary/50' : 'w-4 bg-on-surface/10'
               }`}
             />
          ))}
        </div>
        <div className="w-20 text-right text-[10px] font-black uppercase tracking-widest text-primary/50">
          Step {Math.min(step, 4)} / 4
        </div>
      </div>

      {/* Main Content Area */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
          {step === 5 && renderStep5()}
        </AnimatePresence>
      </div>

    </div>
  );
};
