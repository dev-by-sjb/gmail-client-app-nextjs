import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Send, Move, MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col place-items-center justify-center">
      <div className="text-center">
        <div className="max-w-md">
          <div className="text-6xl flex justify-center place-items-center gap-8">
            <Send className="text-primary" size={50}></Send>
            <h1 className=" font-bold">Paths Mailer</h1>
          </div>

          <p className="py-6 mb-8 text-lg leading-loose text-stone-500">
            Seamlessly integrate your Gmail account to access, manage, and compose emails
            effortlessly within our cutting-edge platform.
          </p>

          <Button asChild size="lg">
            <Link href="/mail">Get Started</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
