export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1>logn layout</h1>
      <div>{children}</div>
    </div>
  );
}
