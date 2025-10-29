import React, { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_fc8foun",    // Replace with your EmailJS Service ID
          "template_q2kks4l",   // Replace with your EmailJS Template ID
          form.current,
          "iU_lKaSn15tUCQCbi"     // Replace with your EmailJS Public Key (User ID)
        )
        .then(
          () => {
            toast.success("Message sent successfully! We'll get back to you soon.");
            form.current?.reset();
          },
          (error) => {
            toast.error("Failed to send message. Please try again.");
            console.error("EmailJS error:", error);
          }
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-foreground mb-6 animate-fade-in">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted font-body max-w-3xl mx-auto animate-fade-in-up">
            Have a project in mind? Let's discuss how we can help bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 animate-fade-in">
              <CardHeader>
                <CardTitle className="font-display font-bold text-2xl">Send us a Message</CardTitle>
                <CardDescription className="font-body">
                  Fill out the form below and we'll respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-body font-semibold">First Name</label>
                      <Input name="first_name" placeholder="first name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-body font-semibold">Last Name</label>
                      <Input name="last_name" placeholder="last name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-body font-semibold">Email</label>
                    <Input type="email" name="email" placeholder="john.doe@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-body font-semibold">Phone</label>
                    <Input type="tel" name="phone_number" placeholder="" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-body font-semibold">Company</label>
                    <Input name="company_name" placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-body font-semibold">Message</label>
                    <Textarea name="message" placeholder="Tell us about your project..." rows={6} required />
                  </div>
                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information Cards */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="font-display font-bold text-2xl flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-accent" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-body">
                  <h1>Registered Office </h1>
                  <p className="text-muted">27-12-46 Alibaig Street Governorpet </p>
                  <p className="text-muted">Vijayawada,Andhra Pradesh 520002</p>
                  <br/>
                  <h1>R&D Unit</h1>
                  <p className="text-muted">Plot No:15 Beside MDR Homes Bandelguda</p>
                  <p className="text-muted">Patancheru Hyderabad Telangana  502319 </p>
                  

                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="font-display font-bold text-2xl flex items-center gap-3">
                    <Phone className="h-6 w-6 text-accent" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-body">
                  <p className="text-muted">Main:+91 7093025948</p>
                  {/* <p className="text-muted">Sales: +91 9100991365</p>
                  <p className="text-muted">Support: +91 </p> */}
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="font-display font-bold text-2xl flex items-center gap-3">
                    <Mail className="h-6 w-6 text-accent" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-body">
                  <p className="text-muted">Main: mmechanicspvtl@gmail.com</p>
                  {/* <p className="text-muted">Sales: sales@techsg.com</p>
                  <p className="text-muted">Support: support@techsg.com</p> */}
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="font-display font-bold text-2xl flex items-center gap-3">
                    <Clock className="h-6 w-6 text-accent" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-body space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted">Monday - Saturday</span>
                    <span className="font-semibold">10:00 AM - 7:00 PM</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-muted">Saturday</span>
                    <span className="font-semibold">10:00 AM - 2:00 PM</span>
                  </div> */}
                  {/* <div className="flex justify-between">
                    <span className="text-muted">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
