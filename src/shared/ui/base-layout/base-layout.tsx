import { FunctionComponent, PropsWithChildren } from "react";
import { Header } from "@/shared/ui/header";
import { Typography } from "@/shared/ui/typography";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";

export const BaseLayout: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <main className="py-24 h-screen sm:py-32 lg:py-40">
      <ToastContainer pauseOnHover position="top-center" hideProgressBar />

      <Header />
      <div className="px-2 lg:px-4 py-6 md:py-0 mx-auto max-w-7xl flex flex-col justify-center items-center">
        {children}
      </div>

      <footer className="mt-20 py-4 text-center">
        <Typography variant="p" classes="text-gray-400">
          Powered by
        </Typography>

        <Link
          className="underline text-indigo-600"
          target="_blank"
          rel="noreferrer"
          href={"https://www.binance.com"}
        >
          Binance
        </Link>
      </footer>
    </main>
  );
};
