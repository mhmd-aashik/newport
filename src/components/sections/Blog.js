import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <a>
            <span className="img-holder">
              <img src="assets/blog/blog-post-1.jpg" alt="" />
            </span>
            <div className="content">
              <span className="category">NextJS</span>
              <span className="title">
                Next.js Rendering Methods: SSG vs SSR vs CSR
              </span>
              <p>
                A brief look at Static Site Generation (SSG), Server-Side
                Rendering (SSR), and Client-Side Rendering (CSR) in Next.js....
              </p>
              <div className="meta d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <i className="fa-regular fa-calendar" />
                  <span>9 Oct 2024</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa-regular fa-eye" />
                  <span>17 views</span>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <a>
            <span className="img-holder">
              <img src="assets/blog/blog-post-2.jpg" alt="" />
            </span>
            <div className="content">
              <span className="category">React</span>
              <span className="title">
                Difference Between useMemo and useCallback in React
              </span>
              <p>
                Both useMemo and useCallback are React hooks used for
                optimization, but they serve different purposes and are used in
                different contexts.
              </p>
              <div className="meta d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <i className="fa-regular fa-calendar" />
                  <span>21 Feb 2022</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa-regular fa-eye" />
                  <span>34 views</span>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <a>
            <span className="img-holder">
              <img src="assets/blog/blog-post-3.jpg" alt="" />
            </span>
            <div className="content">
              <span className="category">essentials</span>
              <span className="title">AI vs Developer: A Comparison</span>
              <p>
                Artificial Intelligence (AI) and human developers are both
                crucial in modern software development, but they differ
                significantly in their roles, capabilities, and applications.
                Here’s a comparison:
              </p>
              <div className="meta d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <i className="fa-regular fa-calendar" />
                  <span>1 Jan 2022</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa-regular fa-eye" />
                  <span>10 views</span>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;
