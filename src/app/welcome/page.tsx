'use client';

import { useRouter } from 'next/navigation';

export default function Welcome() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70" />
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-[4%] py-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          className="h-[45px]"
          alt="Netflix"
        />
        <button
          onClick={() => router.push('/login')}
          className="bg-[#e50914] text-white px-4 py-2 rounded font-medium hover:bg-[#f40612] transition duration-200"
        >
          Sign In
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-[4%]">
        <div className="text-center max-w-[640px]">
          <h1 className="text-white text-[48px] md:text-[64px] font-black leading-[1.1] mb-4">
            Unlimited movies, TV shows, and more
          </h1>
          
          <p className="text-white text-[24px] font-normal mb-4">
            Watch anywhere. Cancel anytime.
          </p>
          
          <p className="text-white text-[20px] font-normal mb-8">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          {/* Email Signup */}
          <div className="flex flex-col md:flex-row gap-4 max-w-[600px] mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 h-[56px] px-4 bg-black/70 border border-gray-500 rounded text-white text-[16px] placeholder-gray-400 focus:outline-none focus:border-white transition duration-200"
            />
            <button
              onClick={() => router.push('/signup')}
              className="bg-[#e50914] text-white px-8 py-4 rounded text-[24px] font-medium hover:bg-[#f40612] transition duration-200 whitespace-nowrap"
            >
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 bg-black border-t-8 border-[#222]">
        <div className="max-w-[1100px] mx-auto px-[4%] py-[70px]">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center mb-[50px]">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-white text-[48px] font-black mb-4">
                Enjoy on your TV
              </h2>
              <p className="text-white text-[24px] font-normal">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="TV"
                className="w-full"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-[50px]">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-white text-[48px] font-black mb-4">
                Download your shows to watch offline
              </h2>
              <p className="text-white text-[24px] font-normal">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                alt="Mobile"
                className="w-full"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-white text-[48px] font-black mb-4">
                Watch everywhere
              </h2>
              <p className="text-white text-[24px] font-normal">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                alt="Devices"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 bg-black border-t-8 border-[#222]">
        <div className="max-w-[815px] mx-auto px-[4%] py-[70px]">
          <h2 className="text-white text-[48px] font-black text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-2 mb-12">
            {[
              'What is Netflix?',
              'How much does Netflix cost?',
              'Where can I watch?',
              'How do I cancel?',
              'What can I watch on Netflix?',
              'Is Netflix good for kids?'
            ].map((question, index) => (
              <div key={index} className="bg-[#2d2d2d] hover:bg-[#414141] transition duration-200">
                <button className="w-full text-left p-6 text-white text-[24px] font-normal flex items-center justify-between">
                  {question}
                  <span className="text-[36px]">+</span>
                </button>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <p className="text-white text-[20px] font-normal mb-8">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-[600px] mx-auto">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 h-[56px] px-4 bg-black/70 border border-gray-500 rounded text-white text-[16px] placeholder-gray-400 focus:outline-none focus:border-white transition duration-200"
              />
              <button
                onClick={() => router.push('/signup')}
                className="bg-[#e50914] text-white px-8 py-4 rounded text-[24px] font-medium hover:bg-[#f40612] transition duration-200 whitespace-nowrap"
              >
                Get Started &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-black border-t-8 border-[#222] px-[4%] py-[30px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-[#737373] text-[16px] mb-[30px]">
            Questions? Call{' '}
            <a href="tel:1-844-505-2993" className="hover:underline">
              1-844-505-2993
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[16px] text-[13px] text-[#737373] mb-[30px]">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Account</a>
            <a href="#" className="hover:underline">Media Center</a>
            <a href="#" className="hover:underline">Investor Relations</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Ways to Watch</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Corporate Information</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Speed Test</a>
            <a href="#" className="hover:underline">Legal Notices</a>
            <a href="#" className="hover:underline">Only on Netflix</a>
          </div>
          
          <div className="mb-[30px]">
            <select className="bg-black border border-[#737373] text-[#737373] px-[13px] py-[8px] text-[13px] rounded-[4px]">
              <option>English</option>
              <option>Español</option>
            </select>
          </div>

          <div className="text-[#737373] text-[13px]">
            Netflix Clone
          </div>
        </div>
      </div>
    </div>
  );
}