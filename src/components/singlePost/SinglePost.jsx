import "./singlePost.css"

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Sambuuddha</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos natus laborum animi saepe sit architecto eligendi suscipit voluptatum, culpa in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur autem deleniti voluptate hic, laudantium ex cupiditate amet quidem eos placeat numquam nulla magni eum cumque necessitatibus. Quasi magni, quas facere dolore accusamus recusandae quibusdam pariatur dolor quos assumenda eaque neque, nam architecto? Nisi, error perferendis.
                </p>
            </div>
        </div>
    );
}

export default SinglePost;
