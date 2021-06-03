import { GetStaticProps } from 'next'
import { PageMetaProps } from '../components/global/Head'
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
      
    </React.Fragment>
  )
}

export default Page
