import { Button } from "@/components/ui/button";
import Link from "next/link";
import { steps } from "./steps";

interface FooterProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

export default function Footer({ currentStep, setCurrentStep }: FooterProps) {
  const previousStep = steps.find(
    (_, index) => steps[index + 1]?.key === currentStep,
  )?.key;

  const nextStep = steps.find(
    (_, index) => steps[index - 1]?.key === currentStep,
  )?.key;

  return (
    <footer className="w-full px-3 py-5 gap-4">
      <Button
        onClick={previousStep ? () => setCurrentStep(previousStep) : undefined}
        disabled={!previousStep}
      >
        Previous Step
      </Button>
      <Button onClick={nextStep ? () => setCurrentStep(nextStep) : undefined}
        disabled={!nextStep}>
        Next Step
      </Button>
      <Button asChild>
        <Link href="/resumes"> Close </Link>
      </Button>
    </footer>
  );
}
