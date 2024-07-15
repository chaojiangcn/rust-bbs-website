const Links = [
  {
    label: "掘金",
    link: "https://juejin.cn/",
  },
  {
    label: "掘金",
    link: "https://juejin.cn/",
  },
  {
    label: "掘金",
    link: "https://juejin.cn/",
  },
];
const Foot = () => (
  <>
    <div className="flex flex-col border-t text-zinc-500 text-xs gap-y-4 py-4">
      <div className="flex justify-items-center  w-full justify-center  gap-x-2">
        {Links.map((item) => (
          <a className="" href={item.link} key={item.link}>
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex justify-items-center  w-full justify-center gap-2">
        <div>© 2000-2024</div>
      </div>
    </div>
  </>
);

export default Foot;
