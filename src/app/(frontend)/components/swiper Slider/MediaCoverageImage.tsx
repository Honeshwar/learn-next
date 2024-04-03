import Image from "next/image";
import React from "react";

export default function MediaCoverageImage({
  lang,
  article,
}: {
  lang: string;
  article: any;
}) {
  return (
    <>
      <a href={article.href} target="_blank" className="w-full h-full">
        <Image
          width={400}
          height={300}
          className="w-full h-full"
          src={lang === "hi" ? article.imgSrcHindi : article.imgSrcEnglish}
          alt="media coverage article"
          placeholder="blur"
          blurDataURL={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMklEQVR4nAEnANj/AG5gPEpAIVdVT87OzgDahmP/o3fsx6v7+/sAVhcZKAAA6MbH1LvAZpETuCsInsIAAAAASUVORK5CYII="
          }
        />
      </a>
    </>
  );
}
