


import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import useReviews from '../../Hooks/useReviews';

export default function ReviewsCard() {
  const { reviews } = useReviews();
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef([]);

  // Calculate max card height
  useEffect(() => {
    if (cardRefs.current.length > 0) {
      const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights));
    }
  }, [reviews]);

  const cardStyle = {
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#181c23',
    display: 'flex',
    flexDirection: 'column',
    height: maxHeight ? `${maxHeight}px` : 'auto',
  };

  return (
    <div style={{ padding: '1rem' }}>
      <Swiper
        slidesPerView={1} // default for mobile
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 }, // mobile
          768: { slidesPerView: 2, spaceBetween: 20 }, // tablet
          1024: { slidesPerView: 3, spaceBetween: 30 }, // desktop
          1280: { slidesPerView: 4, spaceBetween: 30 }, // large desktop
        }}
        style={{ alignItems: 'stretch' }}
      >
        {reviews?.map((r, index) => (
          <SwiperSlide key={r.id} style={{ display: 'flex' }}>
            <div ref={(el) => (cardRefs.current[index] = el)} style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <img
                  src={r.avatar}
                  alt={r.name}
                  style={{ width: '4rem', height: '4rem', borderRadius: '9999px', objectFit: 'cover' }}
                />
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#ffffff' }}>{r.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#d1d5dc' }}>{r.role}</p>
                </div>
              </div>
              <div style={{ display: 'flex', marginBottom: '0.5rem' }}>
                {Array.from({ length: 5 }).map((_, i) =>
                  i < r.rating ? (
                    <FaStar key={i} style={{ color: '#eb3154', marginRight: '0.25rem' }} />
                  ) : (
                    <FaRegStar key={i} style={{ color: '#9ca3af', marginRight: '0.25rem' }} />
                  )
                )}
              </div>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#d1d5dc' }}>
                <strong>Game:</strong> {r.game_played}
              </p>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#d1d5dc' }}>
                <strong>Date:</strong> {r.date}
              </p>
              <p style={{ marginTop: 'auto', color: '#d1d5dc' }}>{r.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
