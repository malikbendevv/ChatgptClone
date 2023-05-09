import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

function homePage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20 "> ChatGPT </h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5   ">
            {/* Sun Icon */}
            <SunIcon className="h-6 w-6" />

            <h2>Examples</h2>
          </div>
          <div className="space-y-2  ">
            <p className="infoText"> Explain Something to me </p>
            <p className="infoText">
              {" "}
              What is the differece between a dog and a cat?{" "}
            </p>
            <p className="infoText"> what is the color of the sun? </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5   ">
            {/* Sun Icon */}
            <BoltIcon className="h-6 w-6" />

            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2  ">
            <p className="infoText"> Explain Something to me </p>
            <p className="infoText">
              {" "}
              What is the differece between a dog and a cat?{" "}
            </p>
            <p className="infoText"> what is the color of the sun? </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5   ">
            {/* Sun Icon */}
            <ExclamationTriangleIcon className="h-6 w-6" />

            <h2>Limitations</h2>
          </div>
          <div className="space-y-2  ">
            <p className="infoText"> Explain Something to me </p>
            <p className="infoText">
              {" "}
              What is the differece between a dog and a cat?{" "}
            </p>
            <p className="infoText"> what is the color of the sun? </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homePage;
