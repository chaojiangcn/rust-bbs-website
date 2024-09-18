"use client";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Editor, { EditorRef } from "@/components/editor/editor";
import { Input } from "@/components/ui/input";
import { add_post } from "@/app/apis/posts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getCookie } from "cookies-next";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function Page() {
  const { toast } = useToast();

  const auth = getCookie("auth");
  const editorRef = useRef<EditorRef>(null);
  const router = useRouter();

  const submitHandle = async (data: z.infer<typeof FormSchema>) => {
    const document = editorRef.current?.getContent();
    console.log("content: ", document);

    let arr = document?.filter((item) => item.content);
    if (arr?.length == 0)
      return toast({ variant: "destructive", title: "请输入内容" });

    if (!auth) {
      return toast({ variant: "destructive", title: "请先登录" });
    }

    const res = await add_post({
      content: JSON.stringify(document),
      title: data.title,
      author_id: JSON.parse(auth).uid,
      tag_id: 0,
      cover: data.cover,
    });

    if (res?.code == 200) {
      toast({ title: "发布成功" });
      router.push("/");
    }
  };

  const FormSchema = z.object({
    title: z.string().min(1, "请输入标题"),
    cover: z.string().min(1, "请输入封面图"),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      cover: "",
    },
  });

  return (
    <>
      <div className="w-full relative bg-blue-50 flex justify-center items-center mb-16">
        <div className="lg:w-[300px] h-[calc(100vh-64px)] absolute top-0 left-0"></div>
        <div className="w-full lg:w-[800px] my-6">
          <div className="bg-white py-6 min-h-[600px]">
            <Editor ref={editorRef} editable={true} />
          </div>
          <div className="bg-white mt-4 p-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(submitHandle)}
                className="w-2/3 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>标题</FormLabel>
                      <FormControl>
                        <Input placeholder="请输入的文章标题" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cover"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>封面图</FormLabel>
                      <FormControl>
                        <Input placeholder="请输入封面图地址" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full h-[64px] bg-white fixed bottom-0 left-0 flex justify-center items-center">
                  <div className="w-full lg:w-[800px]">
                    <Button type="submit">发布</Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
