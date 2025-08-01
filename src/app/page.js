// pages/index.js
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

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
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#0a0a1a] to-[#000000] text-gray-200 font-sans">
      <Head>
        <title>AuraTV | AI-Enhanced Streaming</title>
        <meta name="description" content="Welcome to the next evolution of entertainment. AuraTV uses AI to deliver a seamless, personalized, and ultra-high-definition streaming experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 py-4' : 'bg-transparent py-6'}`}>
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.5)]">
              <span className="text-2xl font-bold text-white">A</span>
            </div>
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">
              AuraTV
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'AI Features', 'Pricing', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.7)]">
                {item}
              </a>
            ))}
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:shadow-[0_0_20px_rgba(192,132,252,0.7)]">
            Initiate Trial
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden px-4">
        <div className="absolute inset-0 w-full h-full bg-black/50"></div>
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-30">
          <source src="https://cdn.pixabay.com/video/2021/11/14/9583-667202353_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight tracking-wide">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-500 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                AI-Powered Streaming
              </span><br />
              Redefined.
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              AuraTV&apos;s intelligent platform learns your preferences to curate a personalized universe of entertainment. Experience flawless 4K/8K streaming, predictive content delivery, and zero buffering.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(192,132,252,0.8)]">
                Activate 48-Hour AI Trial
              </button>
              <button className="bg-black/50 backdrop-blur-lg hover:bg-gray-800/70 text-white px-10 py-5 rounded-full font-bold text-xl border-2 border-cyan-400/50 hover:border-cyan-300 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">
                Explore Plans
              </button>
            </div>
        </div>
      </section>
      
      {/* AI Features Section */}
      <section id="ai-features" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">The AuraTV Intelligence Core</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Our proprietary AI enhances every aspect of your viewing experience. Discover the future of television.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AIFeatureCard 
              title="Predictive Streaming" 
              description="Our AI analyzes network conditions and predicts your viewing habits to preload content, eliminating buffering before it even starts."
            />
            <AIFeatureCard 
              title="Personalized Discovery" 
              description="AuraTV learns what you love and suggests new shows and movies from across the globe with uncanny accuracy. Your next favorite is waiting."
            />
            <AIFeatureCard 
              title="Adaptive Bitrate" 
              description="Enjoy uninterrupted crystal-clear quality. The AI dynamically adjusts the stream bitrate in real-time to match your internet speed, ensuring a flawless picture."
            />
             <AIFeatureCard 
              title="Smart EPG" 
              description="Our intelligent program guide organizes your channels based on your viewing history, putting your most-watched content front and center."
            />
             <AIFeatureCard 
              title="Voice-Activated Control" 
              description="Simply speak to find content, change channels, or get recommendations. AuraTV's natural language processing understands you perfectly."
            />
             <AIFeatureCard 
              title="Automated Content Tagging" 
              description="Our AI scans and tags all content for genre, mood, actors, and more, allowing for incredibly specific searches and discovery."
            />
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-24 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">Choose Your Subscription Tier</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Unlock the power of AI-driven entertainment with a plan that suits you. All tiers include our core AI features.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard duration="Standard" price={19.99} popular={false} features={['10,000+ Channels', '4K Streaming', '2 Concurrent Devices', 'AI Predictive Streaming', '7-Day Catch Up']} />
            <PricingCard duration="Premium" price={29.99} popular={true} features={['20,000+ Channels', '4K/8K Streaming', '4 Concurrent Devices', 'All AI Features', '14-Day Catch Up', 'Priority Support']} />
            <PricingCard duration="Ultimate" price={49.99} popular={false} features={['All Channels + VOD', '4K/8K HDR Streaming', '6 Concurrent Devices', 'All AI Features', '30-Day Catch Up', 'Dedicated Support Agent']} />
          </div>
           <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg">We accept all major credit cards, PayPal, and cryptocurrency. <br/> Pay with crypto and receive a <span className="text-cyan-400 font-bold">15% discount</span> on your subscription.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Have questions? We have answers. If you don&apos;t see your question here, our 24/7 support is ready to assist.</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="What devices are compatible with AuraTV?" 
              answer="AuraTV is compatible with a wide range of devices, including smart TVs (Samsung, LG, Sony), Amazon Firestick, Android TV boxes, Apple TV, iOS and Android smartphones, and web browsers."
            />
            <FAQItem 
              question="How does the AI trial work?" 
              answer="Our 48-hour AI-enhanced trial gives you full, unrestricted access to our Premium tier. No credit card is required. Experience the full power of AuraTV's intelligent streaming platform for yourself."
            />
            <FAQItem 
              question="Can I upgrade my plan at any time?" 
              answer="Absolutely. You can upgrade or downgrade your subscription tier at any time through your account dashboard. The change will be prorated and take effect immediately."
            />
            <FAQItem 
              question="What is 'Predictive Streaming'?" 
              answer="Our proprietary AI technology analyzes your viewing patterns and network stability to intelligently preload segments of the content you're likely to watch next. This virtually eliminates buffering and ensures a seamless experience."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 px-4 border-t border-cyan-500/20 bg-black/50">
        <div className="container mx-auto text-center">
            <div className="flex justify-center items-center space-x-3 mb-6">
                 <div className="w-12 h-12 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                    <span className="text-2xl font-bold text-white">A</span>
                </div>
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">AuraTV</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                AuraTV is a paradigm shift in digital entertainment, leveraging artificial intelligence to create a truly personalized and superior streaming service.
            </p>
            <div className="flex justify-center space-x-8 mb-10">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact Support</a>
            </div>
            <p className="text-gray-500">© 2025 AuraTV. All Rights Reserved. This website is a demonstration and for educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}

// Component: AI Feature Card
const AIFeatureCard = ({ title, description }) => (
  <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,255,255,0.1)]">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6 shadow-[0_0_10px_rgba(0,255,255,0.4)]">
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-cyan-300">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

// Component: Pricing Card
const PricingCard = ({ duration, price, popular, features }) => (
  <div className={`relative rounded-2xl overflow-hidden bg-gray-900/60 backdrop-blur-xl border transition-all duration-300 ${popular ? 'border-2 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.5)]' : 'border border-cyan-500/20'}`}>
    {popular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 bg-gradient-to-r from-cyan-500 to-purple-600 text-center py-2 text-sm font-bold rounded-full shadow-[0_0_15px_rgba(192,132,252,0.6)]">
        AI RECOMMENDED
      </div>
    )}
    
    <div className="p-8 pt-12 text-center">
      <h3 className="text-3xl font-bold mb-2 text-cyan-300">{duration}</h3>
      <div className="mb-8">
        <span className="text-5xl font-bold">${price}</span>
        <span className="text-gray-400 text-lg">/ month</span>
      </div>
      
      <ul className="space-y-4 mb-10 text-left">
        {features.map((item) => (
          <li key={item} className="flex items-center text-lg">
            <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${popular 
        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-[0_0_20px_rgba(192,132,252,0.8)]' 
        : 'bg-black/50 border-2 border-cyan-400/50 hover:bg-cyan-400/20 hover:border-cyan-300'}`}>
        Select Plan
      </button>
    </div>
  </div>
);


// Component: FAQ Item
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-gray-900/50 backdrop-blur-md rounded-xl border border-cyan-500/20 overflow-hidden transition-all duration-300 hover:border-cyan-400/70">
      <button 
        className="w-full p-6 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold text-cyan-300">{question}</span>
        <svg 
          className={`w-6 h-6 transition-transform transform text-cyan-400 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 text-gray-300 text-lg leading-relaxed">{answer}</div>
      </div>
    </div>
  );
};
