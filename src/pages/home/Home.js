import AboutComp from "../../components/about/AboutComp"
import Hero from "../../components/hero/Hero"
import Quote from "../../components/quote/Quote"
import RecentPosts from "../../components/recentPosts/RecentPosts"
import "./home.scss"
const Home = () => {
  return (
    <>
      <Hero />
      <RecentPosts />
      <Quote />
      <AboutComp />
    </>
  )
}
export default Home
