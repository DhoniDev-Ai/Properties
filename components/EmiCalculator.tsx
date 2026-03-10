"use client";

import { useState, useEffect } from "react";
import { Calculator, RotateCcw } from "lucide-react";

export default function EmiCalculator() {
    const [principal, setPrincipal] = useState<number>(4500000);
    const [interestRate, setInterestRate] = useState<number>(8.5);
    const [tenure, setTenure] = useState<number>(20);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    // Calculate derived values during render
    const p = principal;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;

    let emi = 0;
    let totalPayable = 0;
    let totalInterest = 0;

    if (p > 0 && r > 0 && n > 0) {
        emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        totalPayable = emi * n;
        totalInterest = totalPayable - p;
    }

    const handleReset = () => {
        setPrincipal(4500000);
        setInterestRate(8.5);
        setTenure(20);
    };

    return (
        <section id="Emicalculator" className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                        Calculate Your Home Loan EMI
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
                        Plan your finances before you buy
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden shadow-lg flex flex-col lg:flex-row">

                    {/* Input Controls Panel */}
                    <div className="flex-1 p-5 md:p-8 lg:pr-10">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800 flex items-center gap-2">
                                <Calculator className="w-5 h-5 text-[#1D4ED8]" />
                                Input Details
                            </h3>
                            <button
                                onClick={handleReset}
                                className="text-xs md:text-sm font-medium text-slate-500 hover:text-[#1D4ED8] flex items-center gap-1.5 transition-colors active:scale-95 cursor-pointer"
                            >
                                <RotateCcw className="w-3.5 h-3.5" />
                                Reset
                            </button>
                        </div>

                        {/* Loan Amount */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-3">
                                <label className="font-semibold text-slate-700 text-sm">Loan Amount (₹)</label>
                                <div className="bg-white border border-slate-200 rounded-lg px-2.5 py-1 flex items-center w-28 md:w-36 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                                    <span className="text-slate-500 font-medium mr-1 select-none">₹</span>
                                    <input
                                        type="number"
                                        value={principal}
                                        onChange={(e) => setPrincipal(Number(e.target.value))}
                                        className="w-full bg-transparent outline-none font-bold text-slate-800 text-right appearance-none text-sm md:text-base"
                                    />
                                </div>
                            </div>
                            <input
                                type="range"
                                min={500000}
                                max={50000000}
                                step={100000}
                                value={principal}
                                onChange={(e) => setPrincipal(Number(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1D4ED8]"
                            />
                            <div className="flex justify-between text-[11px] text-slate-400 font-medium mt-1.5">
                                <span>₹5L</span>
                                <span>₹5Cr</span>
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-3">
                                <label className="font-semibold text-slate-700 text-sm">Interest Rate (p.a)</label>
                                <div className="bg-white border border-slate-200 rounded-lg px-2.5 py-1 flex items-center w-20 md:w-28 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                                    <input
                                        type="number"
                                        value={interestRate}
                                        step={0.1}
                                        onChange={(e) => setInterestRate(Number(e.target.value))}
                                        className="w-full bg-transparent outline-none font-bold text-slate-800 text-right appearance-none text-sm md:text-base"
                                    />
                                    <span className="text-slate-500 font-medium ml-1 text-sm select-none">%</span>
                                </div>
                            </div>
                            <input
                                type="range"
                                min={6}
                                max={15}
                                step={0.1}
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1D4ED8]"
                            />
                            <div className="flex justify-between text-[11px] text-slate-400 font-medium mt-1.5">
                                <span>6%</span>
                                <span>15%</span>
                            </div>
                        </div>

                        {/* Tenure */}
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-3">
                                <label className="font-semibold text-slate-700 text-sm">Loan Tenure (Years)</label>
                                <div className="bg-white border border-slate-200 rounded-lg px-2.5 py-1 flex items-center w-20 md:w-28 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                                    <input
                                        type="number"
                                        value={tenure}
                                        onChange={(e) => setTenure(Number(e.target.value))}
                                        className="w-full bg-transparent outline-none font-bold text-slate-800 text-right appearance-none text-sm md:text-base"
                                    />
                                    <span className="text-slate-500 font-medium ml-1.5 text-xs select-none">Yr</span>
                                </div>
                            </div>
                            <input
                                type="range"
                                min={5}
                                max={30}
                                step={1}
                                value={tenure}
                                onChange={(e) => setTenure(Number(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1D4ED8]"
                            />
                            <div className="flex justify-between text-[11px] text-slate-400 font-medium mt-1.5">
                                <span>5 Yr</span>
                                <span>30 Yr</span>
                            </div>
                        </div>
                    </div>

                    {/* Output Panel */}
                    <div className="lg:w-[350px] bg-[#1e293b] text-white p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
                        {/* decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h3 className="text-slate-300 font-medium mb-1.5 text-sm">Your Monthly EMI</h3>
                            <div className="text-3xl md:text-4xl lg:text-[40px] font-bold font-heading text-white mb-6 pb-6 border-b border-slate-700/50 tracking-tight">
                                {formatCurrency(emi)}
                            </div>

                            <div className="space-y-4 mb-8">
                                <div>
                                    <p className="text-slate-400 text-xs font-medium mb-1">Principal Amount</p>
                                    <p className="text-base md:text-lg font-bold text-slate-200">{formatCurrency(principal)}</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs font-medium mb-1">Total Interest Payable</p>
                                    <p className="text-base md:text-lg font-bold text-slate-200">{formatCurrency(totalInterest)}</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs font-medium mb-1">Total Amount Payable</p>
                                    <p className="text-lg md:text-xl font-bold text-white">{formatCurrency(totalPayable)}</p>
                                </div>
                            </div>

                            <button className="w-full bg-[#1D4ED8] hover:bg-blue-600 text-white font-semibold py-3 text-sm rounded-lg cursor-pointer transition-colors shadow-[0_4px_14px_0_rgba(29,78,216,0.39)] active:scale-95 flex items-center justify-center">
                                Get Loan Assistance
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
