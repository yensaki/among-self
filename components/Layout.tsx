import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
    </header>
    {children}
    <footer>
      <hr />
      <p>
        Among UsはInnerSloth社のゲームです。
        <br />
        本サービスはInnerSloth社とは無関係の非公式サービスです
      </p>
      <p>
        powered by <a href="https://twitter.com/yensaki">yensaki</a>
      </p>
    </footer>
  </div>
)

export default Layout
