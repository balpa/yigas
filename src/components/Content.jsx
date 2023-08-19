import '../App.css'
import EachContent from './content/EachContent'

function Content() {
  const contents = [
    {
      title: 'Who Am I',
      text: 'Hey friends. I’m Ali Abdaal. A former doctor turned YouTuber, entrepreneur, podcaster and soon-to-be author. I’ve been creating YouTube videos for over 7 years and have amassed a following of over 4 million on my main channel.This page is a little self indulgent, it’s all about me. Hopefully you’ll find it interesting though 🙂.'
    },
    {
      title: 'Quick Facts About Me',
      text: 'My YouTube journey started back in 2017 when I was still a student at Cambridge University. I was studying to become a doctor (the dream was to specialise in plastic surgery). Back then, I started creating videos to help other people with studying and passing exams. This is when I started my first business with my brother, 6Med. We created a platform to help people pass the entrance exams and get into medicine.'
    },
    {
      title: 'Quick Facts About Me',
      text: 'My YouTube journey started back in 2017 when I was still a student at Cambridge University. I was studying to become a doctor (the dream was to specialise in plastic surgery). Back then, I started creating videos to help other people with studying and passing exams. This is when I started my first business with my brother, 6Med. We created a platform to help people pass the entrance exams and get into medicine.'
    },
    {
      title: 'Quick Facts About Me',
      text: 'My YouTube journey started back in 2017 when I was still a student at Cambridge University. I was studying to become a doctor (the dream was to specialise in plastic surgery). Back then, I started creating videos to help other people with studying and passing exams. This is when I started my first business with my brother, 6Med. We created a platform to help people pass the entrance exams and get into medicine.'
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