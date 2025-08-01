import { Link } from "lucide-react";
import Image from "next/image";

const ProjectCardRoot = () => {
  return (
    <div className="flex flex-col gap-4 h-80 w-70 bg-dark-gray p-4 rounded-md">
      <div className="flex flex-col gap-1">
        <span>Stack</span>
        <div className="flex flex-row gap-1 flex-wrap">
          <div className="w-8 h-8 bg-white rounded-md p-1">
            <Image
              className="object-contain invert"
              src={"/images/Stacks/next.png"}
              alt={"Next Logo"}
              width={100}
              height={100}
            />
          </div>

          <div className="w-8 h-8 bg-white rounded-md p-1">
            <Image
              className="object-contain"
              src={"/images/Stacks/chakra.png"}
              alt={"Chakra Logo"}
              width={100}
              height={100}
            />
          </div>

          <div className="w-8 h-8 bg-white rounded-md p-1">
            <Image
              className="object-contain"
              src={"/images/Stacks/reactjs.png"}
              alt={"Next Logo"}
              width={100}
              height={100}
            />
          </div>

          <div className="w-8 h-8 bg-white rounded-md p-1">
            <Image
              className="object-contain w-5"
              src={"/images/Stacks/django.png"}
              alt={"Next Logo"}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full gap-0">
        <span>Project title</span>
        <div className="w-full h-full bg-white/20 rounded-md p-1">
          <Image
            className="object-contain"
            src={""}
            alt={"Next Logo"}
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="flex flex-row gap-1 flex-wrap">
        <a
          href=""
          className="border border-gray-300 rounded-sm w-fit flex flex-row justify-start items-center py-0 pl-1 pr-2"
        >
          <Link height={"1rem"} />
          <span className="text-sm">Link</span>
        </a>
        <button className="border cursor-pointer border-gray-300 rounded-sm py-0 px-2 justify-start w-fit">
          <span className="text-sm">+ More about the project</span>
        </button>
      </div>
    </div>
  );
};

const ProjectCardStack = ({
  src,
  className,
}: {
  src: string;
  className: string;
}) => {
  <div className="w-8 h-8 flex flex-col justify-center items-center bg-white rounded-md p-1">
    <Image
      className={`object-contain ${className}`}
      src={src}
      alt={"Next Logo"}
      width={100}
      height={100}
    />
  </div>;
};

export const ProjectCard = {
  Root: ProjectCardRoot,
  CardStack: ProjectCardStack,
};
