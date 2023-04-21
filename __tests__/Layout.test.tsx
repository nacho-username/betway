import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from '../components/Layout'

describe('Layout', () => {
  test('renders navigation items', () => {
    const nav = [
      {
        id: '0',
        title: 'sports',
        accentColor: '00a826',
      },
      {
        id: '1',
        title: 'live & real',
        accentColor: 'A6BE45',
      },
      {
        id: '2',
        title: 'casino',
        href: '#',
        accentColor: '3D9CC3',
      },
      {
        id: '3',
        title: 'esports',
        accentColor: '9411C0',
      },
      {
        id: '4',
        title: 'vegas',
        accentColor: 'F9A11B',
      },
    ]
    const offer = {
      id: '0',
      text: 'Get up to £10 in Free Bets',
      subText: 'sports new customer offer',
      btnText: 'Join Now',
      btnHref: '#',
    }

    render(
      <Layout nav={nav} offer={offer}>
        Hello World
      </Layout>
    )
    const navItems = screen.getAllByRole('link')
    expect(navItems).toHaveLength(nav.length)
    navItems.forEach((navItem, index) => {
      expect(navItem.textContent).toEqual(nav[index])
    })
  })
})
