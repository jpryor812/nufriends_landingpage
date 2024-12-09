import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="header-container">
      <Link href="/">
        <Image
          src="/nufriends_logo_final.png"
          alt="nufriends logo"
          width={225}
          height={100}
          className="header-title"
          priority
        />
      </Link>
      
      <nav>
        <Link 
          href="/blog" 
          className="blog-link"
        >
          Blog
        </Link>
      </nav>
    </header>
  )
}