import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

function Main() {
  const googleFormLink = "https://your-google-form-link";
  return (
    <div className="explanation">
      <h1 className="main-title">
        국내로 떠나는 새로운 여행, <br />
        당신만의 모험이 여기에 있어요! 🌿🏞️
      </h1>

      <p className="main-text">
        놀라운 자연 경관, 풍부한 문화, 특별한 순간들이 당신을 기다리고 있어요.
        <br />
        국내 여행에서는 다채로운 경험과 감동을 만날 수 있습니다.
        <br />
        푸른 바다, 신비로운 산속, 도시의 활력, 그리고 역사의 흔적까지, 당신의
        여행은 풍요로움이 가득할 거에요.
      </p>
      <p className="main-text">
        여행 도중에는 특별한 지역 맛집을 발견하고, 현지 문화에 몰두해보세요.
        <br />
        우리의 여행 플랫폼은 당신이 새로운 모험을 찾고, 독특한 이야기를 쓸 수
        있도록 최적화되었습니다.
      </p>
      <p className="main-text">
        모험을 좋아하는 분, 문화와 예술을 사랑하는 분, 그리고 평화로운 휴식을
        찾는 분까지, <br />
        모든 여행자들을 위한 특별한 여행 플랫폼을 제공합니다.
      </p>
      <p className="main-text">
        함께하는 여행자들과 소통하며, 특별한 경험을 만들어보세요.
        <br />
        지금 바로 여행을 시작하여 국내의 아름다운 숨은 보석을 발견하세요!
      </p>

      <h2 className="sub-title">여행 추천 플래너와 함께</h2>

      <p className="sub-text">
        여행은 더욱 특별해집니다! 🚀 <br />
        우리의 여행 플래너는 마치 당신의 여행 전략가 같아요. <br />
        선택한 키워드와 관련된 다양한 관광지들을 놓치지 않도록 도와줄 거예요.
      </p>
      <p className="sub-text">
        혹시 지루한 여행을 걱정하고 있나요? 걱정하지 마세요! <br />
        여행 중에는 예상치 못한 재미난 이벤트들이 당신을 기다리고 있어요. 언제
        어디서든 특별한 순간을 만들어 드립니다.
      </p>
      <p className="sub-text">
        또한, 우리의 플래너는 당신이 방문하는 지역의 숨은 맛집, 현지 문화 행사
        등 다양한 정보도 챙겨드립니다. <br />
        여행 중에는 단순한 관광을 넘어, 지역의 삶과 소통할 수 있는 기회를 제공할
        거에요!
      </p>

      <br />

      <h2 className="sub-title">국내 여행의 특별한 순간을 경험하세요!</h2>
      <p className="sub-text">
        지금까지 경험하지 못한 곳들을 발견해보세요. 숨겨진 여행지, 지역의 특별한
        이야기, <br />
        그리고 현지인과의 소중한 만남을 통해 당신만의 여행 이야기를
        만들어보세요.
      </p>
      <p className="sub-text">
        더불어, 이제 플래너 제작을 시작하고 싶다면, 위의 메뉴바에 있는 "플래너
        제작" 버튼을 눌러보세요! <br />
        여행 일정을 계획하고 새로운 모험을 시작해보세요.
      </p>
      <Link to="/type">
        <button className="special-button">특별한 여행 시작하기</button>
      </Link>

      <br />
      <br />

      <h2 className="sub-title">여행에 대한 의견을 공유해주세요!</h2>
      <p className="sub-text">
        저희에게 궁금한점이 있거나 프로젝트에 대한 의견이 있나요? <br />
        아래 버튼을 클릭하여 의견을 공유해주세요! <br />
        당신의 소중한 의견이 더 나은 여행을 만들어낼 것입니다.
      </p>

      <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
        <button className="special-button">의견 공유하기</button>
      </a>
    </div>
  );
}

export default Main;
