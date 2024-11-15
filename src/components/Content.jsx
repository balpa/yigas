import '../App.css'
import EachContent from './content/EachContent'
import { motion } from 'framer-motion'

function Content() {
  const contents = [
    {
      title: 'The Start',
      text: 'During my first year at university, I spent a semester break in Beirut, Lebanon, where I earned a human biomechanics trainer certificate. I’d been training basketball players at various levels, including those in the Turkish Basketball League (TBL). While in Beirut, I often heard about the impact of prolonged stress on human health. This led me to watch Dr. Robert Sapolsky’s TED Talk, <a class="italic-text" href="https://youtu.be/ORthzIOEf30?si=_b2pNgN-JvPm35UA" target="_blank">The Biology of Our Best and Worst Selves</a>, and I thought, "I want to understand human behavior the way he does."'
    },
    {
      title: 'Getting Into Psychology Lab',
      text: 'I began watching <a href="https://youtube.com/playlist?list=PL848F2368C90DDC3D&si=jGwG62rGSvgSEi5L" target="_blank">Stanford’s Human Behavioral Biology courses online</a>. While intriguing, I found the material challenging without a background in the field. To get answers, I reached out to my university’s Psychology Department, where I met Dr. Hasan Bahçekapılı and Dr. Onurcan Yılmaz. Soon, I was visiting Dr. Yılmaz’s office regularly to discuss topics related to psychology, and I grew fascinated with his research interests—especially how morality, politics, religion, and decision-making intersect. Gradually, I shifted my focus from <a href="https://www.amazon.com/Behave-Biology-Humans-Best-Worst/dp/1594205078" target="_blank">behavioral biology</a> to <a href="https://www.pearson.com/en-us/subject-catalog/p/social-psychology/P200000006448" target="_blank">social</a> and <a href="https://www.amazon.com/Evolutionary-Psychology-New-Science-Mind/dp/0205992129" target="_blank">evolutionary psychology</a>. When he offered me a spot in the lab <a href="https://www.moralintuitionslab.com" target="_blank">(MINT Lab)</a> he was forming, I jumped at the opportunity.'
    },
    {
      title: 'Learning Statistics',
      text: 'Ahead of the lab’s start, I took an <a href="https://www.edx.org/learn/humanities/university-of-british-columbia-the-science-of-religion" target="_blank">edX\'s Science of Religion</a> course to ensure I had foundational knowledge. Although enjoyable, I quickly realized, once we started reading research papers, that I needed a solid ground in statistics to evaluate them. As an English Literature major, I needed a resource that started from scratch, and <a class="italic-text" href="https://www.openintro.org/book/stat/" target="_blank">OpenIntro Statistics</a> and <a class="italic-text" href="https://tomfaulkenberry.github.io/JASPbook/index.html" target="_blank">Learning Stats with JASP</a> became essential guides for me. Studying statistics was unexpectedly enjoyable, and I decided to develop my skills further.'
    },
    {
      title: 'Learning Mathematics',
      text: 'Not knowing mathematics bothered me, and I began to wonder how it might enhance my understanding of statistics. Fortunately, I connected with Dr. Basar Coşkunoğlu, whom I knew through playing <a class="italic-text">Hearthstone</a>. With his patient guidance, I started with basics like functions and inequalities, eventually advancing to calculus and linear algebra. We reached a point where I could continue independently, and I still study linear algebra occasionally, using my notes, <a class="italic-text" href="https://mml-book.github.io" target="_blank">Mathematics for Machine Learning</a>, and <a href="https://www.amazon.com/Linear-Gilbert-Strang-Algebra/s?rh=n%3A13899%2Cp_lbr_one_browse-bin%3AGilbert+Strang" target="_blank">Gilbert Strang’s works</a>.'
    },
    {
      title: 'Python for Data Science & ML',
      text: 'In the lab and academia, statistical tools like JASP, Jamovi, and SPSS are prevalent, with some usage of R. Around this time, however, my academic interests began shifting, so I decided to learn Python. I enrolled in a Data Science & Machine Learning Bootcamp, which focused on programming and industry cases, building on my previous knowledge from <a class="italic-text" href="https://www.statlearning.com" target="_blank">Introduction to Statistical Learning</a>.'
    },
    {
      title: 'Data Science Internship',
      text: 'While still an undergraduate, I received a scholarship from TUBITAK (The Scientific and Technological Research Council of Turkey) for research participation. Wanting broader experience, I sought a part-time role or long-term internship to balance with school. I started building a project portfolio and applied to various positions. Many interviews revealed that prospective employers lacked data science teams, which felt limiting for my first role. Finally, I applied for and was accepted to DenizBank’s data science internship program.'
    },
    {
      title: 'Transition To Full-Time',
      text: 'During my internship, things went well, and DenizBank invited me to join full-time after graduation. Despite six months of on-the-job coding, I needed to pass a data scientist test in SQL, Python/R, and statistics to secure the position, which I did. I now work full-time as a Data Scientist at DenizBank.'
    },
    {
      title: 'Basketball Analytics',
      text: 'After ten years of playing and training in basketball, I always hoped to integrate it into my work. Inspired by a <a href="https://linktr.ee/fdataanalysis" target="_blank">Formula 1 analytics account</a>, I launched a basketball analytics account of my own. You can find it linked in the upper right corner.'
    }
  ]

  return (
    <div className="content-wrapper">
      <motion.div
        className="content-container">
        {contents.map((content, index) => <EachContent key={index} content={content}/>)}
      </motion.div>
    </div>
  )
}

export default Content