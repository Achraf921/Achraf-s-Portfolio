'use client'

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";

// client-only imports
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const BackgroundGradientAnimationDynamic = dynamic(
  () => import("./GradientBg").then(m => m.BackgroundGradientAnimation),
  { ssr: false }
);
const MagicButton = dynamic(() => import("./MagicButton"), { ssr: false });

import animationData from "@/data/confetti.json";

// Hydration guard for dynamic-only UI chunks
function NoSSR({ children }: { children: React.ReactNode }) {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  if (!m) return null;
  return <>{children}</>;
}

export const BentoGrid = ({
  className,
  children,
  id,
}: {
  className?: string;
  children?: React.ReactNode;
  id: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["React.js", "Express.js", "TypeScript"];
  const rightLists = ["Java", "MongoDB", "AWS"];
  const lastLists = ["Python", "Docker", "JavaScript"];

  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleCopy = () => {
    const text = "achrafbayi@icloud.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn(id === 6 && "flex justify-center", "h-full")}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={cn(
            "absolute right-0 -bottom-5",
            id === 5 && "w-full opacity-80"
          )}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimationDynamic />}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {/* Globe removed */}

          {id === 3 && (
            <div className="flex gap-1 w-fit absolute -right-3">
              <div className="flex flex-col gap-3 md:gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs opacity-50 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>

              <div className="flex flex-col gap-3 md:gap-3">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs opacity-50 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 md:gap-3">
                {lastLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs opacity-50 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
            </div>
          )}

          {id === 6 && (
            <NoSSR>
              <div className="mt-5 relative">
                <div className="absolute -bottom-5 right-0 block">
                  {mounted && (
                    <Lottie
                      animationData={animationData}
                      loop={copied}
                      autoplay={copied}
                      style={{ height: 200, width: 400 }}
                    />
                  )}
                </div>

                {mounted && (
                  <MagicButton
                    title={copied ? "Email is Copied!" : "Copy my email address"}
                    icon={<IoCopyOutline />}
                    position="left"
                    handleClick={handleCopy}
                    otherClasses="!bg-[#161A31]"
                  />
                )}
              </div>
            </NoSSR>
          )}
        </div>
      </div>
    </div>
  );
};