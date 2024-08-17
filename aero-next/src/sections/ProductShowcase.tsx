import Image from 'next/image';
import productImage from '@/assets/product-image.png';

export const ProductShowcase = () => {
  return (
    <section>
        <div className="container">
          <div>Lorem, ipsum dolor.</div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facilis. Dolorum quo, mollitia necessitatibus rem ducimus libero? Ut, ipsa unde?</p>
          <Image src={productImage} alt="Product Image" className=''/>
        </div>
    </section>
  );
};
