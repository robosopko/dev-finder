"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SignOutButtonProps {
  className?: string;
  variant?: "default" | "ghost" | "outline" | "destructive";
  size?: "default" | "sm" | "lg";
}

export const SignOutButton = ({
  className,
  variant = "ghost",
  size = "sm",
}: SignOutButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut({ redirectTo: "/" });
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSignOut}
      disabled={isLoading}
      variant={variant}
      size={size}
      className={cn(className)}
    >
      {isLoading ? "Signing out..." : "Sign out"}
    </Button>
  );
};
