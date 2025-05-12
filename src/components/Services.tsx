
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Backend Development",
      description: "Building robust, scalable APIs and services using .NET Core and C#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M18 10h-4V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6h4"></path>
          <path d="M14 4v4"></path>
          <path d="M18 14v-4"></path>
        </svg>
      )
    },
    {
      title: "Cloud Architecture",
      description: "Designing and implementing cloud-native solutions with Microsoft Azure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
      )
    },
    {
      title: "Microservices Development",
      description: "Designing scalable, event-driven microservices leveraging Azure Functions, Azure Web Apps, Service Bus, and Event Hub etc.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <rect x="3" y="3" width="6" height="6" rx="1"></rect>
          <rect x="15" y="3" width="6" height="6" rx="1"></rect>
          <rect x="3" y="15" width="6" height="6" rx="1"></rect>
          <rect x="15" y="15" width="6" height="6" rx="1"></rect>
        </svg>
      )
    },
    {
      title: "DevOps Integration",
      description: "Writing deployment workflows and automation scripts using YAML within Azure DevOps",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M8 9h8"></path>
          <path d="M8 13h6"></path>
          <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
          <path d="M8 5v14"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="section-title">What I Offer</h2>
        <p className="text-lg mb-12 max-w-3xl">
          I specialize in developing backend systems and enterprise-level cloud-native 
          applications using .NET technologies and Microsoft Azure. I build scalable APIs, 
          automate infrastructure, and streamline deployments through DevOps best practices.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
