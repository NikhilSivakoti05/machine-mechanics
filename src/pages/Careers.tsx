import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Briefcase, Clock, ChevronDown, ChevronUp, Search } from "lucide-react";

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const jobs = [
   {
  title: "Marketing  Executive",
  department: "Marketing",
  location: "Hyderabad, India",
  type: "Full-time",
  skills: ["Creative Thinking", "Analytical Skills", "Interpersonal Abilities", "Content Creation", "Communication"],
  description:
    "We are looking for a passionate Market Executive to develop and implement effective marketing strategies that enhance brand visibility and drive business growth. The ideal candidate will combine creativity with analytical insight to manage campaigns, engage customers, and support promotional activities.",
},
{
  title: "Junior Design Engineer",
  department: "R&D",
  location: "Hyderabad, India",
  type: "Full-time",
  skills: ["CAD", "SolidWorks)", "manufacturing processes"],
  description:
    "Join our R&D team as a Junior Design Engineer and contribute to the development of cutting-edge products. You will work on 3D modeling, design optimization, and support the operation of advanced additive manufacturing systems while ensuring precision and quality in every prototype.",
},

    
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleJob = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-display font-black text-foreground">
                Join Our <span className="text-gradient">Team</span>
              </h1>
              <p className="text-xl text-muted font-body">
                Be part of a dynamic team pushing the boundaries of engineering and manufacturing innovation.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full animate-glow" />
                  <span className="font-body font-semibold">Competitive Salary</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full animate-glow" />
                  <span className="font-body font-semibold">Career Growth</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full animate-glow" />
                  <span className="font-body font-semibold">Great Benefits</span>
                </div>
              </div>
            </div>
            <div className="hero-gradient rounded-2xl p-12 text-center space-y-6 animate-fade-in-up">
              <h2 className="text-3xl font-display font-bold text-white">Why Work With Us?</h2>
              <div className="space-y-4 text-white/90 font-body">
                <p>🚀 Work on cutting-edge projects across diverse industries</p>
                <p>🎓 Continuous learning and professional development</p>
                <p>🌏 International exposure and collaboration</p>
                <p>💡 Innovation-driven culture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted" />
              <Input
                type="text"
                placeholder="Search by title, department, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <Card
                key={index}
                className="hover-lift cursor-pointer border-2 transition-smooth"
                onClick={() => toggleJob(index)}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="font-display font-bold text-2xl flex items-center gap-3">
                        {job.title}
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          {job.department}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="flex flex-wrap gap-4 text-base">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.type}
                        </span>
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon">
                      {expandedJob === index ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </CardHeader>

                {expandedJob === index && (
                  <CardContent className="pt-0 animate-fade-in">
                    <div className="space-y-4">
                      <p className="font-body text-muted">{job.description}</p>
                      <div>
                        <h4 className="font-display font-bold mb-2">Required Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="border-accent text-accent">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <a
  href={`https://mail.google.com/mail/?view=cm&to=mmechanicspvtl@gmail.com&su=Application%20for%20${encodeURIComponent(job.title)}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
  variant="cta"
  className="w-full md:w-auto mt-4"
  onClick={() => {
    alert("You are being redirected to your email. Please attach your resume and send it to us. We will get back to you soon!");
  }}
>
  Apply Now
</Button>

</a>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted font-body">
                No positions found matching your search. Try different keywords.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
