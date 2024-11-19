import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your curriculum",
};

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto w-full px-3 py-6">
      <Button asChild>
        <Link href="/editor">New curriculum</Link>
      </Button>
    </main>
  );
}
