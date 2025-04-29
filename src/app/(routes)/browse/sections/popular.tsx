'use client';

import dynamic from 'next/dynamic';

const SwiperList = dynamic(() => import('@/components/ui/swiper'), { ssr: false });
export default function PopularCarousel() {
  const mockData = [
    { id: '1', img: '/pop1.png' },
    { id: '2', img: '/pop2.jpg' },
    { id: '3', img: '/pop3.png' },
    { id: '4', img: '/pop4.jpg' },
    { id: '5', img: '/pop5.jpg' },
    { id: '6', img: '/pop6.png' },
    { id: '7', img: '/pop7.jpg' },
    { id: '8', img: '/pop1.png' },
    { id: '9', img: '/pop2.jpg' },
    { id: '10', img: '/pop3.png' },
    { id: '11', img: '/pop4.jpg' },
    { id: '12', img: '/pop5.jpg' },
    { id: '13', img: '/pop6.png' },
    { id: '14', img: '/pop7.jpg' },
    { id: '15', img: '/pop1.png' },
    { id: '16', img: '/pop2.jpg' },
    { id: '17', img: '/pop3.png' },
    { id: '18', img: '/pop4.jpg' },
    { id: '19', img: '/pop5.jpg' },
    { id: '20', img: '/pop6.png' },
    { id: '21', img: '/pop7.jpg' },
    { id: '22', img: '/pop1.png' },
    { id: '23', img: '/pop2.jpg' },
    { id: '24', img: '/pop3.png' },
    { id: '25', img: '/pop4.jpg' },
    { id: '26', img: '/pop5.jpg' },
    { id: '27', img: '/pop6.png' },
    { id: '28', img: '/pop7.jpg' },
    { id: '29', img: '/pop1.png' },
    { id: '30', img: '/pop2.jpg' },
    { id: '31', img: '/pop3.png' },
    { id: '32', img: '/pop4.jpg' },
    { id: '33', img: '/pop5.jpg' },
    { id: '34', img: '/pop6.png' },
    { id: '35', img: '/pop7.jpg' },
  ];
  return (
    <div className="relative w-full overflow-hidden">
      <h2 className="mb-4 px-16 text-xl font-bold">Popular</h2>
      <SwiperList listData={mockData} />
    </div>
  );
}
