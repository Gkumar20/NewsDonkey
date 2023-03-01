import React from 'react'

const NewsItem =(props)=> {

        let { title, description, imgurl,newsurl,author,date ,sourceName} = props;
        return (
            <div>
                <div className="card my-4" style={{ color:"black"}}>
                <span className="badge rounded-pill bg-danger">{sourceName}</span>
                    <img src={imgurl?imgurl:"https://rapidapi.com/blog/wp-content/uploads/2018/06/news-1729539_1920-1024x502.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body shadow-lg p-3 mb-5 bg-dark bg-gradient rounded ">
                            <h5 className="card-title text-light">{title}...</h5>
                            <p className="card-text text-light">{description}...</p>
                            <p className="card-text">{author} updated {new Date(date).toUTCString()}</p>
                            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-primary buttonui1">Read More</a>
                        </div>
                </div>
            </div>
        )
}

export default NewsItem