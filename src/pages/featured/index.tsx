import { GetStaticProps } from 'next'
import { PageMetaProps } from '../../components/global/Head'

import Hero from '../../components/pages/Featured/Hero';

const pageMeta: PageMetaProps = {
  title: 'Featured NFTs | Bankless',
  description: 'Currently Featured Auctions,Collections and Items',
  url: 'https://www.bankless.nft-platform/featured',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => {
  return <Hero />
}
export default Page
