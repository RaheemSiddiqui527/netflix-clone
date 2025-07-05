'use client';

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';

export default function Account() {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('membership');

  const sections = [
    { id: 'membership', name: 'Membership & Billing', icon: '💳' },
    { id: 'plan', name: 'Plan Details', icon: '📋' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
    { id: 'profile', name: 'Profile', icon: '👤' }
  ];

  return (
    <ProtectedRoute>
      <div className="relative min-h-screen bg-[#141414]">
        <Navbar />
        
        <main className="pt-[68px] px-[4%] pb-[50px] max-w-6xl mx-auto">
          <div className="py-8">
            <h1 className="text-white text-4xl font-bold mb-2">Account</h1>
            <p className="text-gray-400 text-lg mb-8">
              Manage your account settings and preferences
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left p-4 rounded-lg transition ${
                      activeSection === section.id
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span className="mr-3">{section.icon}</span>
                    {section.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              {activeSection === 'membership' && (
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-white text-2xl font-bold mb-6">Membership & Billing</h2>
                  
                  <div className="space-y-6">
                    <div className="border-b border-gray-700 pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-semibold mb-1">{user?.email}</h3>
                          <p className="text-gray-400 text-sm">Password: ••••••••</p>
                        </div>
                        <button className="text-blue-400 hover:underline">Change</button>
                      </div>
                    </div>

                    <div className="border-b border-gray-700 pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-semibold mb-1">Phone</h3>
                          <p className="text-gray-400 text-sm">Add a phone number</p>
                        </div>
                        <button className="text-blue-400 hover:underline">Add</button>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-semibold mb-1">Backup payment method</h3>
                          <p className="text-gray-400 text-sm">None</p>
                        </div>
                        <button className="text-blue-400 hover:underline">Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'plan' && (
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-white text-2xl font-bold mb-6">Plan Details</h2>
                  
                  <div className="space-y-6">
                    <div className="border border-red-600 rounded-lg p-4 bg-red-600/10">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-white text-xl font-bold">Premium</h3>
                        <span className="text-red-400 font-bold">$15.49/month</span>
                      </div>
                      <ul className="text-gray-300 space-y-2">
                        <li>✓ Watch on 4 supported devices at a time</li>
                        <li>✓ Watch in Ultra HD</li>
                        <li>✓ Download on 6 supported devices at a time</li>
                        <li>✓ Netflix spatial audio</li>
                      </ul>
                      <button className="mt-4 text-blue-400 hover:underline">Change plan</button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Next billing date</h4>
                        <p className="text-gray-300">January 15, 2024</p>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Payment method</h4>
                        <p className="text-gray-300">•••• •••• •••• 1234</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'settings' && (
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-white text-2xl font-bold mb-6">Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="border-b border-gray-700 pb-4">
                      <h3 className="text-white font-semibold mb-3">Parental controls</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">All Maturity Ratings</span>
                        <button className="text-blue-400 hover:underline">Change</button>
                      </div>
                    </div>

                    <div className="border-b border-gray-700 pb-4">
                      <h3 className="text-white font-semibold mb-3">Language</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">English</span>
                        <button className="text-blue-400 hover:underline">Change</button>
                      </div>
                    </div>

                    <div className="border-b border-gray-700 pb-4">
                      <h3 className="text-white font-semibold mb-3">Playback settings</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Auto</span>
                        <button className="text-blue-400 hover:underline">Change</button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-3">Download quality</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Standard</span>
                        <button className="text-blue-400 hover:underline">Change</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'profile' && (
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-white text-2xl font-bold mb-6">Profile</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={user?.avatar || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
                        alt="Profile"
                        className="w-20 h-20 rounded"
                      />
                      <div>
                        <h3 className="text-white font-semibold text-xl">{user?.name}</h3>
                        <button className="text-blue-400 hover:underline">Change</button>
                      </div>
                    </div>

                    <div className="border-b border-gray-700 pb-4">
                      <h3 className="text-white font-semibold mb-3">Language</h3>
                      <select className="bg-gray-700 text-white p-2 rounded">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                    </div>

                    <div className="border-b border-gray-700 pb-4">
                      <h3 className="text-white font-semibold mb-3">Viewing activity</h3>
                      <button className="text-blue-400 hover:underline">View</button>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-3">Ratings</h3>
                      <button className="text-blue-400 hover:underline">View your ratings</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ProtectedRoute>
  );
}