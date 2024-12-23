import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              Kelola Listrikmu{" "}
              <span className="bg-clip-text bg-gradient-to-tl from-green-600 to-green-400 text-transparent">
                Eco-Watt
              </span>
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Eco-Watt adalah platform manajemen energi listrik yang dirancang
              untuk membantu Anda memahami, mengelola, dan mengoptimalkan
              konsumsi energi dengan lebih cerdas.Eco-Watt mendukung Anda dalam
              mengurangi biaya listrik sekaligus menjaga keberlanjutan
              lingkungan.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center items-center text-center">
            <Link to="/login">
              <Button gradientDuoTone="greenToBlue" size="xl" className="w-60">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
