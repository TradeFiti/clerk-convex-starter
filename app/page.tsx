"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Database, Layout, Lock, Zap } from "lucide-react";
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
            <span>StarterKit</span>
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
              The Ultimate <span className="text-primary">Next.js</span> & <span className="text-primary">Convex</span> Starter
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
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by <a href="#" className="font-medium underline underline-offset-4">You</a>. The source code is available on <a href="#" className="font-medium underline underline-offset-4">GitHub</a>.
          </p>
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
