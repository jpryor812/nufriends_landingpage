// components/FeatureDemo/FeatureDemo.tsx
import Image from 'next/image'

export default function AnswerQuestions() {
  return (
    <section className="answer-questions-container">

      <div className="AQ-demo">
        <Image
          src="/nufriends_demo_holder.svg"
          alt="NuFriends App Demo"
          width={160}
          height={320}
          className="demo-image"
        />
      </div>
      <p className="AQ-text">Answer questions to help your AI companion get to know you and find you your most compatitble friends!</p>
    </section>
  )
}