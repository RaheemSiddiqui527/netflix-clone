interface NetflixBackgroundProps {
  children: React.ReactNode;
  showOverlay?: boolean;
}

const NetflixBackground = ({ children, showOverlay = true }: NetflixBackgroundProps) => {
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
      {showOverlay && (
        <>
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90" />
        </>
      )}
      
      {children}
    </div>
  );
};

export default NetflixBackground;