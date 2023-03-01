import React, { useEffect,useState } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroller';

const News =(props)=> {
    const [articles, setarticles] = useState([])
    const [loader, setloader] = useState(false)
    const [page, setpage] = useState(1)

    const updatenews=async ()=> {
        props.setProgressfunc(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
       
        setloader( true )
        props.setProgressfunc(30)
        let data = await fetch(url)
        let parseddata = await data.json()
        props.setProgressfunc(70)
        setarticles(parseddata.articles)
        setloader(false)
       
        props.setProgressfunc(100)
        document.title = `NewsDonkey-${props.category}`
    }
    // const fetchData=async ()=> {
    //     setpage(page + 1 )
    //     updatenews()
    // }

    //to fetch api
    useEffect(() => {
        updatenews()
        // eslint-disable-next-line
    }, [])
    
   


    const handleNextPage = async () => {
        updatenews()
        setpage(page + 1 )
    }

    const handlePrevPage = async () => {
        updatenews()
        setpage(page - 1 )
    }

        return (

            <div className="container my-3 ">

                <h1 className='text-center'> {`NewsDonkey - Top ${props.category} Headlines`}</h1>
                 
              

                <div className="row" >
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author ? element.author : ""} date={element.publishedAt} sourceName={element.source.name} />
                        </div>
                    })}
                </div>
                

                <div className="d-flex justify-content-between" >
                    <button className="learn-more buttonui2" onClick={handlePrevPage} disabled={page <= 1}>
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Previous</span>
                    </button>
                    <button className="learn-more buttonui2" >

                        <span className="button-text">{loader &&  <Loading />}</span>
                    </button>

                    <button className="learn-more buttonui2" disabled={page >= 36} onClick={handleNextPage}>
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text" >Next</span>
                    </button>

                </div>

            </div>
        )
}
News.defaultProps = {
    pageSize: 9,
    country: "in",
    category: "general"
}
News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
};

export default News