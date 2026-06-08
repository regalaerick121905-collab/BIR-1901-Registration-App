"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Mail, Lock, User } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup and redirect to the form
    router.push('/form-1901');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] flex flex-col justify-center items-center relative p-6">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
        <ArrowLeft size={20} />
        Back to Home
      </Link>
      
      <div className="w-full max-w-md bg-[var(--bg-card)] border border-[var(--border)] p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden my-8">
        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-blue)]"></div>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">Create Account</h2>
          <p className="text-[var(--text-secondary)]">Start your digital Form 1901 registration</p>
        </div>
        
        <form onSubmit={handleSignup} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--text-secondary)]" htmlFor="name">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--text-secondary)]">
                <User size={20} />
              </div>
              <input 
                id="name"
                type="text" 
                className="w-full bg-[var(--bg-light)] border border-[var(--border)] rounded-lg py-3 pl-10 pr-4 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all placeholder-[var(--text-secondary)]"
                placeholder="Juan Dela Cruz"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--text-secondary)]" htmlFor="email">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--text-secondary)]">
                <Mail size={20} />
              </div>
              <input 
                id="email"
                type="email" 
                className="w-full bg-[var(--bg-light)] border border-[var(--border)] rounded-lg py-3 pl-10 pr-4 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all placeholder-[var(--text-secondary)]"
                placeholder="name@example.com"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--text-secondary)]" htmlFor="password">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--text-secondary)]">
                <Lock size={20} />
              </div>
              <input 
                id="password"
                type="password" 
                className="w-full bg-[var(--bg-light)] border border-[var(--border)] rounded-lg py-3 pl-10 pr-4 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all placeholder-[var(--text-secondary)]"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--text-secondary)]" htmlFor="confirm_password">Confirm Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--text-secondary)]">
                <Lock size={20} />
              </div>
              <input 
                id="confirm_password"
                type="password" 
                className="w-full bg-[var(--bg-light)] border border-[var(--border)] rounded-lg py-3 pl-10 pr-4 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all placeholder-[var(--text-secondary)]"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[var(--accent-blue)] text-white font-bold py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg mt-2"
          >
            Create Account
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-[var(--text-secondary)]">
          Already have an account?{' '}
          <Link href="/login" className="text-[var(--accent-blue)] font-semibold hover:underline">
            Log in instead
          </Link>
        </div>
      </div>
    </div>
  );
}
