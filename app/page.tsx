'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Users, Briefcase, TrendingUp, CheckCircle2, Mail, Linkedin, Phone } from 'lucide-react'

export default function Home() {
  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="HireClimb Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-green-600 transition-colors">Services</button>
            <a href="#why-us" className="text-gray-600 hover:text-green-600 transition-colors">Why Us</a>
            <a href="#approach" className="text-gray-600 hover:text-green-600 transition-colors">Our Approach</a>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-green-600 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Supplement Your Recruiting <span className="text-green-600">Bandwidth</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                HireClimb provides expert executive and contingent search recruiting consulting services. We&rsquo;re industry generalists ready to support your team&rsquo;s talent acquisition goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => scrollToSection('services')}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero.png"
                  alt="Professional recruiting team"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive recruiting solutions tailored to your organization&rsquo;s needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Executive Search */}
            <Card className="p-8 border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Executive Search</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Find top-tier executive talent for leadership positions. Our industry expertise and extensive network help identify candidates who align with your company culture and strategic vision.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  C-suite placements
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Director-level roles
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Strategic hiring
                </li>
              </ul>
            </Card>

            {/* Contingent Search */}
            <Card className="p-8 border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Contingent Search</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Scale your team quickly with contingent staffing solutions. We provide flexible, results-based recruiting to meet your immediate and ongoing talent needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Flexible staffing
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Project-based hiring
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Rapid deployment
                </li>
              </ul>
            </Card>

            {/* Recruiting Consulting */}
            <Card className="p-8 border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Recruiting Consulting</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Optimize your talent acquisition strategy with expert consulting. We help you build sustainable recruiting processes and strengthen your employer brand.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Strategy development
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Process optimization
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Employer branding
                </li>
              </ul>
            </Card>

            {/* Bandwidth Supplementation */}
            <Card className="p-8 border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Bandwidth Support</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Extend your internal recruiting team&rsquo;s capacity without the overhead. We work seamlessly with your team to handle high-volume hiring and specialized searches.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Team augmentation
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  High-volume hiring
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Specialized searches
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose HireClimb?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring expertise, flexibility, and results to every engagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-600">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Generalist</h3>
              <p className="text-gray-600">
                Expertise across all industries and sectors. We understand diverse talent markets and can adapt quickly to your specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-600">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Solutions</h3>
              <p className="text-gray-600">
                From full executive searches to contingent staffing, we scale our services to match your timeline and budget requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-600">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Results-Driven</h3>
              <p className="text-gray-600">
                We&rsquo;re focused on quality placements and long-term success. Your success is our success, and we&rsquo;re committed to delivering measurable results.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-600">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Network</h3>
              <p className="text-gray-600">
                Access to an extensive network of qualified candidates across industries, levels, and specializations.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-600">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Seamless Integration</h3>
              <p className="text-gray-600">
                We work as an extension of your team, integrating smoothly with your existing processes and culture.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-600">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Responsive Support</h3>
              <p className="text-gray-600">
                Dedicated support and communication throughout the entire recruiting process. We&rsquo;re here when you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for finding the right talent
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Discovery', desc: 'We deeply understand your needs, culture, and requirements' },
              { step: '2', title: 'Strategy', desc: 'Develop a targeted recruiting strategy tailored to your goals' },
              { step: '3', title: 'Sourcing', desc: 'Leverage our network to identify qualified candidates' },
              { step: '4', title: 'Placement', desc: 'Guide candidates through the process to successful placement' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white border-2 border-green-600 rounded-lg p-6 text-center h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-green-600 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Climb Higher?</h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Let&rsquo;s discuss how HireClimb can supplement your recruiting bandwidth and help you find the talent you need.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-gray-100"
            onClick={() => scrollToSection('contact')}
          >
            Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              We&rsquo;d love to hear from you. Reach out to discuss your recruiting needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:nikole@hireclimb.com" className="text-green-600 hover:text-green-700">
                nikole@hireclimb.com
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Linkedin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">LinkedIn</h3>
              <a href="https://linkedin.com" className="text-green-600 hover:text-green-700">
                Connect with us
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="HireClimb Logo"
                  width={100}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm">
                Recruiting consulting services to supplement your company&rsquo;s bandwidth.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-green-400">Executive Search</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-green-400">Contingent Search</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-green-400">Consulting</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#why-us" className="hover:text-green-400">About Us</a></li>
                <li><a href="#approach" className="hover:text-green-400">Our Approach</a></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-green-400">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-green-400">Twitter</a></li>
                <li><a href="mailto:nikole@hireclimb.com" className="hover:text-green-400">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 HireClimb. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
