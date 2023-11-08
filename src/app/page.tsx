import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import { BaseLayout } from "@/shared/ui/base-layout";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <BaseLayout>
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
          cryptography for security and are decentralized, meaning they are not
          controlled by any government or financial institution.
        </Typography>
      </div>

      <Image
        width={420}
        height={420}
        src={"/crypto-animated-illustration.gif"}
        alt=""
      />

      {/* List */}
    </BaseLayout>
  );
}
