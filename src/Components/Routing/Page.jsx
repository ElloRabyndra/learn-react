export default function Page({ children }) {
  return (
    <div className="flex items-center justify-center w-full font-semibold shadow-xs h-60 bg-accent text-accent-foreground rounded-2xl">
      {children}
    </div>
  );
}
