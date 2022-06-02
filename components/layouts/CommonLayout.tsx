import Navbar from "@components/Navbar";
import Head from "next/head";
import { ReactElement } from "react";

const CommonLayout = ({children}:any) => {
  return (
    <div className='flex flex-col justify-center items-center px-6 mx-auto min-h-screen'>
      <Head>
        <title>qianyan</title>
        <meta name="description" content="Generated nice lyric\movie\book card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='grow w-full flex'>
        {children}
      </main>
    </div>
  )
}

export const getCommonLayout = (page: ReactElement) => <CommonLayout>{page}</CommonLayout>;
export default CommonLayout;