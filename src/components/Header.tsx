import Image from 'next/image'

export default function Header() {
  return (
    <header className="header">
      <Image
        src="/nufriends_header.svg"
        alt="NuFriends"
        width={200}
        height={50}
        priority
        className="logo"
      />
    </header>
  )
}