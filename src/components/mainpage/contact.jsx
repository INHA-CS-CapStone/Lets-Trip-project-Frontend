import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const email = "email@example.com";
  const phoneNumber = "+1 123 456 7890";
  const address = "인하대학교 하이테크센터 101호";

  return (
    <div className="wrap_box">
      <h2>문의하기</h2>
      <p>
        궁금한 사항이 있으신가요? 언제든지 문의해주세요! 다양한 방법으로 연락이
        가능합니다.
      </p>

      <div className="contact-method">
        <FaEnvelope />
        <p>Email: {email}</p>
      </div>

      <div className="contact-method">
        <FaPhone />
        <p>전화번호: {phoneNumber}</p>
      </div>

      <div className="contact-method">
        <FaMapMarkerAlt />
        <p>방문주소: {address}</p>
      </div>

      <br />

      <h3>자주 묻는 질문 (FAQ)</h3>
      <div>
        <p>
          <strong>Q:</strong> 여행 일정을 어떻게 계획하나요?
        </p>
        <p>
          A: 메뉴 또는 메인페이지에 있는 "플래너 제작" 버튼을 눌러 시작해보세요!
        </p>

        <br />

        <p>
          <strong>Q:</strong> 플래너 제작에 대해 더 알고 싶어요. 어떻게
          시작하나요?
        </p>
        <p>
          A: 플래너 제작 버튼을 누른 이후 선호하는 관광타입, 여행 키워드, 그리고
          숙소위치를 입력해주세요!
        </p>

        <br />

        <p>
          <strong>Q:</strong> 제데로 추천되는게 맞나요?
        </p>
        <p>
          A: 사용자가 선택한 관광타입, 그리고 여행 키워드에따라서 가장 알맞는
          관광지들을 추천해드립니다! <br />
          "제데로"의 기준은 모두에게 다르지만 최선을 다해 가장 알맞는 여행지를
          추천해드리겠습니다!
        </p>
      </div>

      <br />

      <p>
        프로젝트 관련된 모든 문의를 환영합니다. 더 나은 여행을 위해 언제든지
        도움을 드리겠습니다!
      </p>
    </div>
  );
};

export default Contact;
