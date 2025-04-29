'use client';

import './swiper.css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
  listData: {
    id: string;
    img: string;
  }[];
}
export default function SwiperList({ listData }: IProps) {
  return (
    <div className="-mx-16 px-16">
      <Swiper
        centeredSlides
        grabCursor
        loop
        spaceBetween={5}
        navigation
        modules={[Keyboard, Navigation, Pagination]}
        pagination
        breakpoints={{
          1024: { slidesPerView: 7.75, slidesPerGroup: 7 },
          768: { slidesPerView: 5.5, slidesPerGroup: 5 },
        }}
      >
        {listData.map((data, index) => (
          <SwiperSlide key={index} className="w-[15vh]">
            <div className="overflow-hidden rounded-md">
              <img src={data.img} alt={`${data.id}`} className="h-auto w-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
