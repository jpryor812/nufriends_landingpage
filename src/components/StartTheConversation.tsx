// components/FeatureDemo/FeatureDemo.tsx
import Image from 'next/image'

export default function StartTheConversation() {
  return (
    <section className="start-conversation-container">
      <p className="start-conversation-text">Your AI companion will start the conversation for you, so no need to worry about the cold start! You can just jump right in!</p>

      <div className="start-conversation-demo">
        <Image
          src="/nufriends_demo_holder.svg"
          alt="NuFriends App Demo"
          layout="responsive"
          width={100} // Aspect ratio width
          height={200} // Aspect ratio height
          className="demo-image"
        />
      </div>
    </section>
  )
}