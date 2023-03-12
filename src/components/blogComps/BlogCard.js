import Image from "next/image"
import { BlogCardStyles } from "./blogCardStyles"
import { images } from "@/constants"
import { MoreVert, FavoriteBorder } from "@mui/icons-material"

const BlogCard = () => {
  const blog = {
    img: images.rc1,
    date: "Nov 29, 2023",
    read: "2min",
    title: "The one thing I would tell to my 16 year old self",
    desc: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    views: 0,
    likes: 7,
  }
  return (
    <BlogCardStyles>
      <Image src={blog.img} alt="blog-img" height={500} width={500} />
      <div className="card-bottom">
        <div className="d-flex justify-content-between align-items-start">
          <div className="blog-date">
            <p>{blog.date}</p>
            <span>{blog.read}</span>
          </div>
          <MoreVert />
        </div>
        <h5>{blog.title}</h5>

        <p>{blog.desc}</p>
        <hr className="mt-5" />
        <div className="d-flex justify-content-between blog-likes">
          <div>{blog.views} views</div>
          <div className="d-flex align-items-center gap-1">
            {blog.likes} <FavoriteBorder />
          </div>
        </div>
      </div>
    </BlogCardStyles>
  )
}
export default BlogCard
