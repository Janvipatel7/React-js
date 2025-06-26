import ImagePart from './ImagePart';
import ImageContent from './ImageContent';

const Intro = () => {
  const image = "/public/image/intro.jpg";
  const heading = "Showcase your app with Sandy";
  const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's typesetting industry standard dummy text ever since the typesetting. Lorem Ipsum has been the industry's typesetting industry standard.";
  const btn1 = "Read more";
  const btn2 = "Contact us";

  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center flex-column flex-lg-row">
       
          <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center">
            <ImagePart img={image} />
          </div>

   
          <div className="col-12 col-lg-6">
            <div className="d-flex align-items-center h-100">
              <ImageContent heading={heading} content={content} btn1={btn1} btn2={btn2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
