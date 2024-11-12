import HeroTitle from '../src/components/HeroTitle';
import Header from '../src/components/Header';
import EmailSignup from '@/src/components/EmailSignUp';
import WhatIsNufriends from '@/src/components/WhatIsNufriends';
import AnswerQuestions from '@/src/components/AnswerQuestions';
import StartTheConversation from '@/src/components/StartTheConversation';
import HelpFromYu from '@/src/components/HelpFromYu';
import GrowingFriendships from '@/src/components/GrowingFriendships';
import YuInRealWorld from '@/src/components/YuInRealWorld';
import Whynufriends from '@/src/components/Whynufriends';
import EmailSignup2 from '@/src/components/EmailSignUp2';
import ChatWidget from '@/src/components/ChatWidget';
import EmailSignup3 from '@/src/components/EmailSignUp3';
import HeroVideo from '@/src/components/HeroVideo';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroTitle />
      <HeroVideo />
      <EmailSignup />
      <WhatIsNufriends />
      <AnswerQuestions />
      <StartTheConversation />
      <HelpFromYu />
      <GrowingFriendships />
      <YuInRealWorld />
      <EmailSignup2 />
      <Whynufriends />
      <ChatWidget />
      <EmailSignup3 /> 
    </main>
  )
}