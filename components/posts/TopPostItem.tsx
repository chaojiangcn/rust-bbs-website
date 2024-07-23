import Link from "next/link";

export interface PostItemProps {
  id: string;
  title: string;
  introduction: string;
  images?: string[];
  date: string;
  author_info: {
    nickname: string;
    avatar: string;
  };
  like_count: number;
  comment_count: number;
  keyindex: number;
}

const PostItem: React.FC<PostItemProps> = (props) => {

  return (
    <div>
      <div className="flex flex-col items-start">
        <div className="flex flex-row items-center py-[10px]">
          <Link
            className="text-base font-bold line-clamp-1"
            href={`/b/${props.id}`}
          >
            <span className="mr-3">{props.keyindex + 1}</span> {props.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
