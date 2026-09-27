import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Online Calculators Save Time",
  description:
    "Learn how online calculators save time, reduce manual work, and help with percentages, loans, BMI, age calculations, and everyday tasks.",
  alternates: {
    canonical: "/blog/how-online-calculators-save-time",
  },
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
