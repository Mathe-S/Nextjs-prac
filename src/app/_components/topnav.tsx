import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="flex items-center justify-between bg-black p-4 font-semibold text-white">
      <a href="/" className="text-white">
        Home
      </a>
      <div>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
}
