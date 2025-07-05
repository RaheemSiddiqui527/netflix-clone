'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import NetflixBackground from '@/components/NetflixBackground';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    // For demo purposes, we'll use the login function to create account
    const success = await login(email, password);
    if (success) {
      router.push('/');
    } else {
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <NetflixBackground>
      {/* Netflix Logo */}
      <div className="relative z-10 px-[4%] py-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          className="h-[45px] cursor-pointer"
          alt="Netflix"
          onClick={() => router.push('/welcome')}
        />
      </div>

      {/* Signup Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-[4%]">
        <div className="w-full max-w-[450px] bg-black/75 rounded-[4px] px-[68px] py-[60px]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-white text-[32px] font-bold mb-[28px]">
              Sign Up
            </h1>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full h-[50px] px-[20px] bg-[#333] border border-[#333] rounded-[4px] text-white text-[16px] placeholder-[#8c8c8c] focus:bg-[#454545] focus:outline-none focus:border-white transition duration-200"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email or phone number"
                  className="w-full h-[50px] px-[20px] bg-[#333] border border-[#333] rounded-[4px] text-white text-[16px] placeholder-[#8c8c8c] focus:bg-[#454545] focus:outline-none focus:border-white transition duration-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-[50px] px-[20px] bg-[#333] border border-[#333] rounded-[4px] text-white text-[16px] placeholder-[#8c8c8c] focus:bg-[#454545] focus:outline-none focus:border-white transition duration-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full h-[50px] px-[20px] bg-[#333] border border-[#333] rounded-[4px] text-white text-[16px] placeholder-[#8c8c8c] focus:bg-[#454545] focus:outline-none focus:border-white transition duration-200"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-[#e87c03] text-white p-3 rounded text-sm mb-4">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-[48px] bg-[#e50914] text-white text-[16px] font-bold rounded-[4px] hover:bg-[#f40612] transition duration-200 mt-[40px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </button>

            <div className="mt-[80px] text-[16px] text-[#737373]">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => router.push('/login')}
                className="text-white hover:underline font-medium"
              >
                Sign in now
              </button>
              .
            </div>

            <div className="mt-[13px] text-[13px] text-[#8c8c8c] leading-[18px]">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
              <a href="#" className="text-[#0071eb] hover:underline">
                Learn more
              </a>
              .
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-black/75 px-[4%] py-[30px] mt-auto">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-[#737373] text-[16px] mb-[30px]">
            Questions? Call{' '}
            <a href="tel:1-844-505-2993" className="hover:underline">
              1-844-505-2993
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[16px] text-[13px] text-[#737373]">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Corporate Information</a>
          </div>
          
          <div className="mt-[24px]">
            <select className="bg-black border border-[#737373] text-[#737373] px-[13px] py-[8px] text-[13px] rounded-[4px]">
              <option>English</option>
              <option>Español</option>
            </select>
          </div>
        </div>
      </div>
    </NetflixBackground>
  );
}