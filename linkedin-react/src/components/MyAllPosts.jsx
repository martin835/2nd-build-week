import { Row, Col } from "react-bootstrap";
import MyOnePost from "./MyOnePost";
import {useState, useEffect} from "react"


function MyAllPosts() {

const [allPosts, setAllPosts] = useState([])

useEffect(()=>{loadMyPosts()},[])

const loadMyPosts = async () => {
         
     try {
       let response = await fetch(
         "https://striveschool-api.herokuapp.com/api/posts/",
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
         console.log(data);
         setAllPosts(data);
       } else {
         alert("something went wrong :(");
       }
     } catch (error) {
       console.log(error);
     }
   };


  return (
    <div className="p-3 bg-white mt-3 mb-5 martin-profile-experience-container">
      {allPosts.filter((post) => post.username === "Martin1234").map((post) => <MyOnePost text={post.text}/>)}
    </div>
  );
}

export default MyAllPosts;
