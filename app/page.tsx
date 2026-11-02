import type { Metadata } from "next";
import HomePage from "./components/HomePage";

// The homepage previously had no canonical tag. Title, description and Open Graph
// values are inherited from the root layout.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
