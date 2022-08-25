import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { theme } from 'styles/theme'
import MenuModal from './MenuModal'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleModalOpen = () => {
    setIsOpen(true)
  }

  const handleModalClose = () => {
    setIsOpen(false)
  }

  const navigate = useNavigate()

  const mainNavigate = () => {
    navigate('/main')
  }

  // const closeBox = (e: React.MouseEvent<HTMLDivElement>) => {
  //   setMenuToggle(false)
  //   console.log('close')
  // }

  if (window.location.pathname === '/') return null
  return (
    <NavPage>
      <NavBox>
        <NavLogo onClick={mainNavigate}>Wemory</NavLogo>
        <MenuBox>
          <Login>로그인</Login>
          <Menu onClick={handleModalOpen}></Menu>
        </MenuBox>
        <MenuModal visible={isOpen} onClose={handleModalClose}></MenuModal>
      </NavBox>
    </NavPage>
  )
}

const NavPage = styled.nav`
  width: 100%;
  ${({ theme }) => theme.flexMixIn('center', 'center')}
`
const NavBox = styled.div`
  width: 90%;
  ${({ theme }) => theme.flexMixIn('space-between', 'center')}
  border-bottom: 3px solid gray;
`
const NavLogo = styled.h1`
  cursor: pointer;
`

const MenuBox = styled.div`
  width: 20%;
  ${({ theme }) => theme.flexMixIn('space-around', 'center')}
`
const Login = styled.div`
  font-size: 0.9rem;
  ${({ theme }) => theme.media.mobile`
    font-size:0.7rem;
  `}
  font-weight: bold;
`
const Menu = styled(AiOutlineMenu)`
  font-size: 1.2rem;
`

export default Nav
