import '../App.css'
import EachContent from './content/EachContent'

function Content() {
  const contents = [
    {
      title: 'The Start',
      text: 'It was my first year in university and in semester I went to Lebanon, Beirut (I live in Turkey) and got myself a human biomechanics trainer certificate. While I was there the effect of prolonged stress in humans was mentioned a couple of times. When I came back, I watched Dr. Robert Sapolsky’s Ted Talk and said, “I want to interpret human behavior like he does.” '
    },
    {
      title: 'Getting Into Psychology Lab',
      text: 'So, I started watching Stanford’s Human Behavioral Biology classes. It started nicely but I was struggling to understand since I did not have any background in the subject matter. To ask some questions I went to the Psychology department in my school and met with Dr. Hasan Bahcekapili and Dr. Onurcan Yilmaz. I occasionally started to visit Dr. Onurcan in his room to discuss topics and ask questions related to psychology. The more time I spent with him the more I realized how much I enjoy his research areas: Intersection between morality, politics, religion, and decision making. So, I started to shift my focus from behavioral biology to social and evolutionary psychology. At one point, he asked me if I would be part of the lab that he was thinking of forming. I said yes, and ended up in MINT Lab.'
    },
    {
      title: 'Learning Statistics',
      text: 'Before the start of the lab, I enrolled in Science of Religion in edX to be sure that I was not missing important findings in the field. It was enjoyable because the information was presented in a very graspable way. But after the lab started, we started reading research papers and I realized I don’t know anything about statistics that are required to evaluate the papers. Being a literature student, I had to find something that starts from 0. I tried many books but OpenIntro Statistics and Learning Stats with JASP helped me a ton and they were enough for an undergraduate level. I started to realize how much I enjoyed studying statistics and wanted to improve myself on the matter.'
    },
    {
      title: 'Learning Mathematics',
      text: 'It bothered me that I did not know any mathematics and wondered how much knowing mathematics can help with statistics. There was someone that I got to know by playing Hearthstone (yes, I enjoyed card games): Dr. Basar Coskunoglu. I started studying mathematics with him. He was patient enough to start from very basics (I didn’t know anything, literally, so we had to start from functions, inequality systems etc.) with me. We made it all the way through calculus and linear algebra. We finished at a point where it was possible for me to go through books by myself, which was what I wanted in the first place. To this day, I still study linear algebra from different sources (mainly from my notes, Mathematics for Machine Learning and Gilbert Strang’s books) almost weekly since I enjoy it very much.'
    },
    {
      title: 'Python for Data Science & ML',
      text: 'In lab and academia (social sciences), researchers mainly use statistical softwares such as JASP, Jamovi, SPSS. R programming is also used but during those times I started to lose a bit interest in academia due to different reasons. So, I wanted to learn Python. I attended a Data Science & Machine Learning Bootcamp which mainly helped me with programming skills rather than theoretical part since I was already done with the classic: Introduction to Statistical Learning.'
    }
  ]

  return (
    <div className="content-wrapper">
      <div className="content-container">
        {contents.map((content, index) => <EachContent key={index} content={content}/>)}
      </div>
    </div>
  )
}

export default Content