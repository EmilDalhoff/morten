import parse from "html-react-parser";

export default function Content({ post }) {

    return (
        <article>
            <h2>{parse(post.title.rendered)}</h2>
            {parse(post.content.rendered)}
        </article>
    );
}