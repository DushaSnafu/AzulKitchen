"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";
import { ArrowLeft, Calendar, Clock, CreditCard, Lock, CheckCircle, Activity } from "lucide-react";
import Link from "next/link";

export default function ContactBooking() {
    const [selectedService, setSelectedService] = useState<{name: string, price: number, duration: string}>({ name: "Consultation Express", price: 90, duration: "45 min" });
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [paymentState, setPaymentState] = useState<"idle" | "processing" | "success">("idle");

    const services = [
        { name: "Consultation Express", duration: "45 min", price: 90 },
        { name: "Programme Complet", duration: "1h30 + Suivi 3 mois", price: 300 }
    ];

    // Generate dates for the calendar (next 5 days)
    const dates = Array.from({ length: 5 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i + 1); // Start tomorrow
        return d;
    });

    const timeSlots = ["09:00", "11:30", "14:00", "16:30"];

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setPaymentState("processing");
        // Simulate network request
        setTimeout(() => {
            setPaymentState("success");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    };

    return (
        <main className="bg-[var(--color-brand-cream)] min-h-screen font-sans text-[var(--color-brand-blue)]">
            <Navbar />

            <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-[var(--color-brand-blue)] hover:text-[var(--color-brand-green)] transition mb-12 font-bold">
                    <ArrowLeft className="w-5 h-5" /> Retour
                </Link>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                        Réservation de Diagnostic
                    </h1>
                    <p className="text-lg opacity-80 max-w-2xl mx-auto">
                        Sélectionnez un créneau pour votre première consultation en visioconférence.
                    </p>
                </div>

                {paymentState === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-2xl mx-auto text-center bg-white p-16 rounded-[3rem] shadow-2xl border border-[var(--color-brand-green)]/20"
                    >
                        <div className="w-24 h-24 bg-[var(--color-brand-green)]/10 text-[var(--color-brand-green)] rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle className="w-12 h-12" />
                        </div>
                        <h2 className="text-3xl font-bold font-[family-name:var(--font-seasons)] mb-4 text-[var(--color-brand-green)]">
                            Consultation confirmée !
                        </h2>
                        <p className="opacity-80 mb-8 text-lg">
                            Vous recevrez un courriel avec le lien sécurisé pour notre visioconférence prévue le <strong>{dates[selectedDate!].toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {selectedTime}</strong>.
                        </p>
                        <Link href="/" className="px-8 py-4 bg-[var(--color-brand-blue)] text-[var(--color-brand-cream)] rounded-full font-bold inline-flex transition hover:scale-105 shadow-xl">
                            Retour à l'accueil
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* LEFT: Calendar Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-[var(--color-brand-blue)]/5"
                        >
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-seasons)] mb-6 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-[var(--color-brand-gold)]" /> 1. Choisissez votre service
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {services.map((service, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedService(service)}
                                        className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                                            selectedService.name === service.name
                                                ? "border-[var(--color-brand-blue)] bg-[var(--color-brand-blue)] text-[var(--color-brand-cream)] shadow-lg"
                                                : "border-[var(--color-brand-blue)]/10 hover:border-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)]/5"
                                        }`}
                                    >
                                        <div className="font-bold">{service.name}</div>
                                        <div className="text-sm opacity-80">{service.duration}</div>
                                        <div className="mt-2 font-bold text-lg">{service.price} €</div>
                                    </button>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold font-[family-name:var(--font-seasons)] mb-6 flex items-center gap-3">
                                <Calendar className="w-6 h-6 text-[var(--color-brand-gold)]" /> 2. Choisissez une date
                            </h3>
                            
                            <div className="grid grid-cols-5 gap-2 mb-10">
                                {dates.map((date, index) => (
                                    <button
                                        key={index}
                                        onClick={() => { setSelectedDate(index); setSelectedTime(null); }}
                                        className={`py-4 px-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border-2 ${
                                            selectedDate === index
                                                ? "border-[var(--color-brand-blue)] bg-[var(--color-brand-blue)] text-[var(--color-brand-cream)] shadow-lg scale-105"
                                                : "border-[var(--color-brand-blue)]/10 hover:border-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)]/10"
                                        }`}
                                    >
                                        <span className="text-sm opacity-80 mb-1 capitalize">
                                            {date.toLocaleDateString('fr-FR', { weekday: 'short' })}
                                        </span>
                                        <span className="text-2xl font-bold">
                                            {date.getDate()}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <div className={`transition-all duration-500 ${selectedDate !== null ? "opacity-100" : "opacity-30 pointer-events-none"}`}>
                                <h3 className="text-2xl font-bold font-[family-name:var(--font-seasons)] mb-6 flex items-center gap-3">
                                    <Clock className="w-6 h-6 text-[var(--color-brand-gold)]" /> 3. L'heure de la visio
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            disabled={selectedDate === null}
                                            onClick={() => setSelectedTime(time)}
                                            className={`py-4 rounded-xl font-bold transition-all duration-300 border-2 ${
                                                selectedTime === time
                                                    ? "border-[var(--color-brand-blue)] bg-[var(--color-brand-blue)] text-[var(--color-brand-cream)] shadow-lg"
                                                    : "border-[var(--color-brand-blue)]/10 hover:border-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)]/5"
                                            }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT: Stripe Mock Payment */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`transition-all duration-500 ${selectedTime !== null ? "opacity-100" : "opacity-30 pointer-events-none"}`}
                        >
                            <div className="bg-[#fcfdfd] p-8 rounded-[2.5rem] shadow-2xl border border-[var(--color-brand-blue)]/10 h-full relative overflow-hidden">
                                <h3 className="text-2xl font-bold font-[family-name:var(--font-seasons)] mb-8 flex items-center gap-3">
                                    <CreditCard className="w-6 h-6 text-[#635BFF]" /> Paiement Sécurisé
                                </h3>

                                <div className="mb-8 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm flex justify-between items-center">
                                    <div>
                                        <h4 className="font-bold">{selectedService.name}</h4>
                                        <p className="text-sm opacity-60">Durée : {selectedService.duration}</p>
                                    </div>
                                    <div className="text-2xl font-bold">{selectedService.price} €</div>
                                </div>

                                <form onSubmit={handlePayment} className="space-y-6 relative">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-bold opacity-70 mb-2">Email</label>
                                            <input 
                                                type="email" 
                                                required 
                                                placeholder="vous@email.com" 
                                                disabled={selectedTime === null}
                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#635BFF] focus:ring-1 focus:ring-[#635BFF] transition"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold opacity-70 mb-2">Informations de carte</label>
                                            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#635BFF] focus-within:ring-1 focus-within:ring-[#635BFF] transition">
                                                <div className="px-4 py-3 flex items-center gap-3 border-b border-gray-100">
                                                    <CreditCard className="w-5 h-5 opacity-40" />
                                                    <input 
                                                        type="text" 
                                                        disabled={selectedTime === null}
                                                        placeholder="4242 4242 4242 4242" 
                                                        className="w-full focus:outline-none bg-transparent font-mono"
                                                    />
                                                </div>
                                                <div className="flex">
                                                    <input 
                                                        type="text" 
                                                        placeholder="MM/AA" 
                                                        disabled={selectedTime === null}
                                                        className="w-1/2 px-4 py-3 focus:outline-none bg-transparent border-r border-gray-100 font-mono"
                                                    />
                                                    <input 
                                                        type="text" 
                                                        placeholder="CVC" 
                                                        disabled={selectedTime === null}
                                                        className="w-1/2 px-4 py-3 focus:outline-none bg-transparent font-mono"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold opacity-70 mb-2">Nom sur la carte</label>
                                            <input 
                                                type="text" 
                                                required 
                                                disabled={selectedTime === null}
                                                placeholder="Jean Dupont" 
                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#635BFF] focus:ring-1 focus:ring-[#635BFF] transition"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-6">
                                        <Lock className="w-3 h-3" /> Paiement chiffré par Stripe
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={selectedTime === null || paymentState === "processing"}
                                        className={`w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 text-white transition-all shadow-md ${
                                            paymentState === "processing" ? "bg-[#3f39af] cursor-wait" : "bg-[#635BFF] hover:bg-[#524BDE] hover:shadow-xl hover:-translate-y-1"
                                        }`}
                                    >
                                        {paymentState === "processing" ? (
                                            <span className="flex items-center gap-2">Traitement en cours...</span>
                                        ) : (
                                            <>Payer {selectedService.price},00 €</>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>

            <FooterCTA />
        </main>
    );
}
