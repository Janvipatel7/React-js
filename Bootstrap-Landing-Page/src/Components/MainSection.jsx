import ImageContent from './ImageContent';
import ImagePart from './ImagePart';

const MainSection = () => {
  const image = "/public/image/hero-1.png";
  const heading = `Sandy is best for Marketing your Apps.`;
  const content =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's typesetting industry standard dummy text ever since the typesetting.";
  const btn1 = "Download";
  const btn2 = "Read more";

  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center flex-column flex-lg-row">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <ImageContent heading={heading} content={content} btn1={btn1} btn2={btn2} />
          </div>
          <div className="col-12 col-lg-6 text-center">
            <ImagePart img={image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
