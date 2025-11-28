"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Database, Layout, Lock, Zap, BarChart3, Globe, Shield } from "lucide-react";
import { SignInButton, useAuth } from "@clerk/nextjs";

export default function LandingPage() {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Zap className="h-5 w-5" />
            </div>
            <span>TradeFiti Starter</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {isSignedIn ? (
              <Button asChild variant="default" size="sm">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <SignInButton mode="modal">
                <Button variant="default" size="sm">
                  Sign In
                </Button>
              </SignInButton>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              v1.0.0 Released
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
              The Ultimate <span className="text-primary">TradeFiti</span> Starter Kit
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Jumpstart your next project with a production-ready stack. Authentication, database, and UI components pre-configured for speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
              {isSignedIn ? (
                <Button asChild size="lg" className="h-12 px-8 text-base">
                  <Link href="/dashboard">
                    Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <SignInButton mode="modal">
                  <Button size="lg" className="h-12 px-8 text-base">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </SignInButton>
              )}
              <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/50 rounded-3xl my-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Everything you need</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A complete toolkit designed to help you build faster and scale easier.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Layout className="h-10 w-10 text-primary" />}
              title="Modern UI"
              description="Built with Tailwind CSS and Shadcn UI for a premium, accessible design system."
            />
            <FeatureCard
              icon={<Database className="h-10 w-10 text-primary" />}
              title="Real-time DB"
              description="Powered by Convex for reactive, real-time data syncing without the hassle."
            />
            <FeatureCard
              icon={<Lock className="h-10 w-10 text-primary" />}
              title="Authentication"
              description="Secure user management and authentication ready-to-go with Clerk."
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-10 w-10 text-primary" />}
              title="Type Safe"
              description="End-to-end TypeScript support for a robust and error-free development experience."
            />
          </div>
        </section>

        {/* Analytics Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <BarChart3 className="mr-2 h-4 w-4" />
                Analytics Ready
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Gain insights instantly
              </h2>
              <p className="text-muted-foreground text-lg">
                Built-in analytics dashboards and data visualization components help you understand your users and grow your business.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Real-time data visualization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Customizable reporting widgets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Exportable data formats</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-xl border bg-card p-2 shadow-2xl lg:p-4 rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="rounded-lg bg-muted/50 aspect-video flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="Dashboard Preview"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Scale Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 bg-primary/5 rounded-3xl my-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center lg:flex-row-reverse">
            <div className="order-last lg:order-first relative rounded-xl border bg-card p-2 shadow-2xl lg:p-4 -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="rounded-lg bg-muted/50 aspect-video flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                  alt="Global Map Preview"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Globe className="mr-2 h-4 w-4" />
                Global Scale
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Deploy to the edge
              </h2>
              <p className="text-muted-foreground text-lg">
                Your application is ready to scale globally from day one. Low latency, high availability, and zero config.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Edge caching enabled</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Automatic region routing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>DDoS protection included</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to build something amazing?
            </h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of developers building the future with TradeFiti Starter Kit.
            </p>
            <Button size="lg" className="h-12 px-8 text-base">
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Zap className="h-5 w-5" />
              <span>TradeFiti</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The best way to start your next project. Fast, secure, and scalable.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Features</a></li>
              <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About</a></li>
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 TradeFiti Starter Kit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 bg-background shadow-sm hover:shadow-md transition-shadow">
      <div className="rounded-full bg-primary/10 p-3">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
