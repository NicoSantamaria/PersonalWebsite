import './App.css';
  

export function Blog() {
    return (
        <>
            {/* <MathMe /> */}
            {/* <ProductivityManifesto /> */}
            <SkeletonComplete />
            <Inauguration />
        </>
    );
}


function BlogPost({ title, date}) {
    return (
        <>
            <h1>{ title }</h1>
            <p class='source_code'>{date}</p>
        </>
    );
}


function MathMe () {
    return (
        <div>
            <BlogPost title='What Math Means to Me' date='December 8, 2023' />
            <p>
                the general point being that math really is something which I can return to which is comforting for me,
                and since there is so much ego and self-worth and posturing tied up with mathematical ability, it's taken 
                a long time for me to come to terms with the fact that my love for math is genuine, it is intellectually
                and emotionally fulfiling for me.  
            </p>
            <p>
                On ego: Ghassan Sarkis, a math problem says nothing on itself, your reaction to it only reveals things that
                were already inside you.
            </p>
        </div>
    )
}


export function ProductivityManifesto () {
    return (
        <div>
            <BlogPost title='Productivity Manifesto' date='December 3, 2023' />
            <h3><i>Introduction</i></h3>
            <p>
                Over the last two years, thanks to personal revelations and lots of introspection, my perspective
                towards learning, productivity, and growth has shifted dramatically. In particular, I've interrogated
                the endeavors at which I have been successful and those at which I have fallen short throughout my life,
                and tried to reconstruct
                the reasons why. In doing so, I have come to believe that our dominant cultural ideas about goal-oriented efforts
                and productivity are misguided, unempathetic, and even downright self-defeating. Instead, I have gone in search
                of a new framework within which to reorient my relationship to work, one which acknowledges the differences among us
                while honoring our common humanity, and which combines ambition with self-compassion.
            </p>
            <p>
                I don't pretend to know what's right for you. But I do hope that my arguments below will inspire you to reflect on
                and challenge your own beliefs about productivity and growth. Too often, our beliefs are inherited unconsciously 
                from our culture or influences and remain imbedded in us, unchallenged, simply because we never thought to look.
            </p>
            <p>
                Ultimately, I hope to dissolve the cultural framework which puts ambition, hard work, and success in apparent 
                contradiction to an enjoyable and personally satisfying life. 
            </p>
            <h3><i>The Problem with Goals</i></h3>
            <p>
                The dominant cultural narrative is about setting, working towards, and achieving goals. This is the narrative I wish
                to challenge and replace.
            </p>
            <p>
                Setting yourslf up for failure, never enough. Sets you up for feeling like a failure. The twisted paradox is That
                feeling that you are a failure often sets you up to become one (see effects of low self-esteem).
            </p>
            <p>
                When chasing goals, you spent the vast majority of your time short of them, by definition. Then, if you do achieve a
                goal, you must set a new one right away, or risk stagnation. Even in those brief moments where you can celebrate yourself,
                your self-acceptance was conditional, namely, conditional on achieving the goal.
            </p>
            <p>
                Also sets you up for comparing yourself with others.
            </p>
            <h3><i>Reasons</i></h3>
            <p>
                Move from goals to reasons, shift metrics of success from predetermined milestones to time invested. The
                pace at which you learn is out of your hands, so celebrate yourself for the effort invested rather than
                the achievements profited. Ex of Goal (of studying mathematics): I want to become a stronger, more logical
                critical thinker (this one's particularly bad because, by the way it is constructed, it is a goal which can
                never truly be achieved). Instead, reason (for studying mathematics): Mathematics is fascinatingly deep
                and I find the hidden structures within beautiful in their elegance and universality. A goal is "of", a reason
                is "for": namely, a goal is the negation of a motivation, it draws from the endeavor; a reason is positive,
                and gives a justification for the endeavor. 
            </p>
            <p>
                You may struggle to come up with reasons for doing something in its own right. That's a good indication you 
                aren't truly passionate about the thing in the first place. As a result, motivating with reasons naturally
                directs you away from endeavors fueled by ego, and towards those which are born of genuine passion. 
            </p>
            <p>
                Privileging goals means you may give up if you don't succeed in exactly the way you had imagined for yourself,
                and remain blind to new, more profitable values. Privileging process allows you to succeed creatively, in ways
                you would have never imagined from the outset (especially becuase you don't even understand anything from the outset,
                such as which outcomes are feasible or even desirable!). Ex: With music, I never played 
            </p>
            <h3><i>Trust the Process (or, Time Spent)</i></h3>
            <p>
                The hardest part of shifting from a goal-oriented mindset towards one concerned with reasons and process is trusting
                that your processes will bear fruit. Trusting the process means believing that accomplishments will spring naturally
                from your effot in the future, accomplishments which you cannot, nor should, predict in the present day. 
                But the the switch is not purely a leap of faith. Consider all the things you are capable of doing right now, in the present
                moment. Chances are, very few of them are skills you acquired through conscious, goal-oriented effort; the vast majority
                of things we learn to do, we have learned simply by doing. 
            </p>
            <p>
                Should also argue why this way of thinking will yield better concrete results in the long term, despite not seeming that
                way at first glance.
            </p>
            <h3><i>Conclusion</i></h3>
            <p>
                Goal oriented thinking is an anxious and self-defeated way of thinking. Trusting yourself and your processes is scary,
                and requires creativity and open-mindedness about your future. But by conquering the anxiety, you set yourself up
                for a life that is simultaneously more productive and more fulfilling.
            </p>
        </div>
    )
}


function SkeletonComplete () {
    return (
        <div>
            <BlogPost title='Skeleton Complete' date='November 29, 2023' />
            <p>
                Today, I finished the general skeleton of the website. In particular, I completed the subheadings
                on the left navigation bar, which will direct to noteworthy projects or blog posts in the future.
                Getting them up and running was a challenge and I learned a lot about passing props and components
                in React in the process, as well as a fair amount about JavaScript syntax and functionality more 
                generally.
            </p>
            <p>
                Now that the skeleton of the site is working, I'm going to shift my focus to contributing meaningful
                content (though some minor bugs remain with the navigation bar). Most immediately, that will include 
                a webscraper that tests whether any given Wikipedia page
                routes to the philosophy page, which is something of an urban legend. I'm also working on a Python library
                for syndrome decoding and linear algebra over finite fields, though that will take longer to make its way
                over to the site.  
            </p>
            <p>
                Lastly, I'm going to work out how best to host the site on the web. And finish my finals. 
            </p>
        </div>
    )
}


function Inauguration () {
    return (
        <div>
            <BlogPost title='Inauguration' date='November 28, 2023' />
            <p>
                The website is up and running (locally)! A couple of days ago, I took
                it upon myself to build a personal website from the most fundamental
                tools I could manage, in order to challenge my engineering skills and
                showcase some of what I've been working on. 
            </p>
            <p>
                I ended up choosing to learn React.js. I think that ended up being a good decision,
                though it gave me something of a headache at the beginning. In particular,
                I struggled to get the sidebar up and running. But, now that I've finally figured
                out how to navigate the mess of props and components, which were much less intuitive
                to me than coding in Python or Haskell, I'm quite happy with how things turned out.
            </p>
            <p> 
                The project afforded me an unexpected opportunity to review JavaScript, HTML, and CSS, which
                I used to play around with in high school but had almost entirely forgotten.
            </p>
            <p>
                There's still much work to be done -- for now, the site consists of a navigation bar directing
                to four mostly empty pages -- but I think I've gotten a good start and I'm excited to keep
                building the site as time goes on.
            </p>
        </div>
    );
}