'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';

export default function Profiles() {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const profiles = [
    {
      id: 1,
      name: user?.name || 'User',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
      isKids: false
    },
    {
      id: 2,
      name: 'Kids',
      avatar: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBfdisU1B0sxbcfW5MrxBVrXy5dcVMVFBjXLW8PDwjw.png?r=229',
      isKids: true
    },
    {
      id: 3,
      name: 'Add Profile',
      avatar: null,
      isAdd: true
    }
  ];

  const handleProfileClick = (profile: any) => {
    if (profile.isAdd) {
      // Handle add new profile
      return;
    }
    
    if (isEditing) {
      // Handle edit profile
      return;
    }
    
    // Select profile and go to main app
    router.push('/');
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-white text-4xl md:text-6xl font-normal mb-8">
            Who's watching?
          </h1>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="group cursor-pointer"
                onClick={() => handleProfileClick(profile)}
              >
                <div className="relative mb-4">
                  {profile.isAdd ? (
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-600 rounded-lg flex items-center justify-center group-hover:bg-gray-500 transition">
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : (
                    <img
                      src={profile.avatar || ''}
                      alt={profile.name}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-lg group-hover:ring-4 group-hover:ring-white transition"
                    />
                  )}
                  
                  {isEditing && !profile.isAdd && (
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <p className="text-white text-lg md:text-xl font-normal group-hover:text-gray-300 transition">
                  {profile.name}
                </p>
              </div>
            ))}
          </div>
          
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-gray-400 text-lg border border-gray-400 px-8 py-2 hover:text-white hover:border-white transition"
          >
            {isEditing ? 'Done' : 'Manage Profiles'}
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}