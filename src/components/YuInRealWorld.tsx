// components/FeatureDemo/FeatureDemo.tsx
import Image from 'next/image'

export default function YuInRealWorld() {
  return (
    <section className="yu-in-real-world-container">

      <div className="yu-in-real-world-demo">
        <Image
          src="/nufriends_demo_holder.svg"
          alt="NuFriends App Demo"
          layout="responsive"
          width={100} // Aspect ratio width
          height={200} // Aspect ratio height
          className="demo-image"
        />
      </div>
      <p className="yu-in-real-world-text">And, use your companion to improve social situations in the real world!</p>
    </section>
  )
}