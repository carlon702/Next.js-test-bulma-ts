import ProfileCard from "./ProfileCard";
import Header from "./Header";
import Footer from "./Footer";
import "bulma/css/bulma.css";


export default function Home() {
  

  
  return (
    <>
    <Header />
  <div className="container">
    <section className="section">
      <div className="columns">
        <div className="column is-4">
        <ProfileCard title="Alexa" handle="@alexa99" image="/images/alexa.png"/>
        </div>
        <div className="column is-4">
        <ProfileCard title="Cortana" handle="@cortana32" image="/images/cortana.png"/>
          </div>
          <div className="column is-4">
          <ProfileCard title="Siri" handle="@Siri01" image="/images/siri.png"/>
          </div>
      </div>
    </section>
  </div>
  <Footer />
    </>
  )
}
