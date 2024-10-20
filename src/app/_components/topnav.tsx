"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="mb-3 flex items-center justify-between border-b border-b-orange-50 bg-black p-4 font-semibold text-white">
      <a href="/" className="text-white">
        Home
      </a>
      <div>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />

          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
}
