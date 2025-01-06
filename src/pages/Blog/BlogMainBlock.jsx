



import "./blog-main-block.scss"
import { useSelector } from "react-redux"

const BlogMainBlock = () => {
    const {
        mainTitle,
        imageBlog,
    } = useSelector(store => store.dashboard.post)
    const imagePath = "http://localhost:5000/" + imageBlog;

    
    return (
        <section className="main__page-blog page-blog">
                    
                <div className="page-blog__body">
                    <div className="page-blog__image">
                        
                            
                            <img src={imagePath} alt="image"/>
                        
                    </div>
                    <div className="page-blog__title ">
                        <h1 >{mainTitle}</h1>
                    </div>
                </div>
            
        </section>
    )
}

export default BlogMainBlock