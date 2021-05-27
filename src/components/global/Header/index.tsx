import { useRef, useState } from 'react'
import NextLink from 'next/link'

import { useDetectOutsideClick } from 'src/hooks/useDetectOutsideClick'

import ConnectWalletButton from './ConnectWalletModal/ConnectWalletButton'
import * as S from './style'

const DropdownCarotIcon = ({ active = false }) => (
  <img
    src={active ? '/images/icon-carot-up.svg' : '/images/icon-carot-down.svg'}
    alt={active ? 'Close Dropdown' : 'Open Dropdown'}
    width={20}
    height={10}
  />
)

const Header = ({ currentPage = '' }) => {
  const auctionsDropdownRef = useRef()
  const collectionsDropdownRef = useRef()

  const [
    isAuctionsDropdownActive,
    setAuctionsDropdownActive,
  ] = useDetectOutsideClick(auctionsDropdownRef, false)
  const [
    isCollectionsDropdownActive,
    setCollectionsDropdownIsActive,
  ] = useDetectOutsideClick(collectionsDropdownRef, false)

  const handleAuctionsDropdownClick = () => {
    setAuctionsDropdownActive(!isAuctionsDropdownActive)
    setCollectionsDropdownIsActive(false)
  }

  const handleCollectionsDropdownClick = () => {
    setAuctionsDropdownActive(false)
    setCollectionsDropdownIsActive(!isCollectionsDropdownActive)
  }

  const handleDropdownItemClick = () => {
    setCollectionsDropdownIsActive(false)
    setAuctionsDropdownActive(false)
    setMobileNavIsActive(false)
  }

  const [isMobileNavActive, setMobileNavIsActive] = useState(false)
  const handleMobileNavClick = () => setMobileNavIsActive(!isMobileNavActive)
  return (
    <S.HeaderWrapper as="header">
      <S.HeaderContainer thin>
        <S.HeaderBrandContainer>
          <S.MobileNavButton>
            <img
              src={
                isMobileNavActive
                  ? '/images/icon-close.svg'
                  : '/images/icon-mobile-nav.svg'
              }
              alt="Open Mobile Nav"
              width={30}
              height={30}
              onClick={handleMobileNavClick}
            />
          </S.MobileNavButton>
          <S.LogoContainer>
            <NextLink href="/">
              <a onClick={() => setMobileNavIsActive(false)}>
                <img
                  src="/images/logo-1.png"
                  alt="Bankless Community Logo"
                  width={60}
                  height={60}
                />
              </a>
            </NextLink>
          </S.LogoContainer>
        </S.HeaderBrandContainer>
        <S.HeaderNavContainer>
          <S.HeaderNav active={isMobileNavActive}>
            <NextLink href="/featured">
              <S.HeaderNavItem
                active={currentPage.includes('/featured')}
                onClick={() => setMobileNavIsActive(false)}
              >
                Featured
              </S.HeaderNavItem>
            </NextLink>
            <NextLink href="/learn">
              <S.HeaderNavItem
                active={currentPage.includes('learn')}
                onClick={() => setMobileNavIsActive(false)}
              >
                Learn
              </S.HeaderNavItem>
            </NextLink>
            <S.DropdownNavItem>
              <S.HeaderNavItem
                active={currentPage.includes('/auctions')}
                onClick={handleCollectionsDropdownClick}
              >
                Auctions
                <S.DropdownCarot>
                  <DropdownCarotIcon active={isCollectionsDropdownActive} />
                </S.DropdownCarot>
              </S.HeaderNavItem>
              <S.DropdownContainer
                ref={collectionsDropdownRef}
                active={isCollectionsDropdownActive}
              >
                <li>
                  <NextLink href="/featured">
                    <S.HeaderNavItem
                      active={currentPage.includes('/auctions')}
                      onClick={handleCollectionsDropdownClick}>
                      Live
                      </S.HeaderNavItem>
                  </NextLink>
                </li>
                <li>
                <NextLink href="/featured">
                    <S.HeaderNavItem
                      active={currentPage.includes('/auctions')}
                      onClick={handleCollectionsDropdownClick}>
                      Upcoming
                      </S.HeaderNavItem>
                  </NextLink>
                </li>
              </S.DropdownContainer>
            </S.DropdownNavItem>
            <S.DropdownNavItem>
              <S.HeaderNavItem
                active={currentPage.includes('/collections')}
                onClick={handleAuctionsDropdownClick}
              >
                Collections
                <S.DropdownCarot>
                  <DropdownCarotIcon active={isAuctionsDropdownActive} />
                </S.DropdownCarot>
              </S.HeaderNavItem>
              <S.DropdownContainer
                ref={auctionsDropdownRef}
                active={isAuctionsDropdownActive}
              >
                <li>
                  <NextLink href="/featured">
                    <S.HeaderNavItem
                      active={currentPage.includes('/auctions')}
                      onClick={handleAuctionsDropdownClick}>
                      Participate
                      </S.HeaderNavItem>
                  </NextLink>
                </li>
                <li>
                <NextLink href="/featured">
                    <S.HeaderNavItem
                      active={currentPage.includes('/auctions')}
                      onClick={handleAuctionsDropdownClick}>
                      Upcoming
                      </S.HeaderNavItem>
                  </NextLink>
                </li>
              </S.DropdownContainer>
            </S.DropdownNavItem>
         
          </S.HeaderNav>
          <ConnectWalletButton />
        </S.HeaderNavContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
