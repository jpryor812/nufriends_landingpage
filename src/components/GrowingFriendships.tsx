// components/FeatureDemo/FeatureDemo.tsx
import Image from 'next/image'

export default function GrowingFriendships() {
  return (
    <section className="growing-friendships-container">
      <p className="growing-friendships-text">See your friendships grow into something special...</p>

      <div className="growing-friendships-demo">
        <Image
          src="/nufriends_demo_holder.svg"
          alt="NuFriends App Demo"
          width={160}
          height={320}
          className="demo-image"
        />
      </div>
    </section>
  )
}