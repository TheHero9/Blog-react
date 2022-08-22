import { useState } from "react"
import { FaNotEqual } from "react-icons/fa"

export default function Input(props){

    //Create each post item
    const [post, setPost] = useState({
        title: "",
        content: ""
    })

    //Change title/content
    function handleChange(event){
        const {name, value} = event.target
        setPost(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    //Submit and send the props to the App.jsx
    function submit(event){
        props.onAdd(post)
        setPost({
            title: "",
            content: ""
        })

        event.preventDefault()
    }

    return (
        <div className="inputs">
            <input onChange={handleChange} placeholder="Country" value={post.title} name="title"/> <br></br>
            <input onChange={handleChange} placeholder="City" value={post.content} name="content"/> <br></br>
            <button onClick={submit}>Submit</button>
        </div>
    )
}