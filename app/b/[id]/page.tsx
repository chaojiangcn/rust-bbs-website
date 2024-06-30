// const getDetail = async (id: string) => {
//   const res = await client.get("/posts/" + id);
//   return res.data;
// };
export default function Page({ params }: { params: { id: string } }) {
  return <div>My Post: {params.id}</div>
}