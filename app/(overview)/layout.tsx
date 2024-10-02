import NavBar from "./nav-bar";
import Header from "./header";


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 w-full md:flex-row">
        <NavBar />
        <div className="flex-1 p-4">
          {children}
        </div>
        
      </div>
    </div>
  );
}
