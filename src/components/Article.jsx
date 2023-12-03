export const Article = ({img, number, title, text}) => {
  return (
    <article className='flex my-5 md:w-[343px] md:flex-grow'>
      <div className='w-[100px] flex-none'>
        <img src={img} alt="img-article" />
      </div>
      <div className='pl-6'>
        <p className='text-GrayishBlue text-[32px] font-bold leading-none'>{number}</p>
        <h2 className='font-bold my-[5px] hover:text-SoftOrange cursor-pointer'>{title}</h2>
        <p className='text-GrayishBlue'>{text}</p>
      </div>
    </article>
  )
}