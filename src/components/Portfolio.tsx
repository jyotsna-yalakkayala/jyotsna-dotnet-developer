
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Portfolio</h2>
        
        <Card className="border-dashed border-2 mt-12 max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-medium">Projects Coming Soon!</CardTitle>
          </CardHeader>
          <CardContent className="text-center py-8">
            <div className="rounded-full w-20 h-20 bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"></path>
                <path d="M12 11h4"></path>
                <path d="M12 7h4"></path>
                <path d="M12 15h4"></path>
                <path d="M8 15h1"></path>
                <path d="M8 11h1"></path>
                <path d="M8 7h1"></path>
              </svg>
            </div>
            <p className="text-muted-foreground mb-6">
              I'm currently working on adding projects to my portfolio. 
              <br />
              Visit my GitHub to stay updated!
            </p>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Button variant="outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Portfolio;
