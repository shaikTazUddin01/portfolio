import './headerText.css'

const TitleText = ({ headerText, title, subtitle }) => {
    return (
        <div className='relative z-10'>
            {
                headerText &&
                <span className='contact-text text-5xl md:text-[50px] lg:text-8xl font-extrabold absolute pt-5 md:pt-5 lg:pt-0'>
                    {headerText}
                </span>
            }
            {
                title || subtitle ?
                <div className=''>
                    {
                        title && <p className=" text-[#1fca61] uppercase text-md font-bold">{title}</p>

                    }
                    {
                        subtitle &&
                        <h1 className="text-3xl md:text-4xl uppercase font-bold">{subtitle}</h1>
                    }
                </div>
                :<></>
            }
        </div>
    );
};

export default TitleText;