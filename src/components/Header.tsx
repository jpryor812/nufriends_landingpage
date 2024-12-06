import Image from 'next/image'

export default function Header() {
  return (
    <header className="header-container">
      <Image
        src="/header_logo_nufriends.png"
        alt="nufriends logo"
        width={225}
        height={100}
        className="header-title"
        priority
      />
    </header>
  )
}