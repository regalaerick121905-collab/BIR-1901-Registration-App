import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--bg-base)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-[var(--text-primary)]">BIR 1901</span>
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/login" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
              Log in
            </Link>
            <Link href="/signup" className="px-5 py-2 rounded-md bg-[var(--accent-blue)] text-white font-medium hover:opacity-90">
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 bg-[var(--bg-base)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-[var(--text-primary)]">
                Business registration, simplified.
              </h1>

              <p className="text-lg text-[var(--text-secondary)] max-w-lg leading-relaxed">
                Complete your BIR Form 1901 registration in minutes. A straightforward, secure process designed for businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent-blue)] text-white font-medium rounded-md hover:opacity-90">
                  Get started <ArrowRight size={18} />
                </Link>
                <Link href="/login" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--border)] rounded-md text-[var(--text-primary)] hover:bg-[var(--bg-light)]">
                  Continue draft
                </Link>
              </div>
            </div>

            {/* Right side colored cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-lg p-6 border border-[var(--color-green)]/30">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[var(--color-green)]/20 rounded-md">
                    <Shield className="text-[var(--color-green)]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Secure</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Industry-standard encryption protects your data</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-lg p-6 border border-[var(--color-cyan)]/30">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[var(--color-cyan)]/20 rounded-md">
                    <CheckCircle className="text-[var(--color-cyan)]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Fast</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Complete registration in just minutes</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 rounded-lg p-6 border border-[var(--color-indigo)]/30">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[var(--color-indigo)]/20 rounded-md">
                    <FileText className="text-[var(--color-indigo)]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Form 1901</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Official BIR registration for self-employed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 md:py-28 bg-[var(--bg-light)] border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-2">
              Why choose Form 1901 Digital?
            </h2>
            <p className="text-[var(--text-secondary)]">Everything you need for business registration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Straightforward', desc: 'Clear, intuitive interface designed for speed' },
              { title: 'Secure', desc: 'Your data is encrypted and protected' },
              { title: 'Real-time', desc: 'Track your application status instantly' },
            ].map((item, i) => (
              <div key={i} className="bg-[var(--bg-card)] p-8 rounded-lg border border-[var(--border)]">
                <p className="text-sm font-semibold text-[var(--text-secondary)] mb-3">0{i + 1}</p>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:py-28 bg-[var(--accent-blue)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Ready to register?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join businesses across the country using Form 1901 Digital for seamless registration.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--accent-blue)] font-medium rounded-md hover:opacity-90">
            Start now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-[var(--bg-base)] border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-semibold text-[var(--text-primary)] mb-1">BIR 1901</p>
              <p className="text-sm text-[var(--text-secondary)]">Business registration platform</p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Security', 'FAQ'] },
              { title: 'Company', links: ['About', 'Blog', 'Contact'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Support'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-[var(--text-primary)] mb-3 text-sm">{col.title}</h4>
                <ul className="space-y-2 text-sm">
                  {col.links.map((link) => (
                    <li key={link}><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--text-secondary)]">
            <p>&copy; 2024 Bureau of Internal Revenue. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
