'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import NetflixBackground from '@/components/NetflixBackground';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = await login(email, password);
    if (success) {
      router.push('/');
    } else {
      setError('Invalid email or password. Please try again.');
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

      {/* Login Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-[4%]">
        <div className="w-full max-w-[450px] bg-black/75 rounded-[4px] px-[68px] py-[60px]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-white text-[32px] font-bold mb-[28px]">
              Sign In
            </h1>
            
            {/* Demo Credentials Info */}
            <div className="bg-blue-900/50 border border-blue-500 rounded p-3 mb-4">
              <p className="text-white text-sm font-semibold mb-2">🎬 Demo Credentials:</p>
              <p className="text-white text-xs">📧 Email: demo@netflix.com</p>
              <p className="text-white text-xs">🔑 Password: password123</p>
              <p className="text-gray-300 text-xs mt-1">💡 Or use any email + 6+ character password</p>
            </div>
            
            <div className="space-y-4">
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
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>

            <div className="flex items-center justify-between mt-[16px] text-[13px]">
              <label className="flex items-center text-[#b3b3b3] cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-[8px] w-[16px] h-[16px] accent-[#b3b3b3]"
                />
                Remember me
              </label>
              <a href="#" className="text-[#b3b3b3] hover:underline">
                Need help?
              </a>
            </div>

            <div className="mt-[80px] text-[16px] text-[#737373]">
              New to Netflix?{' '}
              <button
                type="button"
                onClick={() => router.push('/signup')}
                className="text-white hover:underline font-medium"
              >
                Sign up now
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