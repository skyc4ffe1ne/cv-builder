import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header>
      <Link href="/resumes"> Resumes </Link>
      <ThemeToggle />
    </header>
  );
}
