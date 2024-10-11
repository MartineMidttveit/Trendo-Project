import ClockIcon from '../../SVG/ClockIcon';

function NoResults() {
    return (
        <div className='px-12 w-full'>
            <div className='flex flex-col gap-3'>
                <button className='bg-customOrange 2xl:px-8 2xl:py-3 text-primary font-medium 2xl:text-lg hover:shadow-lg duration-300 w-1/2'>Browse products</button>
            </div>

            <div className='border-t border-secondary mt-8 w-full text-left'>
                <p className='2xl:text-lg font-semibold pt-6'>Trending now</p>
                <span className='flex gap-3 items-center pt-3 pb-1'>
                    <ClockIcon/>
                    Hairdryer
                </span>

                <span className='flex gap-3 items-center py-1'>
                    <ClockIcon/>
                    Phonecase
                </span>

                <span className='flex gap-3 items-center py-1'>
                    <ClockIcon/>
                    Lipstick
                </span>
            </div>
        </div>
    )}

export default NoResults;