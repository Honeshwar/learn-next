import { Metadata } from "next";
import { englishMetadata } from "../UI/utils/constant";
import EnglishPage from "../UI/components/english/EnglishPage";
export const metadata: Metadata = englishMetadata;

export default function EnglishPageWrapper() {
  return <EnglishPage />;
}
