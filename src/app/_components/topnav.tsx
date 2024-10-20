"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();

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
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
}
