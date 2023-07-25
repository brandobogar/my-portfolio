export default function Color() {
  return (
    <div className="grid grid-cols-5 gap-2 mt-10">
      <div className="h-10 w-fit bg-my-primary-100">
        <p>primary -100</p>
      </div>

      <div className="h-10 w-fit bg-my-primary-200">
        <p>primary -200</p>
      </div>

      <div className="h-10 w-fit bg-my-primary-300">
        <p>primary -300</p>
      </div>
      <div className="h-10 w-fit bg-my-accent-100">
        <p>accent-200</p>
      </div>

      <div className="h-10 w-fit bg-my-accent-200">
        <p>accent-200</p>
      </div>

      <div className="h-10 w-fit bg-my-text-100 text-green-50">
        <p>text-100</p>
      </div>

      <div className="h-10 w-fit bg-my-text-200">
        <p>text-200</p>
      </div>

      <div className="h-10 w-fit bg-my-bg-100">
        <p>bg-100</p>
      </div>

      <div className="h-10 w-fit bg-my-bg-200">
        <p>bg-200</p>
      </div>

      <div className="h-10 w-fit bg-my-bg-300">
        <p>bg-300</p>
      </div>
    </div>
  );
}
