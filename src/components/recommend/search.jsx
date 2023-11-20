import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";

const MARKER_IMAGE_URL =
  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";

const { kakao } = window;

const Search = () => {
  const [map, setMap] = useState();
  const [ps, setPs] = useState();
  const [infoWindow, setInfoWindow] = useState();
  const [markers, setMarkers] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const searchPlaces = (event) => {
    event.preventDefault();

    if (!searchKeyword.replace(/^\s+|\s+$/g, "")) {
      alert("숙소 이름을 입력해주세요.");
      return;
    }

    ps.keywordSearch(searchKeyword, placesSearchCB);
  };

  const placesSearchCB = (data, status, pagination) => {
    const { OK, ZERO_RESULT, ERROR } = kakao.maps.services.Status;

    switch (status) {
      case OK:
        displayPlaces(data);
        displayPagination(pagination);
        break;

      case ZERO_RESULT:
        alert("검색 결과가 존재하지 않습니다.");
        break;

      case ERROR:
        alert("검색 결과 중 오류가 발생했습니다.");
        break;

      default:
        return;
    }
  };

  const displayPlaces = (places) => {
    const placesListElement = document.getElementById("placesList");
    const menuElement = document.getElementById("menu_wrap");
    const fragment = document.createDocumentFragment();
    const bounds = new kakao.maps.LatLngBounds();

    removeAllChildNods(placesListElement);
    removeMarker();

    for (let i = 0; i < places.length; i++) {
      const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
      const marker = addMarker(placePosition, i);
      const itemEl = getListItem(i, places[i]);

      bounds.extend(placePosition);

      (function (marker, title) {
        kakao.maps.event.addListener(marker, "mouseover", () => {
          displayInfoWindow(marker, title);
        });

        kakao.maps.event.addListener(marker, "mouseout", () => {
          infoWindow.close();
        });

        itemEl.onmouseover = () => {
          displayInfoWindow(marker, title);
        };

        itemEl.onmouseout = () => {
          infoWindow.close();
        };
      })(marker, places[i].place_name);

      fragment.appendChild(itemEl);
    }

    placesListElement.appendChild(fragment);
    menuElement.scrollTop = 0;

    map.setBounds(bounds);
  };

  const getListItem = (index, places) => {
    const itemElement = document.createElement("li");
    let itemStr =
      '<span class="markerbg marker_' +
      (index + 1) +
      '"></span>' +
      '<div class="info">' +
      "<h5>" +
      places.place_name +
      "</h5>";

    if (places.road_address_name) {
      itemStr +=
        "<span>" +
        places.road_address_name +
        "</span>" +
        '<span class="jibun gray">' +
        places.address_name +
        "</span>";
    } else {
      itemStr += "<span>" + places.address_name + "</span>";
    }

    itemStr += '<span class="tel">' + places.phone + "</span>" + "</div>";
    itemElement.innerHTML = itemStr;
    itemElement.className = "item";

    itemElement.onclick = () => {
      const isConfirmed = window.confirm(
        `선택하신 숙소가 [${places.place_name}]이(가) 맞나요?`
      );

      if (isConfirmed) {
        console.log(`${places.place_name}가 선택되었습니다.`);
        navigate(`/result?type=place&x=${places.x}&y=${places.y}`);
      } else {
        console.log("장소 선택이 취소되었습니다.");
      }
    };

    return itemElement;
  };

  const addMarker = (position, idx) => {
    const imageSize = new kakao.maps.Size(36, 37);
    const imgOptions = {
      spriteSize: new kakao.maps.Size(36, 691),
      spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10),
      offset: new kakao.maps.Point(13, 37),
    };
    const markerImage = new kakao.maps.MarkerImage(
      MARKER_IMAGE_URL,
      imageSize,
      imgOptions
    );
    const marker = new kakao.maps.Marker({
      position: position,
      image: markerImage,
    });

    marker.setMap(map);
    setMarkers((prev) => [...prev, marker]);

    return marker;
  };

  const removeMarker = () => {
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);
  };

  const displayPagination = (pagination) => {
    const paginationElement = document.getElementById("pagination");
    const fragment = document.createDocumentFragment();

    while (paginationElement.hasChildNodes()) {
      paginationElement.removeChild(paginationElement.lastChild);
    }

    for (let i = 1; i <= pagination.last; i++) {
      const aElement = document.createElement("a");

      aElement.href = "#";
      aElement.innerHTML = i;

      if (i === pagination.current) {
        aElement.className = "on";
      } else {
        aElement.onclick = (function (i) {
          return function () {
            pagination.gotoPage(i);
          };
        })(i);
      }

      fragment.appendChild(aElement);
    }
    paginationElement.appendChild(fragment);
  };

  const displayInfoWindow = (marker, title) => {
    const content = '<div style="padding:5px;z-index:1;">' + title + "</div>";

    infoWindow.setContent(content);
    infoWindow.open(map, marker);
  };

  const removeAllChildNods = (element) => {
    while (element.hasChildNodes()) {
      element.removeChild(element.lastChild);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  useEffect(() => {
    const mapContainerElement = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(mapContainerElement, mapOption);
    const ps = new kakao.maps.services.Places();
    const infoWindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    setMap(kakaoMap);
    setPs(ps);
    setInfoWindow(infoWindow);
  }, []);

  return (
    <div className="map_wrap">
      <div
        id="map"
        style={{ width: "1000px", height: "500px", overflow: "hidden" }}
      />
      <div id="menu_wrap" className="bg_white">
        <div className="option">
          <div>
            <form onSubmit={searchPlaces}>
              숙소 :{" "}
              <input
                type="text"
                id="keyword"
                size="10"
                value={searchKeyword}
                onChange={handleSearchInputChange}
              />
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
        <hr />
        <ul id="placesList"></ul>
        <div id="pagination"></div>
      </div>
    </div>
  );
};

export default Search;
