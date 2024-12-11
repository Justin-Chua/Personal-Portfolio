import Head from 'next/head'

import NavBar from '@/components/NavBar'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <div>
      <Head>
        <link rel='icon' href='/resources/icons/browsericon.ico' />
        <title>Justin Chua | Portfolio</title>
        <meta name='description' content='Portfolio for Justin Chua, a full stack software developer based in Calgary, Alberta.' />
        <meta name='author' content='Justin Chua' />
        <meta
          name='keywords' content='calgary, graduate, computer science, software,
          software developer, software engineer, full stack, front-end, back-end,
          typescript, next.js, tailwind css'
        />
      </Head>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default Page
