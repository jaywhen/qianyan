import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className="font-serif text-gray-800 text-xl w-full grow flex justify-center mt-6">
      <span className="text-3xl mr-6">qian&apos;yan</span>
      <ruby className="text-3xl">千言<rt className="font-sans">qiān yán </rt></ruby>,
      是一个为您生成书、影、音内容卡片的工具，目前还处于开发阶段，后续会支持更多卡片模板！
    </div>
  )
}

export default About;