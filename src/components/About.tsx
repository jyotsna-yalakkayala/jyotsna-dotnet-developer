
import { Card, CardContent } from "@/components/ui/card";
import VerticalSlice from "./VerticalSlice";

const About = () => {
  const education = [
    {
      degree: "Master of Engineering (MEng) in Communication & Networking",
      honors: "First Class Honours",
      institution: "Madras Institute of Technology",
      period: "June 2017 – June 2019"
    },
    {
      degree: "Bachelor of Technology (BTech) in Electronics & Communication",
      honors: "First Class Honours",
      institution: "SRM Institute of Technology",
      period: "June 2012 – June 2016"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="col-span-1">
            <div className="rounded-2xl overflow-hidden h-full shadow-md">
              <img 
                src="/placeholder.svg"
                alt="Jyotsna Yalakkayala Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 flex justify-center">
            <VerticalSlice />
          </div>
          <div className="col-span-1 md:col-span-1 space-y-6">
            <p className="text-lg leading-relaxed">
              Solution-oriented Software Engineer with 5+ years of experience designing and developing 
              scalable, cloud-native applications using .NET Core and Microsoft Azure. Proven expertise 
              in REST API development, microservices architecture, performance optimization, and cloud 
              automation.
            </p>
            <p className="text-lg leading-relaxed">
              Skilled in SQL and NoSQL databases, CI/CD pipelines using Azure DevOps. Certified in 
              AZ-900 and AZ-204. Adept at collaborating in Agile environments to deliver high-quality 
              enterprise solutions.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{item.degree}</h4>
                      <p className="text-sm text-muted-foreground">{item.honors}</p>
                      <p className="text-sm">{item.institution}</p>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
