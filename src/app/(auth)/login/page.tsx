"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and redirect to the form
    router.push('/form-1901');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] flex flex-col justify-center items-center relative p-6">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
        <ArrowLeft size={20} />
        Back to Home
      </Link>
      
      <div className="w-full max-w-md bg-[var(--bg-card)] border border-[var(--border)] p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-blue)]"></div>
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[var(--accent-blue)] rounded-lg flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-3xl">B</span>
          </div>
          <h2 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">Welcome Back</h2>
          <p className="text-[var(--text-secondary)]">Log in to continue your Form 1901 draft</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
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
            <div className="flex justify-between">
              <label className="text-sm font-medium text-[var(--text-secondary)]" htmlFor="password">Password</label>
              <a href="#" className="text-sm text-[var(--accent-blue)] hover:underline">Forgot password?</a>
            </div>
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
          
          <button 
            type="submit" 
            className="w-full bg-[var(--accent-blue)] text-white font-bold py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Log In
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-[var(--text-secondary)]">
          Don't have an account?{' '}
          <Link href="/signup" className="text-[var(--accent-blue)] font-semibold hover:underline">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}
