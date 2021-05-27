import { GetStaticProps } from 'next'
import { PageMetaProps } from '../components/global/Head'

import HeroSection from 'src/components/pages/Home/Hero'
import AuctionSection from 'src/components/pages/Home/Auctions'
import LearnSection from 'src/components/pages/Home/Learn'
import React from 'react'

const pageMeta: PageMetaProps = {
  title: 'Home | Bankless NFT',
  description:
    'An All in One NFT Platform created by a the bankless decentralized community',
  url: 'https://www.bankless.nft-platform/',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => {
  return (
    <React.Fragment>
      <HeroSection />
      <AuctionSection />
      <LearnSection />
    </React.Fragment>
  )
}

export default Page
