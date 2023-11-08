import { Typography } from "@/shared/ui/typography";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/widgets/header";

export default function Home() {
  return (
    <main className="py-24 h-screen sm:py-32 lg:py-40">
        <Header />

      <div className="px-2 lg:px-4 mx-auto max-w-7xl flex flex-col justify-center items-center">
        <div className="sm:text-center">
          <Typography
            variant="h2"
            classes="text-lg font-semibold leading-8 text-purple"
          >
            Cryptocurrencies
          </Typography>
          <Typography
            variant="p"
            classes="mt-2 text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl"
          >
            Digital money for a digital world
          </Typography>

          <Typography
            variant="p"
            classes="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
          >
            Cryptocurrencies are digital or virtual currencies that use
            cryptography for security and are decentralized, meaning they are
            not controlled by any government or financial institution.
          </Typography>
        </div>

        <Image width={420} height={420} src={'/crypto-animated-illustration.gif'} alt='' />
      </div>

      {/* List */}
      {/* Footer list */}

      <footer className="mt-20 py-4 text-center">
        <Typography variant="p" classes="text-gray-400">
          Powered by
        </Typography>

        <Link className="underline text-indigo-600" target="_blank" rel="noreferrer" href={'https://www.binance.com'}>
          Binance
        </Link>
      </footer>
    </main>
  );
}
