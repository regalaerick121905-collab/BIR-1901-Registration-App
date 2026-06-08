import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle, Shield, Zap, Smartphone } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--bg-base)]/80 backdrop-blur-md border-b border-[var(--border-light)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center relative" style={{background: 'linear-gradient(135deg, var(--gradient-blue) 0%, var(--gradient-red) 50%, var(--gradient-yellow) 100%)'}}>
              <span className="text-white text-lg font-bold" style={{fontFamily: 'var(--font-display)'}}>B</span>
            </div>
            <span className="text-base font-bold tracking-tight hidden sm:inline" style={{color: 'var(--text-primary)'}}>BIR 1901</span>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/login" style={{color: 'var(--text-secondary)'}} className="hover:opacity-100 opacity-80 transition-opacity text-sm md:text-base">
              Log in
            </Link>
            <Link href="/signup" className="px-5 py-2.5 rounded-lg font-semibold text-white text-sm md:text-base hover:scale-[1.02] transition-transform" style={{background: 'linear-gradient(135deg, var(--gradient-blue) 0%, var(--gradient-red) 50%, var(--gradient-yellow) 100%)'}}>
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-40 overflow-hidden">
        {/* Gradient glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(26, 47, 255, 0.08), transparent)'}}></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(232, 0, 61, 0.08), transparent)'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-[var(--border-light)] border" style={{backgroundColor: 'rgba(26, 47, 255, 0.08)'}}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: 'var(--gradient-red)'}}></span>
                <span className="text-sm font-medium" style={{color: 'var(--text-secondary)'}}>Modern Digital Platform</span>
              </div>

              <h1 className="text-6xl md:text-7xl leading-tight font-bold" style={{fontFamily: 'var(--font-display)', color: 'var(--text-primary)', letterSpacing: '-0.04em'}}>
                Register with <span className="gradient-text">purpose.</span>
              </h1>

              <p className="text-lg leading-relaxed max-w-lg" style={{color: 'var(--text-secondary)'}}>
                Streamlined BIR Form 1901 registration designed for modern businesses. Fast, secure, and built for success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/signup" className="flex items-center justify-center gap-2 text-white px-8 py-4 rounded-lg font-bold hover:scale-[1.02] transition-transform glow-md" style={{background: 'linear-gradient(135deg, var(--gradient-blue) 0%, var(--gradient-red) 50%, var(--gradient-yellow) 100%)'}}>
                  Start Now <ArrowRight size={20} />
                </Link>
                <Link href="/login" className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold hover:scale-[1.02] transition-transform" style={{border: `1px solid var(--border-light)`, color: 'var(--text-primary)', backgroundColor: 'rgba(15, 22, 40, 0.5)'}}>
                  Continue Draft
                </Link>
              </div>
            </div>

            {/* Right side card */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl" style={{background: 'linear-gradient(135deg, rgba(26, 47, 255, 0.1) 0%, rgba(232, 0, 61, 0.05) 100%)', filter: 'blur(40px)'}}></div>
              <div className="relative rounded-2xl p-8 md:p-12 border-[var(--border-light)] border glow-sm" style={{backgroundColor: 'var(--bg-card)'}}>
                <div className="space-y-8">
                  <div className="border-b border-[var(--border-light)] pb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: 'linear-gradient(135deg, var(--gradient-blue) 0%, var(--gradient-red) 50%, var(--gradient-yellow) 100%)'}}>
                        <FileText className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1" style={{fontFamily: 'var(--font-display)', color: 'var(--text-primary)'}}>Form 1901</h3>
                        <p className="text-sm" style={{color: 'var(--text-secondary)'}}>Business Registration</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      { icon: Shield, title: 'Secure & Encrypted', desc: 'Enterprise-grade protection' },
                      { icon: Zap, title: 'Instant Processing', desc: 'Real-time verification' },
                      { icon: CheckCircle, title: 'Government Compliant', desc: 'BIR approved standards' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <item.icon size={20} className="flex-shrink-0 mt-1" style={{color: 'var(--gradient-blue)'}} />
                        <div>
                          <h4 className="font-semibold mb-1" style={{color: 'var(--text-primary)'}}>{item.title}</h4>
                          <p className="text-sm" style={{color: 'var(--text-secondary)'}}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 md:py-32 border-t border-[var(--border-light)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: 'var(--font-display)', color: 'var(--text-primary)', letterSpacing: '-0.02em'}}>
              Why Form 1901?
            </h2>
            <div className="gradient-line h-1 w-24 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', icon: CheckCircle, title: 'Simple Process', desc: 'Guided workflow from start to finish' },
              { num: '02', icon: Smartphone, title: 'Mobile Ready', desc: 'Complete anywhere, anytime' },
              { num: '03', icon: Zap, title: 'Instant Status', desc: 'Real-time tracking and updates' },
            ].map((feature, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-2xl p-8 h-full border-[var(--border-light)] border glow-sm transition-all group-hover:glow-hover" style={{backgroundColor: 'var(--bg-card)'}}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, var(--gradient-blue) 0%, var(--gradient-red) 50%, var(--gradient-yellow) 100%)'}}>
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <p className="text-sm font-bold mb-4 opacity-40" style={{color: 'var(--text-primary)'}}>0{i + 1}</p>
                  <h3 className="text-2xl font-bold mb-3" style={{fontFamily: 'var(--font-display)', color: 'var(--text-primary)'}}>{feature.title}</h3>
                  <p className="mb-6" style={{color: 'var(--text-secondary)'}}>{feature.desc}</p>
                  <div className="gradient-line h-1 w-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 rounded-3xl" style={{background: 'linear-gradient(135deg, var(--gradient-blue) 0%, var(--gradient-red) 50%, var(--gradient-yellow) 100%)', opacity: '0.7'}}></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white" style={{fontFamily: 'var(--font-display)', letterSpacing: '-0.02em'}}>
            Ready to begin?
          </h2>
          <p className="text-lg mb-10 text-white/90 max-w-2xl mx-auto">
            Join thousands of successful businesses. Start your BIR Form 1901 registration today.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold hover:scale-[1.02] transition-transform" style={{backgroundColor: 'var(--bg-base)', color: 'var(--gradient-blue)'}}>
            Start Application <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-[var(--border-light)]" style={{backgroundColor: 'rgba(5, 13, 26, 0.5)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, var(--gradient-blue) 0%, var(--gradient-red) 50%, var(--gradient-yellow) 100%)'}}>
                <span className="text-white font-bold" style={{fontFamily: 'var(--font-display)'}}>B</span>
              </div>
              <p className="text-sm opacity-60" style={{color: 'var(--text-secondary)'}}>BIR Form 1901 Digital</p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Security', 'Pricing'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Help'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4" style={{color: 'var(--text-primary)'}}>{col.title}</h4>
                <ul className="space-y-2 text-sm opacity-60">
                  {col.links.map((link) => (
                    <li key={link}><a href="#" className="hover:opacity-100 transition-opacity" style={{color: 'var(--text-secondary)'}}>{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-[var(--border-light)] pt-8 text-center text-sm opacity-50" style={{color: 'var(--text-secondary)'}}>
            <p>&copy; 2024 Bureau of Internal Revenue. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
