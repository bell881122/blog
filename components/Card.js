/* eslint-disable @next/next/no-img-element */
export default function Card({
  title,
  subTitle,
  imgUrl,
  contentTitle,
  content,
  reverse,
}) {
  return (
    <div className={`flex-none sm:flex my-10 leading-7${reverse ? " flex-row-reverse" : ""}`}>
      <div className="w-full sm:w-40 my-2 sm:my-auto">
        <h3 className="text-[20px] font-bold">{title}</h3>
        <small className="text-gray-400">{subTitle}</small>
      </div>
      <div className={`w-full sm:w-[calc(100%-theme(space.44))] whitespace-pre-line${reverse ? " sm:mr-auto" : " sm:ml-auto"}`}>
        {imgUrl && <img className="w-full" src={imgUrl} alt={title} />}
        {contentTitle &&<p className='font-bold mb-1'>{contentTitle}</p>}
        {content}
      </div>
    </div>
  )
}
