import { Typography } from "@/shared/ui/typography";

export default function Home() {
  return (
    <main className="py-24 sm:py-32 lg:py-40">
      <div className="px-2 lg:px-4 mx-auto max-w-7xl">
        <div className="sm:text-center">
          <Typography variant="h2" classes="text-lg font-semibold leading-8 text-purple">Cryptocurrencies</Typography>
          <Typography variant="p" classes="mt-2 text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">Digital money for a digital world</Typography>

          <Typography variant="p" classes="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Cryptocurrencies are digital or virtual currencies that use cryptography for security and are decentralized, meaning they are not controlled by any government or financial institution.
          </Typography>
        </div>
      </div>
    </main>
  )
}
