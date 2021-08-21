import React,{ useState, useEffect } from 'react'
import { Img } from 'react-image'
import { Container } from 'react-bootstrap'
import '../assets/scss/main/post.scss'

type BlogProps =  {
    title: string,
    content: string,
    title_img: string,
    author: string
}


const Post = (props: BlogProps) => {
    const [data, setData] = useState(props)
    const {title,content,title_img,author } = data

    useEffect(() => {
        setData(data)
    },[data])

    return (
        <Container>
            <div className="post">
                <div className="image">
                    <Img
                    className="img"
                    src={title_img}
                    />
                </div>
                <h2>{title}</h2>
                <p>{content}</p>
                <p>Created by : {author}</p>
                    
            </div>
        </Container>
        )
    }

export default Post
