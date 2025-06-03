import Nav from "../components/Navigation/Nav";
export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen p-8 font-[Poppins]">
      <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome !</h1>
        <p className="text-sm font-medium text-center md:text-lg">
          My React Project for Learning Purposes
        </p>
        <Nav />
      </div>
    </section>
  );
}
