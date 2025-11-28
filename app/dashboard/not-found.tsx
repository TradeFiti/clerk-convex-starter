import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-background text-foreground p-8">
            <h1 className="text-6xl font-black text-primary">404</h1>
            <h2 className="text-2xl font-bold tracking-tight">Page Not Found</h2>
            <p className="text-muted-foreground text-center max-w-[500px]">
                Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Button asChild size="lg" className="mt-4">
                <Link href="/dashboard">Back to Dashboard</Link>
            </Button>
        </div>
    )
}
