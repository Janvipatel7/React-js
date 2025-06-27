const ImageContent = ({ heading, content, btn1, btn2 }) => {
  return (
    <div className="hero-content">
      <div className="mb-4">
        <h1 className="f-50 text-capitalize">{heading}</h1>
      </div>
      <div className="mb-4">
        <p className="text-muted">{content}</p>
      </div>
      <div className="d-flex flex-wrap gap-3">
        <button className="primary-btn">{btn1}</button>
        <button className="black-btn">{btn2}</button>
      </div>
    </div>
  );
};

export default ImageContent;
