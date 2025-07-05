'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FaSearch, FaBell, FaCaretDown, FaGift, FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';
import { useSearch } from '@/hooks/useSearch';

interface NavbarProps {
  onSearchResults?: (show: boolean) => void;
}

const Navbar = ({ onSearchResults }: NavbarProps) => {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { user, logout } = useAuth();
  const { searchQuery, setSearchQuery } = useSearch();
  const router = useRouter();
  const pathname = usePathname();
  const searchRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'TV Shows', path: '/tv-shows' },
    { name: 'Movies', path: '/movies' },
    { name: 'New & Popular', path: '/new-popular' },
    { name: 'My List', path: '/my-list' },
    { name: 'Browse by Languages', path: '/browse' }
  ];

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      onSearchResults?.(true);
    } else {
      onSearchResults?.(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/welcome');
    setShowProfile(false);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setShowMobileMenu(false); // Close mobile menu after navigation
  };

  const isActivePage = (path: string) => {
    return pathname === path;
  };

  return (
    <div className={`fixed top-0 p-0 w-full h-[68px] z-50 transition-all duration-500 ${
      show ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="flex items-center justify-between h-full px-[4%] lg:px-[60px]">
        {/* Left side */}
        <div className="flex items-center">
          {/* Netflix Logo */}
          <img
            className="w-[92px] h-[25px] object-contain cursor-pointer mr-[25px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix"
            onClick={() => handleNavigation('/')}
          />
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-[20px] text-[14px] font-normal">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`transition duration-400 cursor-pointer ${
                  isActivePage(item.path)
                    ? 'text-white font-semibold'
                    : 'text-[#e5e5e5] hover:text-[#b3b3b3]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center ml-4">
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-white text-sm font-medium flex items-center space-x-2"
            >
              <span>Browse</span>
              {showMobileMenu ? <FaTimes /> : <FaCaretDown />}
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-[20px]">
          {/* Search */}
          <div className="relative" ref={searchRef}>
            {showSearch ? (
              <div className="flex items-center bg-black/70 border border-white px-2 py-1 rounded">
                <FaSearch className="w-4 h-4 text-white mr-2" />
                <input
                  type="text"
                  placeholder="Titles, people, genres"
                  className="bg-transparent text-white text-sm outline-none w-[200px] md:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  autoFocus
                />
                <button
                  onClick={() => setShowSearch(false)}
                  className="ml-2 text-white hover:text-gray-300"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <FaSearch 
                className="w-5 h-5 text-white cursor-pointer hover:text-[#b3b3b3] transition duration-400" 
                onClick={() => setShowSearch(true)}
              />
            )}
          </div>

          {/* Kids */}
          <button 
            onClick={() => handleNavigation('/kids')}
            className={`hidden md:block text-[14px] transition duration-400 cursor-pointer ${
              isActivePage('/kids')
                ? 'text-white font-semibold'
                : 'text-white hover:text-[#b3b3b3]'
            }`}
          >
            Kids
          </button>
          
          {/* Gift */}
          <FaGift className="w-5 h-5 text-white cursor-pointer hover:text-[#b3b3b3] transition duration-400" />
          
          {/* Notifications */}
          <div className="relative">
            <FaBell className="w-5 h-5 text-white cursor-pointer hover:text-[#b3b3b3] transition duration-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full"></div>
          </div>
          
          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => setShowProfile(!showProfile)}
            >
              <img
                className="rounded w-8 h-8"
                src={user?.avatar || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
                alt="Profile"
              />
              <FaCaretDown className={`w-3 h-3 text-white transition duration-300 ${showProfile ? 'rotate-180' : ''}`} />
            </div>
            
            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute right-0 top-12 w-[200px] bg-black/95 border-t-2 border-white py-2 rounded-sm shadow-lg">
                {user && (
                  <div className="px-4 py-2 text-sm text-white border-b border-gray-600">
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-xs text-gray-400">{user.email}</div>
                  </div>
                )}
                <button 
                  onClick={() => {
                    handleNavigation('/profiles');
                    setShowProfile(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:underline cursor-pointer text-sm text-white hover:bg-gray-800"
                >
                  Manage Profiles
                </button>
                <button 
                  onClick={() => {
                    handleNavigation('/account');
                    setShowProfile(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:underline cursor-pointer text-sm text-white hover:bg-gray-800"
                >
                  Account
                </button>
                <button className="w-full text-left px-4 py-2 hover:underline cursor-pointer text-sm text-white hover:bg-gray-800">
                  Help Center
                </button>
                <hr className="border-gray-600 my-2" />
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:underline cursor-pointer text-sm text-white hover:bg-gray-800"
                >
                  Sign out of Netflix
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden absolute top-[68px] left-0 right-0 bg-black/95 border-t border-gray-700">
          <div className="px-[4%] py-4 space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`block w-full text-left py-2 transition duration-300 ${
                  isActivePage(item.path)
                    ? 'text-white font-semibold'
                    : 'text-[#e5e5e5] hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <hr className="border-gray-700 my-3" />
            <button
              onClick={() => handleNavigation('/kids')}
              className={`block w-full text-left py-2 transition duration-300 ${
                isActivePage('/kids')
                  ? 'text-white font-semibold'
                  : 'text-[#e5e5e5] hover:text-white'
              }`}
            >
              Kids
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;