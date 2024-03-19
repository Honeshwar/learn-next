"use client";

import CTMPage from "../../UI/components/ctm/CTMPage";
import { CTMContextProvider } from "../../UI/context/ctmContext";

export default function CTM_Wrapper() {
  return (
    <CTMContextProvider>
      <CTMPage lang="en" />
    </CTMContextProvider>
  );
}
