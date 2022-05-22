import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";

const CommonLayout = ({children}:any) => {
  return (
    <div className='flex flex-col justify-center items-center py-6 px-4 mx-auto min-h-screen'>
      <Head>
        <title>qianyan</title>
        <meta name="description" content="Generated nice card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Image src='/logo.svg' alt='logo' width='146px' height='24' />
      </header>
      <main className='grow'>
        {children}
      </main>
      <footer className='opacity-50'>
        &copy;qianyan(beta)
      </footer>
    </div>
  )
}

export const getCommonLayout = (page: ReactElement) => <CommonLayout>{page}</CommonLayout>;
export default CommonLayout;