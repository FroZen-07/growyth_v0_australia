import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Youtube, Mic, ChevronRight, Check } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { StatsCarousel } from "@/components/stats-carousel"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold">Grow</span>
            <span className="text-3xl font-bold text-red-500">YT</span>
            <span className="text-3xl font-bold">h</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link> */}
            <a 
              href="https://calendly.com/sagniik-yt/growyt-media-x-hiring-call" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <Button
              variant="outline"
              className="text-white bg-black border-red-500 hover:bg-red-500/10 hover:text-white rounded-xl"
            >
             Schedule Strategy Call 
             <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="container mx-auto px-4 pt-32 pb-20 relative">
          {/* Decorative Elements
          <div className="absolute top-20 left-10 opacity-30">
            <Triangle className="h-16 w-16 rotate-180" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-30">
            <Triangle className="h-16 w-16" />
          </div> */}

          {/* Tags */}
          {/* <div className="flex justify-between mb-12 max-w-5xl mx-auto">
            <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500 hover:bg-red-500/20">
              Podcast Production
            </Badge>
            <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500 hover:bg-red-500/20">
              YouTube Content
            </Badge>
          </div> */}

          {/* Main Content */}
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="inline-block bg-gradient-to-r from-red-900 to-red-600  text-5xl px-6 py-2 mb-4 rounded-3xl">
              Humanizing venture capital, private equity & Entrepreneurs
              </span>
              <br />
              <span className="inline-block text-red-500 px-6 py-2">
              With Organic Content Flow
              </span>
            </h1>

            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We assist Venture Capital, private Equity & Entrepreneurs to successfully build Authority by Scaling Organic IP&apos;s and Content through YouTube & Other Short from content platform that creates more discoverability.

            </p>

            <a 
              href="https://calendly.com/sagniik-yt/growyt-media-x-hiring-call" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="mt-8 text-lg px-8 bg-red-600 hover:bg-red-700"
              >
                Schedule Strategy Call
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>


        <section className="flex justify-center my-4 py-4">
          <iframe
            src={`https://drive.google.com/file/d/1j6dz7wdOTesDqD46soIN045L0H8ORYU_/preview`}
            width="640"
            height="360"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </section>

        {/* Stats Section */}
        <section className="border-t border-white/10 bg-gradient-to-b from-black to-red-950/20">
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <h3 className="text-4xl font-bold text-red-500">150+</h3>
                <p className="text-gray-400">Episodes Produced</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-4xl font-bold text-red-500">2M+</h3>
                <p className="text-gray-400">Total Views</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-4xl font-bold text-red-500">50+</h3>
                <p className="text-gray-400">Active Clients</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-4xl font-bold text-red-500">85%</h3>
                <p className="text-gray-400">Engagement Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-950/20 rounded-xl p-8 border border-red-500/20 hover:border-red-500/40 transition-colors">
              <div className="flex items-center space-x-4 mb-6">
                <Mic className="h-8 w-8 text-red-400" />
                <h3 className="text-2xl font-bold">DFY - Consultation on Socials</h3>
              </div>
              <p className="text-gray-400 mb-6">
                End-to-end podcast production including recording, editing, distribution, and promotion strategies
                tailored for thought leaders.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  Ideation On New Topics (3-4 Videos/Month)
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  Fix Your Branding (if required)
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  Guest sourcing, Ideation
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  Weekly Calls
                </li>
              </ul>
            </div>
            <div className="bg-red-950/20 rounded-xl p-8 border border-red-500/20 hover:border-red-500/40 transition-colors">
              <div className="flex items-center space-x-4 mb-6">
                <Youtube className="h-8 w-8 text-red-400" />
                <h3 className="text-2xl font-bold">YouTube Growth</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Comprehensive YouTube channel management and optimization to maximize reach and engagement with your
                target audience.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  3-4 Videos / Month
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  Guest sourcing, Ideation
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  30 shortform Videos/Month
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  Amplify Via Niche Pages on Short Form Platforms
                </li><li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  Tailored Animations With branding
                </li><li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  Channel Audit (quarterly)
                </li><li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  24x7 Slack Support
                </li>
              </ul>
            </div>
            <div className="bg-red-950/20 rounded-xl p-8 border border-red-500/20 hover:border-red-500/40 transition-colors">
              <div className="flex items-center space-x-4 mb-6">
                <Zap className="h-8 w-8 text-red-400" />
                <h3 className="text-2xl font-bold">Revamp (For Established Brands)                </h3>
              </div>
              <p className="text-gray-400 mb-6">
                Develop a comprehensive content strategy that aligns with your brand and resonates with your target
                audience.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  Channel Audit
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  30 Shorts/Month
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  Amplify Via Niche Pages on Short Form Platforms
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  Ideation On New Topics (3-4 Videos/Month)
                </li><li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  Channel Audit (quarterly)
                </li><li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-red-400 mr-2" />
                  24x7 Slack Support
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-gradient-to-b from-red-950/20 to-black">
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "Custom",
                  description: "Perfect for those just starting their content journey",
                  features: [
                    "2 Podcast Episodes per Month",
                    "Basic YouTube Strategy",
                    "Social Media Snippets",
                    "Monthly Performance Report",
                  ],
                },
                {
                  name: "Growth",
                  price: "Custom",
                  description: "Ideal for established creators looking to scale",
                  features: [
                    "4 Podcast Episodes per Month",
                    "Advanced YouTube Strategy",
                    "Custom Thumbnail Design",
                    "Weekly Performance Analytics",
                    "Audience Growth Tactics",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "Tailored solutions for high-profile clients and brands",
                  features: [
                    "Unlimited Podcast Episodes",
                    "Full-Service YouTube Management",
                    "Cross-Platform Content Strategy",
                    "Dedicated Account Manager",
                    "Brand Partnership Opportunities",
                  ],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className="bg-red-950/20 rounded-xl p-8 border border-red-500/20 hover:border-red-500/40 transition-colors flex flex-col"
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-4">{plan.price}</p>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <ul className="space-y-3 text-gray-300 mb-8 flex-grow">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
              href="https://calendly.com/sagniik-yt/growyt-media-x-hiring-call" 
              target="_blank" 
              rel="noopener noreferrer"
            >
                  <Button className="w-full bg-red-600 hover:bg-red-700">Get Started</Button></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channel Stats Carousel */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Channel Growth Showcase</h2>
          <StatsCarousel />
        </section>

        {/* Testimonial Carousel */}
        <section className="bg-gradient-to-b from-red-950/20 to-black py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <FAQAccordion />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold">Grow</span>
                <span className="text-xl font-bold text-red-500">YT</span>
                <span className="text-xl font-bold">h</span>
              </Link>
              <p className="text-gray-400 text-sm">Helping thought leaders build influential content platforms.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Podcast Production</li>
                <li>YouTube Strategy</li>
                <li>Content Creation</li>
                <li>Channel Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} GrowYTh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

