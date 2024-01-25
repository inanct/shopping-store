import React from 'react'
import Slider from 'react-slick';

const SliderCom = () => {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div className=' mt-8'>
        <Slider {...settings}>
          <div className='!flex flex-col items-center justify-center bg-gray-100 px-6 text-center'>
            <div className='mt-6 flex flex-col justify-center items-center' >
                <div className='mt-6 text-4xl font-bold'>New Season Sneakers are here!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae tenetur asperiores corporis odit voluptas enim tempora minima voluptatem, iure iusto nemo eum hic reprehenderit ad natus. Vero, rerum praesentium.</div>
                <div className=' border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center  justify-center  bg-gray-200 mt-8 hover:bg-slate-500'>Review</div>
            </div>
           <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60d2e87c-9eaa-46a0-b9aa-0f730291262b/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png" alt="" />
          </div>
          <div className='!flex flex-col items-center justify-center bg-gray-100 px-6 text-center'>
            <div className='mt-6 flex flex-col justify-center items-center'>
                <div className='mt-6 text-4xl font-bold'>Live Your Style!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi eos praesentium doloremque in explicabo rem accusantium molestias minus placeat, repellat exercitationem dolorem quod eum adipisci totam asperiores officiis quo.</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center  justify-center  bg-gray-200 mt-8 hover:bg-slate-500'>Review</div>
            </div>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c6d55fea-37cf-4dd8-bbca-55e22809bcd4/air-force-1-luxe-ayakkab%C4%B1s%C4%B1-QDl2hl.png" alt="" />
          </div>
          </Slider>
    </div>
  )
}

export default SliderCom