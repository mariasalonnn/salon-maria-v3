import { HomeClient } from "./modules/HomeClient";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomeClient />;
}
