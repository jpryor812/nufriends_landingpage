// components/FeatureDemo/FeatureDemo.tsx
import Image from 'next/image'

export default function YuInRealWorld() {
  return (
    <section className="yu-in-real-world-container">

      <div className="yu-in-real-world-demo">
        <Image
          src="/nufriends_demo_holder.svg"
          alt="NuFriends App Demo"
          width={160}
          height={320}
          className="demo-image"
        />
      </div>
      <p className="yu-in-real-world-text">And, use your companion to improve social situations in the real world!</p>
    </section>
  )
}