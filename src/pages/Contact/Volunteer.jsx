
import "./volunteer.scss"
import report1 from './img/report1.webp'
import report2 from './img/report2.webp'
import report3 from './img/report3.webp'
import report4 from './img/report4.webp'
import volunteer from './img/cyba.webp'
const Volunteer = () => {
  return (
    <div className="volunter-page ">
      <div className="volunter-page__volunteer volunteer ">
        <div className="volunteer__img-box">
          <img src={report1} alt="report1" />
          <img src={report2} alt="report2" />
        </div>
        <div className="volunteer__max-cyba max-cyba">
          <p>Our Volunteer</p>
          <div className="max-cyba__box-img">
            <img src={volunteer} alt="report3" />
          </div>

          <a href="https://www.instagram.com/max_ts3025?igsh=dXN3enI1Nzg1OGcw&utm_source=qr" target="_blank" className="max-cyba__btn-instagram">Instagram</a>

        </div>
        <div className="volunteer__img-box">
          <img src={report3} alt="report3" />
          <img src={report4} alt="report4" />
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

    </div>
  );
};

export default Volunteer;