import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const index = (props: { content: string }) => {
  return (
    <>
      <div className="font-sans text-lg leading-8">
        <Markdown rehypePlugins={[rehypeRaw]}>{props.content}</Markdown>
      </div>
      <div className="text-xs font-sans text-slate-500 pt-8 pb-12 tracking-wider">
        免责申明：该内容来自平台创作者，不代表网站观点和立场
      </div>
    </>
  );
};

export default index;
