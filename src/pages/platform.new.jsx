import React from "react";
import { Download } from "lucide-react";

const Card = ({ title, description, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${className}`}>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Platforms = () => {
  const platforms = [
    {
      title: "MetaTrader 4 (MT4)",
      description: "A widely used Forex trading & EA platform. Perfect for forex-focused trading and algorithmic strategies."
    },
    {
      title: "MetaTrader 5 (MT5)",
      description: "Next-gen multi-asset platform supporting stocks, futures, and FX with advanced features and Market Depth."
    },
    {
      title: "DXtrade",
      description: "Modern trading platform with quick deployment and built-in risk management tools for brokers and banks."
    }
  ];

  const integrations = [
    {
      title: "FIX Protocol",
      description: "Industry-standard protocol for institutional trading and market data connectivity."
    },
    {
      title: "REST APIs",
      description: "Modern web APIs for seamless integration with your existing systems and workflows."
    },
    {
      title: "Custom Solutions",
      description: "Tailored integration solutions designed to meet your specific business requirements."
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen py-20">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Right Side - Heading */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start order-1 lg:order-2">
            <div className="text-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <div className="text-white">Platforms &</div>
                <div className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  Integrations
                </div>
              </h1>
              <p className="text-xl text-gray-300 ml-auto">
                We provide seamless integration with industry-leading trading platforms.
              </p>
            </div>
          </div>

          {/* Left Side - Content */}
          <div className="lg:w-2/3 order-2 lg:order-1">
            <div className="space-y-16">
              {/* Trading Platforms */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-8">Trading Platforms</h2>
                <div className="space-y-4">
                  {platforms.map((platform, index) => (
                    <Card
                      key={index}
                      title={platform.title}
                      description={platform.description}
                    />
                  ))}
                </div>
              </div>

              {/* Integration Methods */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-8">Integration Methods</h2>
                <div className="space-y-4">
                  {integrations.map((integration, index) => (
                    <Card
                      key={index}
                      title={integration.title}
                      description={integration.description}
                    />
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <button
                  className="group bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-3 rounded-lg font-semibold flex items-center hover:opacity-90 transition-all duration-300"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Integration Spec
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;