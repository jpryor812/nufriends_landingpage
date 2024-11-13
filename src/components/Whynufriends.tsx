import { Dancing_Script} from 'next/font/google'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: '400'
})

const Whynufriends = () => {
  return (
  <div className="blog-container" >
    <h5 className="blog-title">Why We Built nufriends</h5>
      <p>
      Many people highlight the “Loneliness Epidemic,” citing sources that over 50% of Americans feel lonely and consider none of their relationships meaningful. 
      I strongly empathize with that cohort, as I have been a member of it for most of my life. 
      </p>

      <p>
      What really saddens me, however, is the reported 12% of adults who feel they don’t have any close friends. I was devastated when I read this, and that devastation only grows as I get to know you all more. 
      I’ve read your posts on Reddit and X, and I’ve seen your videos on YouTube and TikTok. I know you’re struggling, and I know you feel like no one cares or is trying to help. 
      </p>

      <p>
        <em>I’m hoping that nufriends will be a rope for you to grab hold of and help pull you out of the depths of loneliness and isolation into a bright and beautiful world surrounded by people who empathize with you, know you, and love you. </em> 
      </p>

      <p>
      Many people have built technologies to attempt to help you, and I’m not promising you nufriends will finally be that solution, but I believe it has a good chance.      
      </p>

      <p>
      Traditional friend-matching apps don’t continually guide or help build friendships. They find you a friend and leave you to figure it out for yourself. 
      It can be incredibly hard to put yourself out there, be authentic, or even think of something to say! 
      This leaves the user scared, anxious, and disappointed that they couldn’t build that relationship. But you shouldn’t feel bad; building meaningful friendships online is hard.
      </p>

      <p>
      For some of you, this is too hard, and you’ve found some brief comfort in AI chatbot apps; however, I know many of you feel even worse after interacting with these “companions” as you still long for true human-human friendships.       
      </p>

      <p>
      I’m hoping that nufriends is finally that solution for you. Once we match you with friends we believe you’d be compatible with, we don’t leave you.
      We stay right by your side to start the conversation for you and support you anytime with a new conversation topic, an engaging question, or to help remind you of something fascinating about yourself that you didn’t even know people would care about!
      </p>

      <p>
      I can’t promise you’ll find five best friends on nufriends. What I can promise you is that we will give you the best chance out of every app you’ve tried to find those friendships.
      We will listen to you, we will help you, and if we have a large enough community, we will organize friends from around the world to meet in person and feel that meaningful connection face to face. 
      </p>

      <p>
      I hear you all now, and will hear you as a member of nufriends. I’ve had some dark times in my life where I’ve experienced deep loneliness.   
      I understand how you feel, and it’s why I’m so passionate about helping you break free from this strong downward force of negativity and help you find some people to give you a hand and lift you out.
      </p>

      <p>
      <em>Then, you all can float with joy and security.</em>      
      </p>

      <p>
      If you have any questions, please reach out. If you sign up for the waitlist, I, Justin, will personally be one of your first five friends to help you take the first step. I hear you, and I will be here for you. I hope to talk to you soon!
      </p>
      <div className="signature-container">
        <div className={`signature ${dancingScript.className}`}>
          <div className="signature-line">- Justin,</div>
          <div className="signature-line">Founder of nufriends</div>
        </div>
      </div>

    </div>
  );
};

export default Whynufriends;
