import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import { Splash } from "@/components/structure/splash";


export default function Landing() {
  return (
    <>
      <Head>
        <title>G. Shah Dev</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          property='og:image'
          content='https://cdn.jsdelivr.net/gh/gaurangrshah/_shots@master/scrnshots/image.png'
        />
      </Head>

      <Flex m='auto auto'>
        <Splash />

        {/* Protected content only visible to auhenticaed users
        <ProtectedRoute>
          Go to your <Link href='/dashboard/pages'>dashboard</Link>
        </ProtectedRoute>
        */}
      </Flex>
    </>
  );
}
