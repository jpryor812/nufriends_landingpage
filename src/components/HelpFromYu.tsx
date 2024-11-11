// components/FeatureDemo/FeatureDemo.tsx
import Image from 'next/image'

export default function HelpFromYu() {
  return (
    <section className="help-from-yu-container">

      <div className="help-from-yu-demo">
        <Image
          src="/nufriends_demo_holder.svg"
          alt="NuFriends App Demo"
          width={160}
          height={320}
          className="demo-image"
        />
      </div>
      <p className="help-from-yu-text">Still not sure what to say, use your AI companion to come up with conversation ideas!</p>
    </section>
  )
}