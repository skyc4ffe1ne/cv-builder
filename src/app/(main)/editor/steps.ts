import { EditorFormProps } from "@/lib/type";
import GeneralInfoForms from "./forms/GeneralInfoForms";
import PersonalInfoForms from "./forms/PersonalInfoForms";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  {
    title: "Generate info",
    component: GeneralInfoForms,
    key: "general-info",
  },
  {
    title: "Personal info",
    component: PersonalInfoForms,
    key: "personal-info",
  },
];
