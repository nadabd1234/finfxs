import React from 'react';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

const ContactIcons = () => {
  const icons = [
    {
      icon: Mail,
      label: 'Email Support',
      description: '24/7 Email Support',
      gradient: 'from-blue-500 to-blue-700',
      hoverGradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: Phone,
      label: 'Phone Support',
      description: 'Direct Line Available',
      gradient: 'from-teal-500 to-teal-700',
      hoverGradient: 'from-teal-600 to-teal-800'
    },
    {
      icon: MessageCircle,
      label: 'Live Chat',
      description: 'Instant Messaging',
      gradient: 'from-purple-500 to-purple-700',
      hoverGradient: 'from-purple-600 to-purple-800'
    },
    {
      icon: MapPin,
      label: 'Location',
      description: 'Bengaluru, India',
      gradient: 'from-green-500 to-green-700',
      hoverGradient: 'from-green-600 to-green-800'
    }
  ];

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 flex-wrap gap-4">
        {icons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={index}
              className="group cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`${item.label} - ${item.description}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  // Handle click action if needed
                }
              }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:bg-gradient-to-br group-hover:${item.hoverGradient}`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-slate-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-gray-300">{item.description}</div>
                </div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactIcons;
