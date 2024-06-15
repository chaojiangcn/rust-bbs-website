import Nav from '@/components/nav/Nav';

const PostLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Nav />
      {children}
    </div>
  );
};

export default PostLayout;
