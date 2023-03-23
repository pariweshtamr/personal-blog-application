import { Link } from "react-router-dom"
import { Person, RssFeed } from "@mui/icons-material"
import "./widget.scss"
const Widget = ({ type }) => {
  let data
  switch (type) {
    case "categories":
      data = {
        title: "Categories",
        number: 7,
        link: <Link to="/auth/dashboard">See all categories</Link>,
        icon: (
          <Person
            fontSize="large"
            className="p-2"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              borderRadius: "8px",
            }}
          ></Person>
        ),
      }
      break
    case "blogs":
      data = {
        title: "Blogs",
        number: 4,
        link: <Link to="/auth/dashboard">See all blogs</Link>,
        icon: (
          <RssFeed
            fontSize="large"
            className="p-2"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
              borderRadius: "8px",
            }}
          ></RssFeed>
        ),
      }
      break

    default:
      break
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">{data?.number}</span>
        <span className="link">{data?.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive"></div>
        {data?.icon}
      </div>
    </div>
  )
}
export default Widget
