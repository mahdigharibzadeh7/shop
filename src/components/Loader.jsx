//loader
import { BallTriangle } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center my-10">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#f97316"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
