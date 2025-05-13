

const FirstService = ({title, desc}) => {
  return (
    <div className="col-12">
        <div className='text-center lh-lg pb-60'> 
            <div className="d-flex justify-content-center">
                <h3 className='s-h3 w-50'>{title}</h3>
            </div>
            <div className="d-flex justify-content-center">
                <p className='s-text w-50'>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default FirstService