export const Article = ({img, number, title, text}) => {
  return (
    <article className='flex mb-[34px] md:w-[343px] md:flex-grow'>
      <div className='w-[100px] flex-none'>
        <img src={img} alt="img-article" />
      </div>
      <div className='pl-6'>
        <p className='text-GrayishBlue font-InterExtraBold text-[32px] font-bold leading-none'>{number}</p>
        <h2 className='font-InterExtraBold text-[18px] my-[5px] hover:text-SoftOrange cursor-pointer'>{title}</h2>
        <p className='font-InterRegular text-[15px] text-DarkGrayishBlue'>{text}</p>
      </div>
    </article>
  )
}