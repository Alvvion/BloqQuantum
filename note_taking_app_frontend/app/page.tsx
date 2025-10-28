import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-[#262626]">
      <Link href="/documents/123" className="text-blue-500 underline">
        Click here
      </Link>
    </div>
  );
}
