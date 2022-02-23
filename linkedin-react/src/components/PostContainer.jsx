import Post from './Post';
import { useState, useEffect } from "react"

const PostContainer = () => {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetchPost()
    }, [])


    const url = "https://striveschool-api.herokuapp.com/api/posts/"

    const fetchPost = async () => {

        try {
            let response = await fetch(url,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjEzNGI2OWJlNDBiNTAwMTViNmM5MzUiLCJpYXQiOjE2NDU0MzE2NTcsImV4cCI6MTY0NjY0MTI1N30.sW4qGqsabPColujp6kpA3P6pfCQ-VN9D8e5WEW1RdTI",
                    },
                }
            );
            if (response.ok) {
                let data = await response.json();
                //console.log(data);
                setPosts(data);
            } else {
                alert("something went wrong :(");
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            {posts?.slice(0, 5).map(post => <Post data={post} key={post._id} />)}
        </>
    )
}

export default PostContainer

