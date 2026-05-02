import React, { useRef, useEffect } from 'react';

export default function Banner() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          video.muted = true;
          video.play();
        });
      }
    }
  }, []);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => console.log("Replay failed:", err));
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-between px-6 md:px-20 overflow-hidden text-white bg-black">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          onEnded={handleReplay}
          className="w-full h-full object-cover pointer-events-none"
        >
          <source
            src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Left Content (Floka Studio) */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-16 select-none">
        <h1 className="text-[120px] md:text-[180px] font-bold leading-[0.8] tracking-tighter">
          Floka
        </h1>
        <span className="text-4xl md:text-5xl font-medium tracking-tight ml-2">
          Studio
        </span>
      </div>

      {/* Right Content (Card & Text) */}
      <div className="relative z-10 flex flex-col items-end self-end pb-16 max-w-[300px] gap-6 text-right">
        
        {/* Designer/Profile Card */}
        <div className="bg-white text-black p-3 rounded-2xl flex items-center gap-4 shadow-2xl w-full">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop" 
            alt="Profile"
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div className="flex flex-col text-left">
            <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold leading-none mb-1">Head of Idea</p>
            <p className="text-sm font-extrabold text-gray-900 leading-none">Almond D. Neisi</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-bold">+</div>
              <span className="text-[9px] font-black uppercase tracking-tighter">Let's Talk</span>
            </div>
          </div>
        </div>

        {/* Small Description */}
        <p className="text-[12px] leading-relaxed text-gray-300 font-light">
          No cookie-cutter websites. No fluff. Just real tools and smart strategies to grow your business and elevate your brand.
        </p>
      </div>

    </section>
  );
}