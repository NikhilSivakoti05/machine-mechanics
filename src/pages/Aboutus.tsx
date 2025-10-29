import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users, Lightbulb, Heart, Rocket, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships based on trust and results."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assured",
      description: "We maintain the highest standards in every project, ensuring robust and reliable solutions."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Agile Delivery",
      description: "Fast, iterative development that adapts to your needs and delivers value continuously."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "15+ years leading digital transformation initiatives across Fortune 500 companies."
    },
    {
      name: "Michael Torres",
      role: "CTO",
      bio: "Former lead architect at major tech firms, specializing in scalable cloud infrastructure."
    },
    {
      name: "Priya Sharma",
      role: "Head of Design",
      bio: "Award-winning designer with a passion for creating intuitive user experiences."
    },
    {
      name: "James Liu",
      role: "Lead Developer",
      bio: "Full-stack expert with deep expertise in modern web and mobile technologies."
    }
  ];

//   const stats = [
//     { number: "150+", label: "Projects Delivered" },
//     { number: "50+", label: "Happy Clients" },
//     { number: "12", label: "Years Experience" },
//     { number: "25+", label: "Team Members" }
//   ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-foreground mb-6 animate-fade-in">
            About <span className="text-gradient">Us</span>
          </h1>
          <p className="text-xl text-muted font-body max-w-3xl mx-auto animate-fade-in-up">
            We're a team of passionate innovators dedicated to transforming businesses through technology
          </p>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-display font-black text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted font-body font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 animate-fade-in">
              <CardHeader>
                <CardTitle className="font-display font-bold text-3xl flex items-center gap-3">
                  <Target className="h-8 w-8 text-accent" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body text-muted leading-relaxed">
                <p className="mb-4">
                  To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create lasting value.
                </p>
                <p>
                  We believe that technology should be an enabler, not a barrier. Our mission is to make cutting-edge solutions accessible to organizations of all sizes, helping them compete and thrive in the digital age.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="font-display font-bold text-3xl flex items-center gap-3">
                  <Eye className="h-8 w-8 text-accent" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="font-body text-muted leading-relaxed">
                <p className="mb-4">
                  To be the most trusted technology partner in the region, known for delivering exceptional results and fostering innovation.
                </p>
                <p>
                  We envision a future where businesses seamlessly integrate technology into every aspect of their operations, unlocking new opportunities and achieving unprecedented success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              Our <span className="text-gradient">Story</span>
            </h2>
          </div>
          <Card className="border-2 animate-fade-in">
            <CardContent className="font-body text-muted leading-relaxed pt-6">
              <p className="mb-4">
                Founded in 2012, TechSG started as a small team of developers passionate about creating elegant solutions to complex problems. What began in a modest office has grown into a full-service digital agency serving clients across Asia-Pacific.
              </p>
              <p className="mb-4">
                Over the years, we've had the privilege of working with startups building their first product, enterprises modernizing their infrastructure, and everything in between. Each project has taught us valuable lessons and strengthened our commitment to excellence.
              </p>
              <p>
                Today, we're proud to be recognized as industry leaders, but we remain driven by the same passion that started it all: creating technology that makes a real difference in people's lives and businesses.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted font-body max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 animate-fade-in-up text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex justify-center mb-4 text-accent">
                    {value.icon}
                  </div>
                  <CardTitle className="font-display font-bold text-xl">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-body text-muted text-sm leading-relaxed">
                  {value.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted font-body max-w-3xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="border-2 animate-fade-in text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
                    <Users className="h-12 w-12 text-accent" />
                  </div>
                  <CardTitle className="font-display font-bold text-xl">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="font-body font-semibold text-accent">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="font-body text-muted text-sm leading-relaxed">
                  {member.bio}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
