import HeadTag from '../components/HeadTag'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <HeadTag
        description="Next.js App Starter from Alan W. Smith"
        image="https://nextjs-app-starter.alanwsmith.com/og-images/main.png"
        title="Next.js App Starter from Alan W. Smith"
        type="website"
        url="https://nextjs-app-starter.alanwsmith.com"
      />
      <h1>CSS Playground</h1>
      <p>A place for me to mess around with CSS stuff</p>
      <ul>
        <li>
      <Link href="/sandbox/keep-address-bar-visible-in-safari-on-ios"><a>keep-address-bar-visible-in-safari-on-ios</a></Link>
        </li>
      </ul>
    </>
  )
}
