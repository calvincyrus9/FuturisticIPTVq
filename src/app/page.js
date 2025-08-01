/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Testimonials from './components/Testimonials';

export default function FuturisticIPTV() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Head>
        <title>NexusStream | Premium IPTV Service</title>
        <meta name="description" content="Experience the future of streaming with NexusStream - Global channels, 4K quality, no buffering" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              NexusStream
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Free Trial & Renew', 'Pricing', 'Features', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="font-medium hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
          
          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
            Start Trial
          </button>
        </nav>
      </header>

      {/* Hero Section Wrapper */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center">
        {/* Hero Section */}
        <section id="home" className="py-20 px-4 relative overflow-hidden w-full">
          {/* Background layers */}
          <div className="absolute inset-0 z-0">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
            
            {/* Animated grid pattern */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h2v100H0zM4 0h2v100H4zM8 0h2v100H8zM12 0h2v100h-2zM16 0h2v100h-2zM20 0h2v100h-2zM24 0h2v100h-2zM28 0h2v100h-2zM32 0h2v100h-2zM36 0h2v100h-2zM40 0h2v100h-2zM44 0h2v100h-2zM48 0h2v100h-2zM52 0h2v100h-2zM56 0h2v100h-2zM60 0h2v100h-2zM64 0h2v100h-2zM68 0h2v100h-2zM72 0h2v100h-2zM76 0h2v100h-2zM80 0h2v100h-2zM84 0h2v100h-2zM88 0h2v100h-2zM92 0h2v100h-2zM96 0h2v100h-2zM0 0v2h100V0zM0 4v2h100V4zM0 8v2h100V8zM0 12v2h100v-2zM0 16v2h100v-2zM0 20v2h100v-2zM0 24v2h100v-2zM0 28v2h100v-2zM0 32v2h100v-2zM0 36v2h100v-2zM0 40v2h100v-2zM0 44v2h100v-2zM0 48v2h100v-2zM0 52v2h100v-2zM0 56v2h100v-2zM0 60v2h100v-2zM0 64v2h100v-2zM0 68v2h100v-2zM0 72v2h100v-2zM0 76v2h100v-2zM0 80v2h100v-2zM0 84v2h100v-2zM0 88v2h100v-2zM0 92v2h100v-2zM0 96v2h100v-2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: "100px 100px"
              }}
            ></div>
            
            {/* Animated gradient elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[40%] aspect-square rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-blob animation-delay-2000 blur-3xl"></div>
              <div className="absolute top-1/2 right-1/4 w-[35%] aspect-square rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-blob animation-delay-4000 blur-3xl"></div>
              <div className="absolute top-1/3 left-[15%] w-[15%] aspect-square rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-blob animation-delay-7000 blur-2xl"></div>
            </div>
            
            {/* Floating particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-cyan-400/20 animate-particle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 10 + 2}px`,
                  height: `${Math.random() * 10 + 2}px`,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
          
          <div className="container mx-auto relative z-10 flex flex-col items-center justify-center">
            <div className="max-w-3xl text-center px-4">
              <div className="mb-8">
                <div className="inline-block px-5 py-2.5 bg-cyan-900/30 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6">
                  <span className="text-cyan-400 font-medium tracking-wider text-sm">PREMIUM STREAMING SERVICE</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                    The Future of Streaming
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  Experience global live sports, premium channels, and 4K entertainment without buffering. 
                  Stream seamlessly across all your devices.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Start Free Trial
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg border border-gray-700 transition-all hover:border-cyan-500/30 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Renew Subscription
                  </button>
                </div>
              </div>
              
              {/* Corrected Stats section */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all">
                  <div className="text-3xl font-bold text-cyan-400">60K+</div>
                  <div className="text-gray-400">Users</div>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all">
                  <div className="text-3xl font-bold text-cyan-400">4.9/5</div>
                  <div className="text-gray-400">Rating</div>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all">
                  <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-gray-400">Uptime</div>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all">
                  <div className="text-3xl font-bold text-cyan-400">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <style jsx global>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          
          @keyframes particle {
            0% {
              transform: translateY(0) translateX(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(-100vh) translateX(calc(-50vw + 100px)) rotate(360deg);
              opacity: 0;
            }
          }
          
          .animate-blob {
            animation: blob 15s infinite ease-in-out;
          }
          
          .animate-particle {
            animation: particle linear infinite;
          }
          
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          
          .animation-delay-7000 {
            animation-delay: 7s;
          }
        `}</style>
      </div>

      {/* Overview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="inline-block px-6 py-2 bg-gray-800 rounded-full mb-6">
            <span className="text-cyan-400 font-medium">OUR STORY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            From Humble Beginnings to Global Streaming
          </h2>
          <p className="text-xl text-gray-300">
            What started as a simple idea has transformed into a premier IPTV service, delivering exceptional entertainment to over <span className="text-cyan-400 font-bold">60,000 users</span> worldwide. We're constantly evolving to bring you the best streaming experience possible.
          </p>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-center text-2xl font-bold mb-12">Compatible with Your Favorite Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 place-items-center">
            {['Netflix','Peacock', 'Disney+', 'HBO Max', 'Prime Video', 'Hulu'].map((brand) => (
              <div key={brand} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 w-full max-w-[180px] h-24 flex items-center justify-center transition-all hover:bg-gray-700/50 hover:border-cyan-500/30">
                <span className="text-xl font-bold">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricCard value="60,000+" label="Accounts Delivered" />
            <MetricCard value="120+" label="Countries Served" />
            <MetricCard value="4.9/5" label="Client Ratings" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started in 4 Simple Steps</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Experience premium streaming in minutes, not hours</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StepCard 
              number={1} 
              title="Request Free Trial" 
              description="Sign up for our risk-free trial to test our service"
            />
            <StepCard 
              number={2} 
              title="Choose Device/App" 
              description="Select your preferred streaming device or application"
            />
            <StepCard 
              number={3} 
              title="Activate & Watch" 
              description="Follow simple setup instructions and start streaming"
            />
            <StepCard 
              number={4} 
              title="Renew Anytime" 
              description="Continue your subscription with flexible renewal options"
            />
            
          </div>
        </div>
        <div className="mt-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">Ready to Transform Your Trading?</h3>
              <p className="mt-2 text-gray-300">Join thousands of traders who are already profiting from our signals.</p>
            </div>
            <button className="mt-6 md:mt-0 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 transition-all duration-300">
              Start Your Free Trial Now
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">One premium plan with flexible durations to suit your needs</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <PricingCard duration="1 Month" price={16.99} popular={false} />
            <PricingCard duration="3 Months" price={45.99} popular={true} />
            <PricingCard duration="6 Months" price={79.99} popular={false} />
            <PricingCard duration="1 Year" price={109.99} popular={false} />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400">Secure checkout with PayPal, Credit Cards, and Bitcoin (10% discount for crypto payments)</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Feature Comparison */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Features for Ultimate Streaming</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Everything you need for a seamless entertainment experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard 
              title="Unlimited Entertainment" 
              description="Access thousands of channels and on-demand content"
            />
            <FeatureCard 
              title="HD/4K Quality" 
              description="Crystal clear picture quality with minimal buffering"
            />
            <FeatureCard 
              title="TV Guide (EPG)" 
              description="Comprehensive electronic program guide"
            />
            <FeatureCard 
              title="Catch-Up Feature" 
              description="Never miss your favorite shows with 7-day catch-up"
            />
            <FeatureCard 
              title="Anti-Freeze Technology" 
              description="Stable streaming with our proprietary technology"
            />
            <FeatureCard 
              title="24/7 Support" 
              description="Dedicated support team always ready to help"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Get answers to common questions about our service</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="Which devices are supported?" 
              answer="Our service works on all major devices including Android TV, Firestick, iOS, Android, Smart TVs, MAG boxes, and more."
            />
            <FAQItem 
              question="How does the free trial work?" 
              answer="Our free trial gives you full access to our service for 24 hours with no payment required. No credit card needed."
            />
            <FAQItem 
              question="How many devices can I use simultaneously?" 
              answer="Our standard plan allows for 2 simultaneous connections. We offer options for more connections if needed."
            />
            <FAQItem 
              question="What payment methods do you accept?" 
              answer="We accept PayPal, all major credit cards, and cryptocurrencies (Bitcoin, Ethereum, USDT)."
            />
            <FAQItem 
              question="How can I get support if I need help?" 
              answer="Our 24/7 support team is available via live chat on our website and through our dedicated support ticket system."
            />
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-white">Still have questions?</h3>
            <p className="mt-4 text-gray-300">
              Our support team is ready to help you with any questions about our service.
            </p>
            <button className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Marketing Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Boost your online presence with our expert marketing solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Social Media Marketing" 
              description="Increase engagement and reach on all major platforms"
            />
            <ServiceCard 
              title="Email Marketing" 
              description="Convert leads with targeted email campaigns"
            />
            <ServiceCard 
              title="Link Generation" 
              description="Drive traffic with strategic backlink strategies"
            />
            <ServiceCard 
              title="Online Presence Analysis" 
              description="Comprehensive analysis and optimization recommendations"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  NexusStream
                </span>
              </div>
              <p className="text-gray-400">
                Premium IPTV service delivering global content with exceptional quality and reliability.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {['Our Team', 'About Us', 'Careers', 'Press'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {['Contact Us', 'Knowledge Base', 'Service Status', 'Tutorials'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                {['Terms of Use', 'Privacy Policy', 'Refund Policy', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">© 2025 NexusStream. All rights reserved. This is a demo website for educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component: Metric Card
const MetricCard = ({ value, label }) => (
  <div className="text-center bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all">
    <div className="text-5xl font-bold text-cyan-400 mb-3">{value}</div>
    <div className="text-xl font-medium">{label}</div>
  </div>
);

// Component: Step Card
const StepCard = ({ number, title, description }) => (
  <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all transform hover:-translate-y-2">
    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
      {number}
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Component: Pricing Card
const PricingCard = ({ duration, price, popular }) => (
  <div className={`relative rounded-2xl overflow-hidden ${popular ? 'border-2 border-cyan-500/50' : 'border border-gray-700'}`}>
    {popular && (
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-600 to-blue-600 text-center py-2 text-sm font-bold">
        MOST POPULAR
      </div>
    )}
    
    <div className={`p-8 ${popular ? 'pt-16' : ''}`}>
      <h3 className="text-2xl font-bold mb-2">{duration}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-400">/ {duration.split(' ')[0]} Months</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {['All Channels Access', '4K Streaming', '2 Devices', '7-Day Catch Up', '24/7 Support'].map((item) => (
          <li key={item} className="flex items-center">
            <svg className="w-5 h-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {item}
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 rounded-xl font-bold transition-all ${popular 
        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500' 
        : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'}`}>
        Get Started
      </button>
    </div>
  </div>
);

// Component: Feature Card
const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all">
    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center mb-6">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Component: FAQ Item
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
      <button 
        className="w-full p-6 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <svg 
          className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <div className="px-6 pb-6 text-gray-400">{answer}</div>
      </div>
    </div>
  );
};

// Component: Service Card
const ServiceCard = ({ title, description }) => (
  <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all">
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
    <button className="mt-6 text-purple-400 hover:text-purple-300 font-medium flex items-center">
      Learn more
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
);
