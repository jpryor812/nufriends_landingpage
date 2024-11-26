import Image from 'next/image';
import '../../app/globals.css';

export default function AnswerQuestions() {
  return (
    <section className="answer-questions-container">
      <div className="AQ-demo">
        <Image
          src="/nufriends_demo_holder.svg"
          alt="NuFriends App Demo"
          layout="responsive"
          width={100} // Aspect ratio width
          height={200} // Aspect ratio height
          className="demo-image"
        />
      </div>
      <p className="AQ-text">
        Answer questions to help your AI companion get to know you and find your most compatible friends!
      </p>
    </section>
  );
}
