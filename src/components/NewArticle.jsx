export const NewArticle = ({title, text}) => {
  return (
    <article className="h-[145px] border-b-2 border-GrayishBlue py-7 
    last:border-none">

      <h2 
      className="cursor-pointer hover:text-SoftOrange 
      text-[16px] lg:text-[14px] xl:text-[16px] mb-3 font-InterBold"
      >{title}</h2>

      <p className="text-[15px] lg:text-[12px] xl:text-[12px] font-InterRegular"
      >{text}</p>

    </article>
  )
}
