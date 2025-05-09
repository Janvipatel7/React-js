import Card from "./components/card";
const App = () =>{

  let aboutdes = "This is about About....";
  let servicedes = "This is about Services....";
  let contactdes = "This is about Contact....";
  let aboutImage = "https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.jpg?s=612x612&w=0&k=20&c=Oc2HZUPVJRXFsjTwKVgWY_ddWrKeQUG0KCyKUGef-ig=";
  let serviceImage = "https://img.freepik.com/premium-vector/logo-service-is-shown-white-background_692155-1260.jpg?semt=ais_hybrid&w=740";
  let contactImage = "https://thumbs.dreamstime.com/b/ contact-us-call-mail-icons-contact-us-call-mail-icons-white-background-vector-illustration-117513360.jpg";

  return(
    <section>
      <div className="container">
        <div className="row">
          <div className="col-4 my-4">
               <Card pageName="About" des={aboutdes } color="primary" image={aboutImage}/>
          </div>
          <div className="col-4 my-4">
               <Card pageName="Service" des={servicedes}  color="success" image={serviceImage}/>
          </div>
          <div className="col-4 my-4">
               <Card pageName="Contact" des={contactdes} color="danger" image={contactImage}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App;