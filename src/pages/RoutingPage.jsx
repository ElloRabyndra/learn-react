import Nav from "../Components/Navigation/Nav";
import Routing from "../Components/Routing/Routing";

export default function RoutingPage() {
  return (
    <section className="flex items-center justify-center min-h-screen p-8 space-y-5 font-[Poppins]">
      <div className="space-y-4 text-center min-w-80 md:min-w-md">
        <h1 className="text-2xl font-bold">React Routing</h1>
        <Routing Count={1} />
        <Nav />
      </div>
    </section>
  );
}