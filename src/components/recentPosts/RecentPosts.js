import Image from "next/image"
import Link from "next/link"
import { Container } from "react-bootstrap"
import { RecentPostsStyles } from "./recentPostsStyles"
import { images } from "@/constants"

const RecentPosts = () => {
  return (
    <RecentPostsStyles>
      <Container>
        <h1 className="mb-5">Recent Posts</h1>

        <div className="recent-posts d-flex flex-column">
          <div className="recent-post">
            <Image src={images.rc1} alt="post-img" width={500} height={500} />
            <div className="post-right">
              <p>Nov 29 2022 2min</p>
              <Link href="/blogId" className="right-body mb-5">
                <h3>The one thing I would tell to my 16 year old self</h3>
                <p>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading....
                </p>
              </Link>
              <hr />
              <p className="comments">0 comments</p>
            </div>
          </div>
          <div className="recent-post">
            <Image src={images.rc1} alt="post-img" width={500} height={500} />
            <div className="post-right">
              <p>Nov 29 2022 2min</p>
              <Link href="/blogId" className="right-body mb-5">
                <h3>The one thing I would tell to my 16 year old self</h3>
                <p>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading....
                </p>
              </Link>
              <hr />
              <p className="comments">0 comments</p>
            </div>
          </div>
          <div className="recent-post">
            <Image src={images.rc1} alt="post-img" width={500} height={500} />
            <div className="post-right">
              <p>Nov 29 2022 2min</p>
              <Link href="/blogId" className="right-body mb-5">
                <h3>The one thing I would tell to my 16 year old self</h3>
                <p>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading....
                </p>
              </Link>
              <hr />
              <p className="comments">0 comments</p>
            </div>
          </div>
          <div className="recent-post">
            <Image src={images.rc1} alt="post-img" width={500} height={500} />
            <div className="post-right">
              <p>Nov 29 2022 2min</p>
              <Link href="/blogId" className="right-body mb-5">
                <h3>The one thing I would tell to my 16 year old self</h3>
                <p>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading....
                </p>
              </Link>
              <hr />
              <p className="comments">0 comments</p>
            </div>
          </div>
          <div className="recent-post">
            <Image src={images.rc1} alt="post-img" width={500} height={500} />
            <div className="post-right">
              <p>Nov 29 2022 2min</p>
              <Link href="/blogId" className="right-body mb-5">
                <h3>The one thing I would tell to my 16 year old self</h3>
                <p>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading....
                </p>
              </Link>
              <hr />
              <p className="comments">0 comments</p>
            </div>
          </div>
        </div>
      </Container>
    </RecentPostsStyles>
  )
}
export default RecentPosts
