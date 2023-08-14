import Banner from './banner';
import Nav from './nav';
import SectionCTA from './sectionCTA';
import Footer from './footer';
import Pricing from './Pricing';
import Stats from './Stats';
import Reviews from './reviews';

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner />
      <SectionCTA />
      {/* <Stats></Stats> */}
      {/* <Reviews /> */}
      <Pricing />
      <Footer></Footer>
    </main>
  )
}
