import { useParams } from "react-router-dom";

const PostDetail = () => {
    const { postId } = useParams();
    return <>
        {/** Article Title **/}
        <h1 className="text-3xl font-bold">Garlic bread with cheese: What the science tells us</h1>
        <br />
        {/** Article Main Content **/}
        <article className="prose prose max-w-none min-h-50 hover:prose-a:text-blue-500 prose-neutral">
            <p>
                For years parents have espoused the health benefits of eating garlic bread with cheese to their
                children, with the food earning such an iconic status in our culture that kids will often dress
                up as warm, cheesy loaf for Halloween.
            </p>
            <p>
                But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                springing up around the country.
            </p>
        </article>
        <div className="my-5">
            <h3 className="bg-gray-200 text-md px-1">Comment(s)</h3>
            {/** Article Comment **/}
        </div>
    </>
}

export default PostDetail;
