import { ComponentType } from "react";

import { Track } from "./pages/Track";
import { Companies } from "./pages/Companies";

interface Route<T = any> {
  path: string;
  label: string;
  component: ComponentType<T>;
}

export const routes: Route[] = [
  {
    path: "/track",
    label: "Track new company",
    component: Track
  },
  {
    path: "/companies",
    label: "Companies",
    component: Companies
  }
];
