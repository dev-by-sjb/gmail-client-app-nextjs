import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Mail, Send } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="w-full h-[50%] border-b">
      <div className="px-20 py-3 flex flex-row justify-between place-items-center">
        <div className="flex justify-center place-items-center gap-1">
          <Send className="text-primary"></Send>
          <h1 className="text-lg font-semibold">Paths Mailer</h1>
        </div>
        <section className="flex place-items-center gap-4 ">
          <ThemeToggle></ThemeToggle>

          <div className="flex items-center">
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/"></UserButton>
              {/* <SignOutButton>
                <Button>Sign Out</Button>
              </SignOutButton> */}
            </SignedIn>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Header;
