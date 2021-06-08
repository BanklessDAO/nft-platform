import { GetStaticProps } from 'next'
import { PageMetaProps } from '../components/global/Head'
import React from 'react'
import FeaturedSection from '../components/pages/Home/Featured';

const pageMeta: PageMetaProps = {
  title: 'Home | Bankless NFT',
  description:
    'An All in One NFT Platform created by the bankless decentralized community',
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
      <FeaturedSection />
    </React.Fragment>
  )
}

export default Page
