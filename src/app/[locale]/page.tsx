import LocaleSwitcher from "@/components/LocaleSwitcher";
import MyComponent from "@/components/MyComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LocaleSwitcher />
      <MyComponent/>
    </main>
  );
}
