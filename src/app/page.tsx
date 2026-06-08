import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle, Shield, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border-color">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg font-display">B</span>
            </div>
            <span className="text-lg font-semibold tracking-tight hidden sm:inline">BIR Form 1901</span>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/login" className="text-secondary hover:text-foreground transition-colors text-sm md:text-base">
              Log in
            </Link>
            <Link href="/signup" className="gradient-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:scale-[1.02] transition-transform text-sm md:text-base">
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-blue/5 border border-gradient-blue/20">
                <span className="w-2 h-2 rounded-full bg-gradient-mid animate-pulse"></span>
                <span className="text-sm font-medium text-secondary">Modern Digital Registration</span>
              </div>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-6xl md:text-7xl font-normal leading-tight tracking-tight text-balance">
              Register your <span className="gradient-text">Business</span> with confidence.
            </h1>
            <p className="text-lg text-secondary leading-relaxed max-w-md">
              Experience the streamlined BIR Form 1901. Fast, secure, and designed for modern businesses applying for tax registration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/signup" className="flex items-center justify-center gap-2 gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:scale-[1.02] transition-transform shadow-sm">
                Start Application <ArrowRight size={18} />
              </Link>
              <Link href="/login" className="flex items-center justify-center gap-2 bg-white border border-border-color text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background transition-colors">
                Continue Draft
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white border border-border-color rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-8">
              <div className="border-b border-border-color pb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <FileText className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-normal mb-1">Form 1901</h3>
                    <p className="text-secondary text-sm">Application for Registration</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Lock, title: 'Secure & Encrypted', desc: 'Enterprise-grade data protection.' },
                  { icon: CheckCircle, title: 'Fast Processing', desc: 'Instant verification and submission.' },
                  { icon: Shield, title: 'Government Compliant', desc: 'Meets all BIR requirements.' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <feature.icon className="text-gradient-blue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-secondary text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl md:text-6xl font-normal mb-4 text-balance">Why choose Form 1901 Digital?</h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Simple Process', desc: 'Guided step-by-step registration workflow' },
              { num: '02', title: 'Real-time Status', desc: 'Track your application progress instantly' },
              { num: '03', title: 'Mobile Ready', desc: 'Complete registration on any device' },
            ].map((feature, i) => (
              <div key={i} className="group">
                <div className="bg-white border border-border-color rounded-2xl p-8 h-full hover:border-gradient-blue/50 transition-all hover:shadow-md">
                  <p className="text-4xl font-semibold text-gradient-blue/20 mb-4">{feature.num}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-normal mb-3">{feature.title}</h3>
                  <p className="text-secondary leading-relaxed">{feature.desc}</p>
                  <div className="h-1 w-12 gradient-primary mt-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="gradient-primary rounded-2xl p-12 md:p-16 text-center text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl md:text-6xl font-normal mb-4 text-balance">Ready to get started?</h2>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">Join thousands of businesses that have successfully registered using BIR Form 1901 Digital.</p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gradient-blue px-8 py-4 rounded-lg font-semibold hover:scale-[1.02] transition-transform">
              Start Your Application <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white mt-32">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold font-display">B</span>
              </div>
              <p className="text-sm opacity-75">BIR Form 1901 Digital Registration</p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Security', 'Pricing'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Contact'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2 text-sm opacity-75">
                  {col.links.map((link) => (
                    <li key={link}><a href="#" className="hover:opacity-100 transition-opacity">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8 text-sm opacity-75 text-center">
            <p>&copy; 2024 Bureau of Internal Revenue. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
