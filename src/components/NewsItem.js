import React, { Component } from 'react'

export class NewsItem extends Component {
 
   

    render() {
        let {title,description,imageurl,newsUrl,author,date}=this.props;
        return (
            <div>
                <div className="card" >
                    <img src={!imageurl?"https://images.hindustantimes.com/img/2021/11/03/1600x900/Breaking-News-Live-Blog-pic_1627257432413_1635901665157.jpg":imageurl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                         <p className="card-text"><small className="text-muted">Published by {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-success">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
