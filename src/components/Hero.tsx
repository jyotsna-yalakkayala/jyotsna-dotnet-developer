
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium text-primary">
              Available for collaboration
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Solution-Oriented <span className="block text-primary">Software Engineer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Building scalable, cloud-native enterprise applications with performance and precision.
              <span className="block font-semibold mt-2 text-foreground">.NET & Azure Specialist</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" size="lg">
                View Resume
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/placeholder.svg"
                  alt="Jyotsna Yalakkayala"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white py-2 px-4 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="font-medium text-sm">Azure Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
