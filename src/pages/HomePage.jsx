import { useEffect } from "react";
import { useState } from "react";
import Content from "../components/Content";

export default function HomePage() {

    const [posts, setposts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const url = "http://192.168.10.10/wp-json/wp/v2/posts?_embed&categories=12";
            const response = await fetch(url);
            const data = await response.json();
            setposts(data);
        }
        getPosts();
    }, []);

    return (
        <section>
            <h1>HomePage</h1>
            {posts.map(post => (
                <Content key={post.id} post={post} />
            ))}
        </section>
    )
}
