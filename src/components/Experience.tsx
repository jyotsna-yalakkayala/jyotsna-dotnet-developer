
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "Accenture",
      position: "Senior Analyst, Backend Developer",
      period: "March 2022 – Present",
      achievements: [
        "Developed and optimized REST APIs for telemetry data from 24 million smart devices",
        "Built CI/CD pipelines using Azure DevOps; automated deployments with ARM and YAML",
        "Integrated Azure Event Hub, Service Bus, Cosmos DB in microservices",
        "Ensured secure systems using OAuth 2.0 and JWT"
      ]
    },
    {
      company: "Cognizant Technology Solutions",
      position: "Programmer Analyst",
      period: "Oct 2019 – Feb 2022",
      achievements: [
        "Developed .NET Core features for an educational content delivery platform",
        "Collaborated in Agile teams, integrated third-party services",
        "Maintained Azure-hosted infrastructure",
        "Improved application performance by 40% through code optimizations"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-title">Work Experience</h2>

        <div className="space-y-6 mt-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="backdrop-blur-sm bg-white/80 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-primary">{exp.position}</CardTitle>
                    <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-muted-foreground">{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
