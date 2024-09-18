import Editor from "@/components/editor/editor";

const index = (props: { content: string }) => {
  return (
    <>
      <div className="font-sans text-lg leading-8 w-[358px] sm:w-full">
        <Editor editable={false} initContent={props.content} />
      </div>
      <div className="text-xs font-sans text-slate-500 pt-8 pb-12 tracking-wider">
        免责申明：该内容来自平台创作者，不代表网站观点和立场
      </div>
    </>
  );
};

export default index;
