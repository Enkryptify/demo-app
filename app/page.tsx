'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Lock, PieChart, TrendingUp, Wallet } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navigation */}
            <header className="border-b">
                <div className="container flex h-16 items-center justify-between px-20">
                    <div className="flex items-center gap-2">
                        <Wallet className="h-6 w-6 text-blue-600" />
                        <span className="text-xl font-bold">Enkryptify</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
                            Features
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
                            Testimonials
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
                            Pricing
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
                            FAQ
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link href="/login">
                            <Button variant="outline" className="h-9">
                                Log in
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button className="h-9 bg-blue-600 hover:bg-blue-700">Sign up</Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero section */}
            <section className="py-20 md:py-32">
                <div className="container flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Your Financial Data, <span className="text-blue-600">Simply Intelligent</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-[42rem] mb-12">
                        Gain powerful insights and take control of your finances with our intuitive dashboard. Track,
                        analyze, and optimize your financial journey in one place.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/login">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline">
                            View Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features section */}
            <section id="features" className="py-20 bg-gray-50 px-20">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Powerful Financial <span className="text-blue-600">Features</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <BarChart3 className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Comprehensive Analytics</h3>
                            <p className="text-muted-foreground">
                                Visualize your financial data with intuitive charts and gain actionable insights at a
                                glance.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <TrendingUp className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Smart Forecasting</h3>
                            <p className="text-muted-foreground">
                                Predict future financial trends based on your spending habits and investment
                                performance.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <PieChart className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Budget Planning</h3>
                            <p className="text-muted-foreground">
                                Create custom budgets and track your spending to stay on top of your financial goals.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <Lock className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Bank-Level Security</h3>
                            <p className="text-muted-foreground">
                                Your financial data is secured with enterprise-grade encryption and security protocols.
                            </p>
                        </div>

                        {/* Additional features */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9Z"></path>
                                    <path d="M17 9V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Multi-Device Sync</h3>
                            <p className="text-muted-foreground">
                                Access your financial dashboard from any device with seamless synchronization.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m16 12-4 4-4-4"></path>
                                    <path d="M12 8v8"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Easy Data Import</h3>
                            <p className="text-muted-foreground">
                                Quickly import transactions from major banks and financial institutions with just a few
                                clicks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-20 px-20">
                <div className="container">
                    <div className="bg-blue-600 rounded-2xl p-8 md:p-16 text-white text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take control of your finances?</h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Join thousands of users who have transformed their financial management experience with
                            Enkryptify.
                        </p>
                        <Link href="/login">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                                Create Your Account
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-auto py-8 border-t">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-4 px-20">
                    <div className="flex items-center gap-2">
                        <Wallet className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">Enkryptify</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Enkryptify. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="/terms" className="text-sm text-muted-foreground hover:text-blue-600">
                            Terms
                        </Link>
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:text-blue-600">
                            Privacy
                        </Link>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:text-blue-600">
                            Contact
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
