import React from 'react'

const Newspart =(props)=>{
    
    
    
        let {title,description,imageURL,newsURL,author,date,source}=props;
    return (
    <div>
        <div className="card" style={{width: "18rem", borderColor:"black",borderWidth:"0.1rem"}}>
        <button type="button" className="btn btn-secondary bg-dark">{source}<span className="badge bg-secondary"></span></button>
        <img src={!imageURL?"https://ichef.bbci.co.uk/news/1024/branded_news/E0FC/production/_132769575_gettyimages-1925916657.jpg":imageURL} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsURL} className="btn btn-sm btn-secondary bg-dark">Read More</a>
        </div>
        </div>
    </div>
    )
  
}

export default Newspart
