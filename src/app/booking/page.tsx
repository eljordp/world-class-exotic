"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DatePicker from "@/components/DatePicker";
import { cars } from "@/data/cars";

type FormData = {
  // Step 1
  vehicle: string;
  pickupDate: string;
  returnDate: string;
  serviceType: string;
  delivery: boolean;
  deliveryAddress: string;
  needsInsurance: boolean;
  // Step 2
  name: string;
  phone: string;
  email: string;
  age: string;
  // Step 3
  license: File | null;
  insurance: File | null;
  notes: string;
};

const STEPS = ["Your Ride", "Your Info", "Documents"];

const inputClass =
  "w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors placeholder:text-white/20";
const selectClass =
  "w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showInsuranceExample, setShowInsuranceExample] = useState(false);
  const [licenseFileName, setLicenseFileName] = useState("");
  const [insuranceFileName, setInsuranceFileName] = useState("");
  const [blockedDates, setBlockedDates] = useState<string[]>([]);

  const [form, setForm] = useState<FormData>({
    vehicle: "",
    pickupDate: "",
    returnDate: "",
    serviceType: "Drive It Yourself",
    delivery: false,
    deliveryAddress: "",
    needsInsurance: false,
    name: "",
    phone: "",
    email: "",
    age: "",
    license: null,
    insurance: null,
    notes: "",
  });

  const selectedCar = cars.find((c) => c.id === form.vehicle);
  const days =
    form.pickupDate && form.returnDate
      ? Math.max(
          1,
          Math.ceil(
            (new Date(form.returnDate).getTime() -
              new Date(form.pickupDate).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : null;
  const total = selectedCar && days
    ? selectedCar.dailyRate * days + (form.delivery ? 150 : 0)
    : null;

  function set<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function fetchAvailability(vehicleId: string) {
    if (!vehicleId) { setBlockedDates([]); return; }
    try {
      const res = await fetch(`/api/availability?vehicleId=${vehicleId}`);
      const data = await res.json();
      setBlockedDates(data.blockedDates ?? []);
    } catch {
      setBlockedDates([]);
    }
  }

  function validateStep1() {
    return form.vehicle && form.pickupDate && form.returnDate;
  }

  function validateStep2() {
    return form.name && form.phone && form.email && form.age;
  }

  async function handleSubmit() {
    setLoading(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, val]) => {
      if (val instanceof File) formData.append(key, val);
      else if (val !== null && val !== undefined) formData.append(key, String(val));
    });

    try {
      await fetch("/api/booking", { method: "POST", body: formData });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 section-darker min-h-screen">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-10">
              <div className="gold-line mx-auto mb-6" />
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl tracking-wider mb-3">
                BOOK YOUR <span className="text-gradient-gold">RIDE</span>
              </h1>
              <p className="text-text-muted">
                We&apos;ll confirm availability and send your contract within hours.
              </p>
            </div>

            {submitted ? (
              /* Success */
              <div className="bg-dark-card border border-dark-border p-12 text-center">
                <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider mb-3">
                  REQUEST RECEIVED
                </h2>
                <p className="text-text-muted mb-2">We&apos;ll confirm availability and reach out shortly.</p>
                <p className="text-text-muted mb-8">For faster confirmation, reach out directly.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+1XXXXXXXXXX" className="btn-gold">Call Us Now</a>
                  <a href="https://instagram.com/worldclassexotic" target="_blank" rel="noopener noreferrer" className="btn-outline">
                    DM on Instagram
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-dark-card border border-dark-border">

                {/* Step progress bar */}
                <div className="flex border-b border-dark-border">
                  {STEPS.map((label, i) => {
                    const n = i + 1;
                    const active = step === n;
                    const done = step > n;
                    return (
                      <div key={label} className="flex-1 relative">
                        <div className={`flex flex-col items-center gap-1 py-5 px-2 transition-colors ${active ? "bg-dark-lighter" : ""}`}>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${done ? "bg-gold text-black" : active ? "border-2 border-gold text-gold" : "border border-dark-border text-white/30"}`}>
                            {done ? (
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : n}
                          </div>
                          <span className={`text-xs tracking-widest uppercase font-medium hidden sm:block ${active ? "text-white" : done ? "text-gold" : "text-white/25"}`}>
                            {label}
                          </span>
                        </div>
                        {/* connector line */}
                        {i < STEPS.length - 1 && (
                          <div className={`absolute top-1/2 right-0 w-full h-px -translate-y-1/2 ${done ? "bg-gold/40" : "bg-dark-border"}`} style={{ left: "50%", width: "50%" }} />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="p-8 md:p-10">

                  {/* ── STEP 1: THE RIDE ── */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label className="text-sm text-text-muted block mb-2">Vehicle *</label>
                        <select
                          value={form.vehicle}
                          onChange={(e) => {
                            set("vehicle", e.target.value);
                            set("pickupDate", "");
                            set("returnDate", "");
                            fetchAvailability(e.target.value);
                          }}
                          className={selectClass}
                        >
                          <option value="">Select a vehicle</option>
                          <optgroup label="Los Angeles">
                            {cars.filter((c) => c.location === "los-angeles").map((c) => (
                              <option key={c.id} value={c.id}>{c.name} — ${c.dailyRate}/day</option>
                            ))}
                          </optgroup>
                          <optgroup label="Bay Area">
                            {cars.filter((c) => c.location === "bay-area").map((c) => (
                              <option key={c.id} value={c.id}>{c.name} — ${c.dailyRate}/day</option>
                            ))}
                          </optgroup>
                        </select>
                      </div>

                      {/* Selected car preview */}
                      {selectedCar && (
                        <div className="flex items-center gap-4 p-4 border border-gold/20 bg-dark">
                          {selectedCar.image.startsWith("http") && (
                            <div className="relative w-24 h-16 shrink-0 overflow-hidden">
                              <Image src={selectedCar.image} alt={selectedCar.name} fill className="object-cover" sizes="96px" />
                            </div>
                          )}
                          <div>
                            <p className="font-[family-name:var(--font-heading)] tracking-wider text-white">{selectedCar.name}</p>
                            <p className="text-text-muted text-sm">{selectedCar.specs.year} · {selectedCar.specs.horsepower}hp · {selectedCar.specs.engine}</p>
                            <p className="text-gold text-sm font-medium">${selectedCar.dailyRate.toLocaleString()}/day</p>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <DatePicker
                          label="Pickup Date *"
                          value={form.pickupDate}
                          onChange={(v) => {
                            set("pickupDate", v);
                            if (form.returnDate && v > form.returnDate) set("returnDate", "");
                          }}
                          minDate={new Date().toISOString().split("T")[0]}
                          blockedDates={blockedDates}
                        />
                        <DatePicker
                          label="Return Date *"
                          value={form.returnDate}
                          onChange={(v) => set("returnDate", v)}
                          minDate={form.pickupDate || new Date().toISOString().split("T")[0]}
                          blockedDates={blockedDates}
                        />
                      </div>

                      <div>
                        <label className="text-sm text-text-muted block mb-2">Service Type</label>
                        <div className="grid grid-cols-2 gap-2">
                          {["Drive It Yourself", "Chauffeur", "Wedding", "Airport Transfer"].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => set("serviceType", type)}
                              className={`px-4 py-3 text-sm tracking-wider border transition-all ${form.serviceType === type ? "border-gold text-gold bg-gold/5" : "border-dark-border text-white/40 hover:border-white/30 hover:text-white/60"}`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Delivery <span className="text-gold">+$150</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => set("delivery", !form.delivery)}
                          className={`flex items-center gap-3 w-full px-4 py-3 border transition-all text-left ${form.delivery ? "border-gold bg-gold/5" : "border-dark-border hover:border-white/30"}`}
                        >
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all ${form.delivery ? "border-gold bg-gold" : "border-white/30"}`}>
                            {form.delivery && (
                              <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-sm transition-colors ${form.delivery ? "text-white" : "text-white/50"}`}>
                            Deliver to my location (hotel, airport, etc.)
                          </span>
                        </button>
                        {form.delivery && (
                          <input
                            type="text"
                            value={form.deliveryAddress}
                            onChange={(e) => set("deliveryAddress", e.target.value)}
                            placeholder="Hotel name, address, or airport"
                            className={`${inputClass} mt-2`}
                          />
                        )}
                      </div>

                      {/* Insurance purchase */}
                      <div>
                        <label className="text-sm text-text-muted block mb-2">Insurance</label>
                        <button
                          type="button"
                          onClick={() => set("needsInsurance", !form.needsInsurance)}
                          className={`flex items-center gap-3 w-full px-4 py-3 border transition-all text-left ${form.needsInsurance ? "border-gold bg-gold/5" : "border-dark-border hover:border-white/30"}`}
                        >
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all ${form.needsInsurance ? "border-gold bg-gold" : "border-white/30"}`}>
                            {form.needsInsurance && (
                              <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-sm transition-colors ${form.needsInsurance ? "text-white" : "text-white/50"}`}>
                            I need to purchase insurance for this rental
                          </span>
                        </button>
                        {form.needsInsurance && (
                          <p className="text-xs text-text-muted mt-2 px-1">
                            No problem — we&apos;ll include insurance options with your booking confirmation.
                          </p>
                        )}
                      </div>

                      {/* Cost preview */}
                      {total && (
                        <div className="border border-dark-border p-4 bg-dark">
                          <div className="flex justify-between text-sm text-text-muted mb-1">
                            <span>${selectedCar!.dailyRate.toLocaleString()}/day × {days} day{days !== 1 ? "s" : ""}</span>
                            <span>${(selectedCar!.dailyRate * days!).toLocaleString()}</span>
                          </div>
                          {form.delivery && (
                            <div className="flex justify-between text-sm text-text-muted mb-1">
                              <span>Delivery fee</span>
                              <span>$150</span>
                            </div>
                          )}
                          <div className="flex justify-between font-[family-name:var(--font-heading)] tracking-wider text-gold border-t border-dark-border pt-2 mt-2">
                            <span>ESTIMATED TOTAL</span>
                            <span>${total.toLocaleString()}</span>
                          </div>
                          <p className="text-white/30 text-xs mt-1">Deposit required to confirm. Full amount due at pickup.</p>
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!validateStep1()}
                        className="btn-gold w-full disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        Continue — Your Info
                        <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {/* ── STEP 2: YOUR INFO ── */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                          <label className="text-sm text-text-muted block mb-2">Full Name *</label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => set("name", e.target.value)}
                            className={inputClass}
                            placeholder="First and last name"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-text-muted block mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => set("phone", e.target.value)}
                            className={inputClass}
                            placeholder="(555) 000-0000"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-text-muted block mb-2">Age *</label>
                          <input
                            type="number"
                            value={form.age}
                            onChange={(e) => set("age", e.target.value)}
                            className={inputClass}
                            placeholder="Must be 21+"
                            min="21"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="text-sm text-text-muted block mb-2">Email *</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => set("email", e.target.value)}
                            className={inputClass}
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button type="button" onClick={() => setStep(1)} className="btn-outline flex-1">
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          disabled={!validateStep2()}
                          className="btn-gold flex-1 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          Continue — Documents
                          <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 3: DOCUMENTS ── */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <p className="text-text-muted text-sm">
                        Upload now to speed up your booking — or bring them at pickup. JPG, PNG, or PDF.
                      </p>

                      {/* Driver's License */}
                      <div>
                        <label className="text-sm text-text-muted block mb-2">Driver&apos;s License</label>
                        <label className={`flex flex-col items-center justify-center w-full h-32 border border-dashed cursor-pointer transition-all bg-dark group ${licenseFileName ? "border-gold/50 bg-gold/5" : "border-dark-border hover:border-gold/40"}`}>
                          {licenseFileName ? (
                            <>
                              <svg className="w-7 h-7 text-gold mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-white/70">{licenseFileName}</span>
                              <span className="text-xs text-text-muted mt-1">Click to change</span>
                            </>
                          ) : (
                            <>
                              <svg className="w-8 h-8 text-white/20 group-hover:text-gold/50 transition-colors mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="text-sm text-text-muted group-hover:text-white/60 transition-colors">Click to upload</span>
                            </>
                          )}
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            className="hidden"
                            onChange={(e) => {
                              const f = e.target.files?.[0] ?? null;
                              set("license", f);
                              setLicenseFileName(f?.name ?? "");
                            }}
                          />
                        </label>
                      </div>

                      {/* Insurance Policy Card */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <label className="text-sm text-text-muted">Insurance Policy Card</label>
                          <button
                            type="button"
                            onClick={() => setShowInsuranceExample((v) => !v)}
                            className="text-xs text-gold/70 hover:text-gold underline transition-colors"
                          >
                            What&apos;s this?
                          </button>
                        </div>
                        {showInsuranceExample && (
                          <div className="mb-3 p-3 border border-dark-border bg-dark text-xs">
                            <p className="text-white/70 mb-2 font-medium">This is your insurance policy card:</p>
                            <div className="border border-dark-border bg-dark-card p-3 font-mono text-[11px] leading-5">
                              <div className="text-white/40 mb-1">AUTO INSURANCE ID CARD</div>
                              <div><span className="text-white/40">Insurer:</span> <span className="text-white/70"> State Farm / Geico / Progressive / etc.</span></div>
                              <div><span className="text-white/40">Policy #:</span> <span className="text-white/70"> XXXXXXX-XX</span></div>
                              <div><span className="text-white/40">Insured:</span> <span className="text-white/70"> Your Name</span></div>
                              <div><span className="text-white/40">Effective:</span> <span className="text-white/70"> 01/01/25 – 07/01/25</span></div>
                            </div>
                            <p className="mt-2 text-white/40">The small card in your wallet or your insurance app. A photo is fine.</p>
                          </div>
                        )}
                        <label className={`flex flex-col items-center justify-center w-full h-32 border border-dashed cursor-pointer transition-all bg-dark group ${insuranceFileName ? "border-gold/50 bg-gold/5" : "border-dark-border hover:border-gold/40"}`}>
                          {insuranceFileName ? (
                            <>
                              <svg className="w-7 h-7 text-gold mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-white/70">{insuranceFileName}</span>
                              <span className="text-xs text-text-muted mt-1">Click to change</span>
                            </>
                          ) : (
                            <>
                              <svg className="w-8 h-8 text-white/20 group-hover:text-gold/50 transition-colors mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-sm text-text-muted group-hover:text-white/60 transition-colors">Click to upload</span>
                            </>
                          )}
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            className="hidden"
                            onChange={(e) => {
                              const f = e.target.files?.[0] ?? null;
                              set("insurance", f);
                              setInsuranceFileName(f?.name ?? "");
                            }}
                          />
                        </label>
                      </div>

                      {/* Notes */}
                      <div>
                        <label className="text-sm text-text-muted block mb-2">Additional Notes</label>
                        <textarea
                          value={form.notes}
                          onChange={(e) => set("notes", e.target.value)}
                          rows={3}
                          className={`${inputClass} resize-none`}
                          placeholder="Special requests, event details, multiple cars needed, etc."
                        />
                      </div>

                      {/* How it works */}
                      <div className="bg-dark border border-dark-border p-5">
                        <h3 className="font-[family-name:var(--font-heading)] text-base tracking-wider mb-3">HOW IT WORKS</h3>
                        <ol className="list-decimal list-inside space-y-1.5 text-text-muted text-sm">
                          <li>Submit — we confirm availability within hours</li>
                          <li>Pay deposit to lock in your booking</li>
                          <li>Sign rental contract via DocuSign</li>
                          <li>We bring the car to you at pickup time</li>
                        </ol>
                        <p className="text-text-muted text-sm mt-3">
                          We accept <strong className="text-white">Zelle</strong>, <strong className="text-white">credit card</strong>, and <strong className="text-white">cash</strong>.
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <button type="button" onClick={() => setStep(2)} className="btn-outline flex-1">
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={loading}
                          className="btn-gold flex-1 disabled:opacity-50"
                        >
                          {loading ? "Submitting..." : "Submit Booking Request"}
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
