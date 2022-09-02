import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img src="https://images-na.ssl-images-amazon.com/images/I/7125AinG8EL.jpg" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem necessitatibus quis mollitia aspernatur officia odit vel quos natus libero facere, facilis nulla minus magnam architecto illum neque nemo quod totam nam. Corrupti, nemo saepe!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem necessitatibus quis mollitia aspernatur officia odit vel quos natus libero facere, facilis nulla minus magnam architecto illum neque nemo quod totam nam. Corrupti, nemo saepe!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem necessitatibus quis mollitia aspernatur officia odit vel quos natus libero facere, facilis nulla minus magnam architecto illum neque nemo quod totam nam. Corrupti, nemo saepe!
        </p>
    </div>
  )
}
