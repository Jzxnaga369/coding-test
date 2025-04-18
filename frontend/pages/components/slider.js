import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from 'react-modal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useSelector } from 'react-redux';

export default function SliderComponent() {
  const { sales, loading: salesLoading, error: salesError } = useSelector(
    (state) => state.sales
  );

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openLightbox = (sale) => {
    setSelected(sale);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setSelected(null);
  };

  return (
    <>
      <div className='slide-container'>
        <div className="slide-contain">
          <Swiper
            className='card-wrapper'
            slidesPerView={3}
            spaceBetween={30}
            loop
            navigation
            pagination={{ clickable: true }}
          >
            {sales.map((sale, idx) => (
              <SwiperSlide key={sale.id || idx} className='card'>
                <div className='image-content'>
                  <span className='overlay'></span>
                  <div className='card-image' onClick={() => openLightbox(sale)}>
                    <img
                      src="https://media-hosting.imagekit.io/d969de9c43bd4374/profile.jpg.jpeg?Expires=1839513647&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KIvC-KvRGRTUBtTzfekTdNuOAaLchmP677xIHiwrTZUFNpPH9NhcYbVAMbfDPHf8NRvNoNCfhkZwjVBocScWiYX6iUQ7ENM14vhCnp2N2DtIRaeKZcfnNwzWncJ~E4HJOOZeUf94RiMR6siw3l32DiMnlz1vxg~Ws9WEamqYeG8rq7P1vOOe71vCXhktDBbrXk1pSl1psXZ1zrmmqIwdtIPALSCf6xvRsj-3XQH7fbC3-o4OE2LSWoskc0n7HcrtJ7~mTGBa7XbYdYqtGzUVIAyT7u6aF6pzplIbbMCB~4qa7VhaTquHQeHpL4BiAvvSmLNZevzRXCUEwz00SMO~gA__"
                      // I might add this later on -> src={sale.profileUrl}
                      alt={sale.name}
                      className="card-img"
                    />
                  </div>
                </div>
                <div className='card-content'>
                  <h2 className='name'>{sale.name}</h2>
                  <div className='description'>
                    <p>{sale.role}</p>
                    <p>{sale.region}</p>
                    <p>{sale.skills}</p>
                  </div>
              
                </div>
                <div className='button-content'>
                <button className='button' type='button'>
                  Sales Info
                </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {selected && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeLightbox}
          overlayClassName="lightbox-overlay"
          className="lightbox-content"
        >
          <button className="lightbox-close" onClick={closeLightbox}>
            &times;
          </button>
          <div className="lightbox-body">
            <img
              src="https://media-hosting.imagekit.io/d969de9c43bd4374/profile.jpg.jpeg?Expires=1839513647&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KIvC-KvRGRTUBtTzfekTdNuOAaLchmP677xIHiwrTZUFNpPH9NhcYbVAMbfDPHf8NRvNoNCfhkZwjVBocScWiYX6iUQ7ENM14vhCnp2N2DtIRaeKZcfnNwzWncJ~E4HJOOZeUf94RiMR6siw3l32DiMnlz1vxg~Ws9WEamqYeG8rq7P1vOOe71vCXhktDBbrXk1pSl1psXZ1zrmmqIwdtIPALSCf6xvRsj-3XQH7fbC3-o4OE2LSWoskc0n7HcrtJ7~mTGBa7XbYdYqtGzUVIAyT7u6aF6pzplIbbMCB~4qa7VhaTquHQeHpL4BiAvvSmLNZevzRXCUEwz00SMO~gA__"
              // also using selected profile picture src={selected.profileUrl}
              alt={selected.name}
              className="lightbox-img"
            />
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
          </div>
        </Modal>
      )}
    </>
  );
}