import Image from 'next/image';
import productImage from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';

export const ProductShowcase = () => {
    return (
        <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
            <div className="container">
                <div className='section-heading'>
                    <div className='flex justify-center'>
                        <div className='tag'>Lorem, ipsum dolor.</div>
                    </div>
                    <h2 className='section-title mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing</h2>
                    <p className='section-describtion mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facilis. Dolorum quo, mollitia necessitatibus rem ducimus libero? Ut, ipsa unde?</p>
                </div>
                <div className='relative'>
                    <Image src={productImage} alt="Product Image" className='mt-10' />
                    <Image
                        src={pyramidImage}
                        alt="Pyramid Image"
                        height={262}
                        width={262}
                        className='hidden md:blockabsolute -right-36 -top-32' />
                    <Image
                        src={tubeImage}
                        alt="Pyramid Image"
                        height={248}
                        width={248}
                        className='hidden md:blockabsolute bottom-24 -left-36' />

                </div>
            </div>
        </section>
    );
};
