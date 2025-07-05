'use client';

import { useRouter } from 'next/navigation';

export default function Demo() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#141414] flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          className="h-[60px] mx-auto mb-8"
          alt="Netflix"
        />
        
        <h1 className="text-white text-4xl font-bold mb-8">
          Netflix Clone Demo
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Login Card */}
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-gray-600 hover:border-red-500 transition">
            <h2 className="text-white text-2xl font-bold mb-4">🔑 Login Page</h2>
            <p className="text-gray-300 mb-4">
              Sign in to existing account
            </p>
            <div className="bg-blue-900/50 rounded p-3 mb-4 text-left">
              <p className="text-white text-sm font-semibold mb-2">Demo Credentials:</p>
              <p className="text-white text-xs">📧 demo@netflix.com</p>
              <p className="text-white text-xs">🔑 password123</p>
            </div>
            <button
              onClick={() => router.push('/login')}
              className="w-full bg-red-600 text-white py-3 rounded font-bold hover:bg-red-700 transition"
            >
              Go to Login
            </button>
          </div>

          {/* Signup Card */}
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-gray-600 hover:border-green-500 transition">
            <h2 className="text-white text-2xl font-bold mb-4">📝 Signup Page</h2>
            <p className="text-gray-300 mb-4">
              Create new account
            </p>
            <div className="bg-green-900/50 rounded p-3 mb-4 text-left">
              <p className="text-white text-sm font-semibold mb-2">Create Account:</p>
              <p className="text-white text-xs">✅ Any email format</p>
              <p className="text-white text-xs">✅ Password 6+ characters</p>
            </div>
            <button
              onClick={() => router.push('/signup')}
              className="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 transition"
            >
              Go to Signup
            </button>
          </div>
        </div>

        {/* All Pages */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => router.push('/welcome')}
            className="bg-gray-700 text-white py-3 px-4 rounded hover:bg-gray-600 transition"
          >
            🏠 Welcome
          </button>
          <button
            onClick={() => router.push('/')}
            className="bg-gray-700 text-white py-3 px-4 rounded hover:bg-gray-600 transition"
          >
            🎬 Home
          </button>
          <button
            onClick={() => router.push('/tv-shows')}
            className="bg-gray-700 text-white py-3 px-4 rounded hover:bg-gray-600 transition"
          >
            📺 TV Shows
          </button>
          <button
            onClick={() => router.push('/movies')}
            className="bg-gray-700 text-white py-3 px-4 rounded hover:bg-gray-600 transition"
          >
            🎥 Movies
          </button>
          <button
            onClick={() => router.push('/new-popular')}
            className="bg-gray-700 text-white py-3 px-4 rounded hover:bg-gray-600 transition"
          >
            🔥 New & Popular
          </button>
          <button
            onClick={() => router.push('/my-list')}
            className="bg-gray-700 text-white py-3 px-4 rounded hover:bg-gray-600 transition"
          >
            📋 My List
          </button>
          <button
            onClick={() => router.push('/browse')}
            className="bg-gray-700 text-white py-3 px-4 rounded hover:bg-gray-600 transition"
          >
            🌍 Browse
          </button>
          <button
            onClick={() => router.push('/kids')}
            className="bg-gray-700 text-white py-3 px-4 rounded hover:bg-gray-600 transition"
          >
            👶 Kids
          </button>
          <button
            onClick={() => router.push('/profiles')}
            className="bg-gray-700 text-white py-3 px-4 rounded hover:bg-gray-600 transition"
          >
            👤 Profiles
          </button>
          <button
            onClick={() => router.push('/account')}
            className="bg-gray-700 text-white py-3 px-4 rounded hover:bg-gray-600 transition"
          >
            ⚙️ Account
          </button>
        </div>

        <div className="text-gray-400 text-sm">
          <p>🎯 This is a demo Netflix clone with full functionality</p>
          <p>🔐 Authentication works with any email + 6+ character password</p>
          <p>🎬 All features are functional including video player and watchlist</p>
        </div>
      </div>
    </div>
  );
}