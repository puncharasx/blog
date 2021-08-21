import React,{ useState } from 'react'
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap'
import axios from 'axios'
import '../assets/scss/main/createPost.scss'


const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [content, setContent] = useState('')
    const { handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data : any) => {
        await axios.post('http://localhost:4000/blog',{
            title: title,
            content: content,
            title_img: link
        })
    };

    return (
        <div className="centers">
            <h2>Create Post</h2>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Topic</Form.Label>
                        <Form.Control value={title} onChange={(e) => { setTitle(e.target.value) }} type="text"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Link Image </Form.Label>
                        <Form.Control value={link} onChange={(e) => { setLink(e.target.value) }} type="text"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Content</Form.Label>
                        <Form.Control value={content} onChange={(e) => { setContent(e.target.value) }} as="textarea" rows={3} />
                    </Form.Group>
                    <button type="submit" className="btn btn-danger text-white button">Post</button>
                </form>
        </div>
    )
}

export default CreatePost
