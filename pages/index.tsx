import { toPng } from 'html-to-image'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useCallback, useRef } from 'react'
import BasicCard from '../components/cards/BasicCard'

const Home: NextPage = () => {
  return (
    <>
      <BasicCard />
    </>
  )
}

export default Home
