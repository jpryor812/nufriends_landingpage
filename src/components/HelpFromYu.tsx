// components/FeatureDemo/FeatureDemo.tsx
import Image from 'next/image'

export default function HelpFromYu() {
  return (
    <section className="help-from-yu-container">

      <div className="help-from-yu-demo">
        <Image
          src="/nufriends_demo_holder.svg"
          alt="NuFriends App Demo"
          layout="responsive"
          width={100} // Aspect ratio width
          height={200} // Aspect ratio height
          className="demo-image"
        />
      </div>
      <p className="help-from-yu-text">Still not sure what to say, use your AI companion to come up with conversation ideas!</p>
    </section>
  )
}