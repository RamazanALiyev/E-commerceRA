import React from "react";
import "../technichal-comments/_comment.scss";
import star from '../../../assets/images/star.png'

const Comments = () => {
  return (
    <div className="Comments-all">
      <div className="user-profile">
        <div className="user-star">
          <span className="number">5</span>
          <div className="stars">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
          </div>
        </div>

        <div className="user-comments">
          <div className="name">
            <p>Gunel Memmedova</p>
            <span>5 gun evvel</span>
          </div>
          <div className="device-information">
            <p>Yaddas-64,Reng-Qara</p>
          </div>
          <div className="user-comment">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit nibh tortor sit. Consectetur sit auctor odio quis suspendisse tincidunt quis. Et tristique amet aenean nibh porttitor quis aliquam integer. Consectetur lacus, volutpat malesuada libero. Sollicitudin libero pharetra a.</p>
          </div>
        </div>
      </div>
      <div className="divider">

      </div>
      <div className="user-profile">
        <div className="user-star">
          <span className="number">5</span>
          <div className="stars">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
          </div>
        </div>

        <div className="user-comments">
          <div className="name">
            <p>Gunel Memmedova</p>
            <span>5 gun evvel</span>
          </div>
          <div className="device-information">
            <p>Yaddas-64,Reng-Qara</p>
          </div>
          <div className="user-comment">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit nibh tortor sit. Consectetur sit auctor odio quis suspendisse tincidunt quis. Et tristique amet aenean nibh porttitor quis aliquam integer. Consectetur lacus, volutpat malesuada libero. Sollicitudin libero pharetra a.</p>
          </div>
        </div>
      </div>
      <div className="divider">
      </div>
      <div className="form">
        <h2>Rəy Bildir</h2>
        <form>
          <div className="form-name-surname">
          <div className="form-name">
          <label htmlFor="ad">Ad</label>
          <input type="text" id="ad" placeholder="Adınızı daxil edin" />
          </div>
          <div className="form-surname">
          <label htmlFor="soyad">Soyad</label>
          <input type="text" id="soyad" placeholder="Soyadınızı daxil edin" />
          </div>
          </div>
          <div className="selecet-product">
            <label htmlFor="select-product">Rəy bildirdiyiniz məhsulu seçin</label>
            <select id="selec-product" placeholder="Məhsulu seçin">
              <option value="Məhsulu seçin">Məhsulu seçin</option>
            </select>
          </div>
          <div className="write-comment">
          <label htmlFor="write-comment">Rəy bildirdiyiniz məhsulu seçin</label>
            <input type="text" id="write-comment" placeholder="Rəyinizi buraya yazın" />
          </div>
          <div className="form-btn">
            <button className="btn">Rəyini bildir</button>
          </div>
        
        </form>
      </div>
    </div>
  );
};

export default Comments;
