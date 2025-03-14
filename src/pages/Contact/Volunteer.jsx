







import "./volunteer.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import volunteer from "./img/cyba.webp";
import report1 from "./img/report1.webp"
import report2 from "./img/report2.webp"
import report3 from "./img/report3.webp"
import report4 from "./img/report4.webp"
import SmallFooter from "components/footer/SmallFooter";
import Container from "components/Container/Container";

const images = Object.values(import.meta.glob("./img/reporting*.webp", { eager: true }))
  .map((img) => img.default);

const Volunteer = () => {
  return (
    <div className="volunter-page">
      <div className="volunter-page__volunteer volunteer">
        <div className="volunteer__img-box img-box">
          <div className="img-box__contant image-box">
            <img src={report1} alt="report1" />
          </div>
          <div className="img-box__contant image-box">
            <img src={report2} alt="report2" />
          </div>
        </div>
        <div className="volunteer__max-cyba max-cyba">
          <div className="max-cyba__title">
            <p>Our </p>
            <p >Military Aid Volunteer</p>
          </div>
          <div className="max-cyba__box-img">
            <img src={volunteer} alt="volunteer" />
          </div>
          <a
            href="https://www.instagram.com/max_ts3025?igsh=dXN3enI1Nzg1OGcw&utm_source=qr"
            target="_blank"
            className="max-cyba__btn-instagram"
          >
            Instagram
          </a>
        </div>
        <div className="volunteer__img-box img-box">
          <div className="img-box__contant image-box">
            <img src={report3} alt="report3" />
          </div>
          <div className="img-box__contant image-box">
            <img src={report4} alt="report4" />
          </div>
        </div>
      </div>
      <div className="volunter-page__report report">
        <div className="report__track">
          <div className="report__content">
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
          </div>

          <div className="report__content" aria-hidden="true">
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
            <p>Stay With Ukraine</p>
          </div>
        </div>
      </div>


      <div className="texts">
        <p>
          Наша команда не тільки грає , а і активно допомагає Воїнам , які боронять нашу країну.
        </p>
      </div>

      <div className="volunter-page__slider slider-contant">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`reporting${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>




      </div>
      <SmallFooter />
    </div>
  );
};

export default Volunteer;
