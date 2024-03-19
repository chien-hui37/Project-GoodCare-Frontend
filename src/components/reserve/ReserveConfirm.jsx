import React from 'react';

import Swal from 'sweetalert2';
import './Reserve.css';


function handleCancelClick() {
  window.location.href = '/';
}



function ReserveConfirm() {
  // 從 sessionStorage 獲取資料
  const applyname = sessionStorage.getItem('applyname');
  const email = sessionStorage.getItem('email');
  const phone = sessionStorage.getItem('phone');
  const name = sessionStorage.getItem('name');
  const birthday = sessionStorage.getItem('birthday');
  const gender = sessionStorage.getItem('gender');
  const height = sessionStorage.getItem('height');
  const weight = sessionStorage.getItem('weight');
  const relationship = sessionStorage.getItem('relationship');
  const servicelocation = sessionStorage.getItem('servicelocation');
  const medicalhistory = sessionStorage.getItem('medicalhistory');
  const situation = sessionStorage.getItem('situation');




  // 點擊按鈕時觸發的函式
  const handleCheckClick = () => {
    // 顯示 SweetAlert 提示框
    Swal.fire({
      icon: 'success',
      title: '預約成功！',

      text: '會由專人與主要聯絡人聯繫。',
      imageUrl: require("../../asset/images/reserve/confirm_pic.jpg"),
      imageAlt: '圖片',
      imageWidth: 300,
      imageHeight: 200,
      showConfirmButton: false,


    });

    // 將網頁重定向到首頁
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);

  };

  return (
    <React.Fragment>
      <div className="appointment">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-5 col-md-5 col-lg-5">
            <br />
            <form id="formcontentConfirm">
              <h2>預約照服員資料表</h2>
              <hr />
              <h4>申請人</h4>
              <h5>(主要聯絡人)</h5>
              <div className="form-row">
                <label for="name"><p><i className="fa-solid fa-user"></i> 姓名：</p></label>
                <input type="text" id="applyname" name="applyname" value={applyname} />
              </div>
              <div className="form-row">
                <label for="email"><p><i className="fa-solid fa-envelope"></i> 信箱：</p></label>
                <input type="email" id="email" name="email" style={{ width: '80%' }} value={email} />
              </div>
              <div className="form-row">
                <label for="phone"><p><i className="fa-solid fa-phone"></i> 電話：</p></label>
                <input type="tel" id="phone" name="phone" value={phone} />
              </div>
              <br />
              <hr />
              <h4>預約照顧</h4>
              <h5>(被照顧者資料)</h5>
              <div className="form-row">
                <label for="name"><p><i className="fa-solid fa-user"></i> 姓名：</p></label>
                <input type="text" id="name" name="name" value={name} />
              </div>
              <div className="form-row">
                <label for="birthday"><p><i className="fa-solid fa-cake-candles"></i> 生日：</p></label>
                <input type="date" id="birthday" name="birthday" value={birthday} />
              </div>
              <div className="form-row">
                <label for="gender"><p><i className="fa-solid fa-bomb"></i> 性別：</p></label>
                <select id="gender" name="gender" value={gender}>
                  <option value="1">男</option>
                  <option value="0">女</option>
                </select>
              </div>
              <div className="form-row">
                <label for="height"><p><i className="fa-solid fa-thin fa-ruler"></i> 身高：</p></label>
                <input type="number" id="height" name="height" min="0" max="300" style={{ width: '135px' }} value={height} />
              </div>
              <div className="form-row">
                <label for="weight"><p><i className="fa-solid fa-thin fa-weight-scale"></i> 體重：</p></label>
                <input type="number" id="weight" name="weight" min="0" max="300" style={{ width: '135px' }} value={weight} />
              </div>
              <div className="form-row">
                <label for="relationship"><p><i className="fa-solid fa-people-arrows"></i> 與被照顧者的關係：</p></label>
                <input type="text" id="relationship" name="relationship" style={{ width: '135px' }} value={relationship} />
              </div>
              <div className="form-row">
                <label for="servicelocation"><p><i className="fa-solid fa-location-dot"></i> 服務地址：</p></label>
                <input id="servicelocation" name="servicelocation" rows="1" style={{ width: '100%' }} value={servicelocation} ></input>
              </div>
              <div className="form-row">
                <i className=""></i>
                <i className=""></i>
                <label for="medicalhistory"><i className="fa-solid fa-book-medical"></i> 過去病史：</label>
                <textarea id="medicalhistory" name="medicalhistory" rows="3" maxLength="50" style={{ width: '100%' }} value={medicalhistory}></textarea>
              </div>
              <div className="form-row">
                <label for="situation"><i className="fa-solid fa-comment-dots"></i> 情況描述：</label>
                <textarea id="situation" name="situation" rows="6" maxLength="50" style={{ width: '100%' }} value={situation} ></textarea>
              </div>
              <div className="button-container">
                <input type="button" className="cancel-button" onClick={handleCancelClick} value="取消" />
                <input type="button" className="submit-button" onClick={handleCheckClick} value="確認" />
              </div>
            </form>
            <br />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ReserveConfirm;