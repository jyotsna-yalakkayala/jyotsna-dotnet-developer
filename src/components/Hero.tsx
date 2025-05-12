import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  // Animation states for AI particles
  const [particles, setParticles] = useState<{id: number, x: number, y: number, size: number, speed: number}[]>([]);

  // Generate random particles on component mount
  useEffect(() => {
    const particlesArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1
    }));
    
    setParticles(particlesArray);

    // Animation loop for particles
    const interval = setInterval(() => {
      setParticles(prevParticles => prevParticles.map(p => ({
        ...p,
        y: p.y - p.speed < 0 ? 100 : p.y - p.speed,
        x: p.x + Math.sin(p.y / 20) * 0.3
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-amber-light/30 relative overflow-hidden">
      {/* Warm Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div 
            key={p.id}
            className="absolute rounded-full bg-warm/10"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.size / 4,
              transition: 'top 0.5s ease, left 0.5s ease'
            }}
          />
        ))}
        
        {/* Decorative Lines */}
        <svg className="absolute bottom-0 left-0 w-full h-40 opacity-10" viewBox="0 0 1000 200">
          <path d="M0,100 Q250,180 500,100 T1000,100" stroke="currentColor" fill="none" className="text-warm" strokeWidth="1" />
          <path d="M0,150 Q250,50 500,150 T1000,150" stroke="currentColor" fill="none" className="text-amber" strokeWidth="1" />
          <path d="M100,0 Q180,250 100,500 T100,1000" stroke="currentColor" fill="none" className="text-warm" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium text-warm backdrop-blur-sm border border-warm/10">
              <span className="flex items-center">
                <span className="h-2 w-2 bg-warm rounded-full mr-2 animate-pulse"></span>
                Available for collaboration
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Software Developer <span className="block text-primary">Engineer (.NET)</span>
            </h1>
            
            <div className="relative">
              <p className="text-lg md:text-xl text-muted-foreground">
                5+ years of experience in .NET | Crafting clean code with C# | Building scalable cloud solutions with Azure
                <span className="block font-semibold mt-2 text-foreground">.NET & Azure Specialist</span>
              </p>
              
              {/* Typing animation */}
              <div className="h-0.5 w-16 bg-warm/50 mt-2 animate-pulse"></div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="relative overflow-hidden group">
                <a href="#contact">
                  Contact Me
                  <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="relative overflow-hidden group" asChild>
                <a href="/resume/your-resume.pdf" target="_blank" rel="noopener noreferrer">
                  <span>View Resume</span>
                  <span className="absolute inset-0 w-full h-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Profile image with frame effect */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-warm/20 to-transparent pointer-events-none z-10"></div>
                <img 
                  src="https://i.postimg.cc/3wqDTRvF/Portfolio-profilre-picture.jpg"
                  alt="Jyotsna Yalakkayala"
                  className="w-full h-full object-cover"
                />
                
                {/* Scan effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="h-1.5 w-full bg-amber/10 animate-scan"></div>
                </div>
              </div>
              
              {/* Badge with enhanced style */}
              <div className="absolute -bottom-4 -right-4 bg-white py-2 px-4 rounded-full shadow-lg backdrop-blur-sm border border-amber/30 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2 relative">
                  <span className="h-3 w-3 bg-warm rounded-full animate-pulse"></span>
                  <span className="font-medium text-sm">Azure Certified</span>
                </div>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -left-8 -bottom-8 grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber/30"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
