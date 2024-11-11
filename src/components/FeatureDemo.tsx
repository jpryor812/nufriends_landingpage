// components/FeatureDemo/FeatureDemo.tsx
import Image from 'next/image'

export default function FeatureDemo() {
  return (
    <section className="feature-section">

      <div className="demo-container">
        <Image
          src="/nufriends_demo_holder.svg"
          alt="NuFriends App Demo"
          width={200}
          height={430}
          className="demo-image"
        />
      </div>
    </section>
  )
}