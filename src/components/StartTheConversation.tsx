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
          width={160}
          height={320}
          className="demo-image"
        />
      </div>
    </section>
  )
}