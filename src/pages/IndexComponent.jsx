import Content from "../components/indexBoxContent";
import Vector from "../vectorline/vector.jsx";
export default function IndexComponent() {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <>
      <div className="relative w-full h-full flex flex-col gap-1 p-1 border-black">
        <Content />
        <Vector />
      </div>
    </>
  );
}
