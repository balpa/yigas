import '../App.css'
import EachContent from './content/EachContent'

function Content() {
  const contents = [
    {
      title: 'The Start',
      text: 'It was my first year in university and during semester break I was at Lebanon, Beirut (I live in Turkey) and got myself a human biomechanics trainer certificate (I used to train basketball players at different levels, including players from TBL – Turkish Basketball League). While I was there the effect of prolonged stress in humans was mentioned a couple of times. When I came back, I watched Dr. Robert Sapolsky’s Ted Talk titled <a class="italic-text" href="https://youtu.be/ORthzIOEf30?si=_b2pNgN-JvPm35UA" target="_blank">The Biology of Our Best and Worst Selves</a> and said, “I want to interpret human behavior like he does.”'
    },
    {
      title: 'Getting Into Psychology Lab',
      text: 'So, I started watching <a href="https://youtube.com/playlist?list=PL848F2368C90DDC3D&si=jGwG62rGSvgSEi5L" target="_blank">Stanford’s Human Behavioral Biology classes</a>. It started nicely but I was struggling to understand since I did not have any background in the subject matter. To ask some questions I went to the Psychology department in my school and met with Dr. Hasan Bahcekapili and Dr. Onurcan Yilmaz. I occasionally started to visit Dr. Onurcan in his room to discuss topics and ask questions related to psychology. The more time I spent with him the more I realized how much I enjoy his research areas: Intersection between morality, politics, religion, and decision making. So, I started to shift my focus from <a href="https://www.amazon.com/Behave-Biology-Humans-Best-Worst/dp/1594205078" target="_blank">behavioral biology</a> to <a href="https://www.pearson.com/en-us/subject-catalog/p/social-psychology/P200000006448" target="_blank">social psychology</a>, and <a href="https://www.amazon.com/Evolutionary-Psychology-New-Science-Mind/dp/0205992129" target="_blank">evolutionary psychology</a>. At one point, he asked me if I would want to be a part of the lab that he was thinking of forming. I said yes, and ended up in <a href="https://www.moralintuitionslab.com" target="_blank">MINT Lab</a>.'
    },
    {
      title: 'Learning Statistics',
      text: 'Before the start of the lab, I enrolled in <a href="https://www.edx.org/learn/humanities/university-of-british-columbia-the-science-of-religion" target="_blank">Science of Religion in edX</a> to be sure that I was not missing important findings in the field. It was enjoyable because the information was presented in a very graspable way. But with the lab, once we started reading research papers, I realized I don’t know anything about statistics that are required to evaluate the papers. Being a literature student, I had to find something that assumed zero prior knowledge. I tried many books but <a class="italic-text" href="https://www.openintro.org/book/stat/" target="_blank">OpenIntro Statistics</a> and <a class="italic-text" href="https://tomfaulkenberry.github.io/JASPbook/index.html" target="_blank">Learning Stats with JASP</a> helped me a ton and they were enough for an undergraduate level. I started to realize how much I enjoyed studying statistics and wanted to improve myself on the matter.'
    },
    {
      title: 'Learning Mathematics',
      text: 'It bothered me that I did not know any mathematics and wondered how much knowing mathematics can help with statistics. There was someone that I got to know by playing Hearthstone (yes, I enjoyed card games): Dr. Basar Coskunoglu. I started studying mathematics with him. He was patient enough to start from very basics (I didn’t know anything, literally, so we had to start from functions, inequality systems etc.) with me. We made it all the way through calculus and linear algebra. We finished at a point where it was possible for me to go through books by myself, which was what I wanted in the first place. To this day, I still study linear algebra from different sources (mainly from my notes, <a class="italic-text" href="https://mml-book.github.io" target="_blank">Mathematics for Machine Learning</a> and <a href="https://www.amazon.com/Linear-Gilbert-Strang-Algebra/s?rh=n%3A13899%2Cp_lbr_one_browse-bin%3AGilbert+Strang" target="_blank">Gilbert Strang’s books</a>) almost weekly since I enjoy it very much.'
    },
    {
      title: 'Python for Data Science & ML',
      text: 'In lab and academia (social sciences), researchers mainly use statistical softwares such as JASP, Jamovi, SPSS. R programming is also used but during those times I started to lose a bit interest in academia due to different reasons. So, I wanted to learn Python. I attended a <a href="https://miuul.com/" target="_blank">Data Science & Machine Learning Bootcamp</a> which mainly helped me with programming skills along with industry-based cases rather than theoretical part since I was already done with the classic: <a class="italic-text" href="https://www.statlearning.com" target="_blank">Introduction to Statistical Learning.</a>'
    },
    {
      title: 'Data Science Internship',
      text: 'At the time I was still an undergraduate and was awarded a scholarship from TUBITAK (The Scientific and Technological Research Council of Turkey) for taking a part in a research project. But due to some circumstances, I wanted to try my chances outside academia. I wanted a part-time job or a long-term internship since I was still at school and did not want to burn out. Anyway, I started doing data science projects and included them on my CV under the “projects” part. I applied to different jobs but during the interviews I realized that many did not have a data science team and it scared me a little since it was going to be my first job, I felt like I needed a group of people that have some experience. Although I wasn’t sure how I would fit in a bank, I applied to DenizBank’s long term internship and after many steps I was accepted as data science intern.'
    },
    {
      title: 'Transition To Full-Time',
      text: 'I felt like I did OK during my internship, and it looks like this feeling was mutual since they wanted to keep me. Everything went smoothly at school, and I graduated. Additionally, although I spent six months there coding etc., it was still required for me to take the junior data scientist test which included SQL, Python/R and probability and statistics questions. I passed the exam and am currently working as Jr. Data Scientist at DenizBank.'
    },
    {
      title: 'Basketball Analytics',
      text: 'I played basketball for ten years and I also trained players. It was always in my mind to do something close to basketball. I saw <a href="https://linktr.ee/fdataanalysis" target="_blank">Formula 1 (F1) analytics account</a> that does F1 analysis, and it inspired me to do something similar with basketball data. You can follow my basketball analytics accounts from the upper right corner.'
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