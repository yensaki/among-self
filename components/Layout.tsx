import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <Wrap>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Among Self" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://amongself.com" />
      <meta property="og:image" content="https://amongself.com/logo_square.png" />
      <meta property="og:site_name" content="Among Self" />
      <meta property="og:description" content="Among Usプレイで使うメモ(非公式)。インポスター度合いを記録しておけます" />
      <meta name="twitter:card" content="summary" />
    </Head>
    {children}
    <Footer>
      <hr />
      <p>
        「Among Self」は非公式のWebサービスです。
      </p>
      <p>
        powered by <a href="https://twitter.com/yensaki">yensaki</a>
      </p>
    </Footer>
  </Wrap>
)

const Wrap = styled.div`
  max-width: 1120px;
  display: flex;
  flex-flow: column;
  justify-content: center;

`

const Footer = styled.footer`
  margin: 0 0 0 30px;
`

export default Layout
