import Content from "../components/indexBoxContent";
import Vector from "../vectorline/vector";
export default function IndexComponent() {
  return (
    <>
      <div className="relative w-full h-full flex flex-col gap-1 p-1 border-black">
        <Content />
        <Vector />
      </div>
    </>
  );
}
