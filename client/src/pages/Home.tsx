import React,{ useState, useEffect } from 'react'
import LazyLoad from 'react-lazyload';
import axios from 'axios'
import { useQuery } from 'react-query'
import CreatePost from '../components/CreatePost'
import Post from '../components/Post'
import '../assets/scss/main/index.scss'


const Home = () => {
    
    const {
        isLoading,
        data,
        error,
        isFetching,
        } = useQuery('blog',async() => {
            const { data } = await axios.get('http://localhost:4000/blog')
            return data.data
        })
    useEffect(() => {
        console.log('is fetch')
    },[isFetching])

    if(isLoading) {
        return <span>Loading...</span>
    }

    return (
        <div>
            <CreatePost />
            <LazyLoad>
              {
                
                data && data.map((blog : any,index : number) => (
                        <Post
                        key={index}
                        title={blog.title}
                        content={blog.content}
                        title_img={blog.title_img}
                        author={blog.author}
                        />
                  ))

              }
              
            </LazyLoad>
        </div>
        
    )
}

export default Home
