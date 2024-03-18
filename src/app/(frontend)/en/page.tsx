import { Metadata } from "next";
import DATA from "../UI/utils/constant";
import EnglishPage from "../UI/components/english/EnglishPage";
export const metadata: Metadata = DATA.en.Metadata;

export default function EnglishPageWrapper() {
  return <EnglishPage />;
}
