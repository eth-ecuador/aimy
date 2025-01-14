import Logo from "./logo";

export function LogoWithText() {
  return (
    <div className="flex flex-row p-4 gap-2 items-center h-5">
      <Logo height={40} width={40} />
      <span className="text-3xl">AIMY</span>
    </div>
  );
}
