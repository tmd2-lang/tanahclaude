import news from "../data/news.js";
import usePageTitle from "../hooks/usePageTitle.js";
import PageIntro from "../components/PageIntro.jsx";
import { Block } from "../components/Block.jsx";
import Band from "../components/Band.jsx";
import Reveal from "../components/Reveal.jsx";
import SmartLink from "../components/SmartLink.jsx";

export default function News() {
  usePageTitle("News");
  const { intro, posts, archive, privacy } = news;
  return (
    <>
      <PageIntro intro={intro} />

      <Block>
        <ol className="feed">
          {posts.map((post) => (
            <Reveal as="li" className={post.memoriam ? "post post--memoriam" : "post"} key={post.title}>
              <div className="post__meta">
                <p className="label">{post.kind}</p>
                <p className="post__date">{post.date}</p>
              </div>
              <div>
                <h3>{post.title}</h3>
                {post.body && <p className="post__body">{post.body}</p>}
                {post.list && (
                  <ul className="post__list">
                    {post.list.map((line) => <li key={line}>{line}</li>)}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
        <div className="actions">
          <SmartLink className="action" href={archive.href}>{archive.label}</SmartLink>
        </div>
      </Block>

      <Band band={privacy} />
    </>
  );
}
