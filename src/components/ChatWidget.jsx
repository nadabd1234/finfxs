import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Search, Send, HelpCircle, ChevronDown } from 'lucide-react';
import ficonPng from '../assets/svg/Ficon.png';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hello! I'm FINFXS AI Assistant. How can I help you with our fintech services today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "What trading platforms do you support?",
      answer: "We support MT4, MT5, DXtrade, and custom platform integrations. Our team provides 24/7 technical support for all platforms.",
      category: "Platform Support"
    },
    {
      id: 2,
      question: "How do you ensure platform security?",
      answer: "We implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, and regular security audits to protect your trading infrastructure.",
      category: "Security"
    },
    {
      id: 3,
      question: "What is your uptime guarantee?",
      answer: "We guarantee 99.97% uptime for all our services. Our infrastructure is designed for high availability with redundant systems and real-time monitoring.",
      category: "Reliability"
    },
    {
      id: 4,
      question: "Do you provide custom development services?",
      answer: "Yes, we offer bespoke integrations, custom APIs, and tailored solutions to connect your CRM, payment systems, and data infrastructure with your trading platforms.",
      category: "Development"
    },
    {
      id: 5,
      question: "What is your risk management approach?",
      answer: "Our risk management system provides real-time exposure netting, smart hedging algorithms, and deep multi-asset liquidity management from a single console.",
      category: "Risk Management"
    }
  ]);
  const [filteredFaqs, setFilteredFaqs] = useState(faqItems);
  const [selectedFaq, setSelectedFaq] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      const filtered = faqItems.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFaqs(filtered);
    } else {
      setFilteredFaqs(faqItems);
    }
  }, [searchQuery, faqItems]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        text: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          text: "Thank you for your message. Our team will get back to you within 24 hours. For immediate assistance, please call our support line.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8  flex items-center justify-center">
                  <img 
                    src={ficonPng} 
                    alt="FINFXS" 
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm">FINFXS ASSISTANT</h3>
                  <p className="text-xs text-blue-200">Hello there 👋</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                  activeTab === 'chat'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Chat with us
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                  activeTab === 'faq'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                FAQs
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              {activeTab === 'chat' ? (
                <div className="h-64 flex flex-col">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                            msg.type === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {msg.text}
                          <div className="text-xs opacity-70 mt-1">{msg.timestamp}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 placeholder-gray-500"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-64 overflow-y-auto">
                  {/* Search */}
                  <div className="p-4 border-b border-gray-200">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for answers..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 placeholder-gray-500"
                      />
                    </div>
                  </div>

                  {/* FAQ Items */}
                  <div className="p-4 space-y-3">
                    {filteredFaqs.map((faq) => (
                      <div key={faq.id} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => setSelectedFaq(selectedFaq === faq.id ? null : faq.id)}
                          className="w-full p-3 text-left hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-800">{faq.question}</span>
                            <ChevronDown 
                              className={`w-4 h-4 text-gray-400 transition-transform ${
                                selectedFaq === faq.id ? 'rotate-180' : ''
                              }`} 
                            />
                          </div>
                        </button>
                        {selectedFaq === faq.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-3 pb-3"
                          >
                            <p className="text-sm text-gray-600">{faq.answer}</p>
                            <div className="mt-2 flex items-center space-x-4">
                              <span className="text-xs text-blue-600 font-medium">{faq.category}</span>
                              <div className="flex items-center space-x-2">
                                <button className="text-xs text-gray-500 hover:text-gray-700">
                                  👍 Helpful
                                </button>
                                <button className="text-xs text-gray-500 hover:text-gray-700">
                                  👎 Not helpful
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
