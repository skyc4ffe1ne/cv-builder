"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResumeEditor() {
  return (
    <>
      <h1 className="text-4xl border border-b pb-10"> Design you resume </h1>

      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div className="w-full md:w1/2">right</div>
          <div className="grow md:border-r" />
          <div className="w-full md:w1/2">left</div>
        </div>
      </main>

      <footer>
        <Button> Previous Step </Button>
        <Button> Next Step </Button>
        <Button asChild>
          <Link href="/resumes"> Next Step </Link>{" "}
          <p className="text-muted-foreground opacity-0"> Saving...</p>
        </Button>
      </footer>
    </>
  );
}
