import React, {useEffect} from "react";
import "./map.css"

const { kakao } = window;

function Map(){

    useEffect (() => {
       
        var markers = [];
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});

        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);

        var ps = new kakao.maps.services.Places();
        var keyword = document.getElementById('keyword').value;
        if (!keyword.replace(/^\s+|\s+$/g, '')) {
            alert('키워드를 입력해주세요!');
            return false;
        }

        ps.keywordSearch(keyword, function placesSearchCB (places, status, pagination) { 

            if (status === kakao.maps.services.Status.OK) {

                var listEl = document.getElementById('placesList'), 
                menuEl = document.getElementById('menu_wrap'),
                fragment = document.createDocumentFragment(), 
                bounds = new kakao.maps.LatLngBounds(), 
                listStr = '';

                while (listEl.hasChildNodes()) {
                    listEl.removeChild (listEl.lastChild);
                }

                for ( var i = 0; i < markers.length; i++ ) {
                    markers[i].setMap(null);
                }   
                markers = [];

                for ( var i=0; i<places.length; i++ ) {

                    var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
                    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
                    imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
                    imgOptions =  {
                        spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
                        spriteOrigin : new kakao.maps.Point(0, (i*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                        offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
                    },
                    markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
                        marker = new kakao.maps.Marker({
                        position: placePosition, // 마커의 위치
                        image: markerImage 
                        });
            
                    marker.setMap(map); // 지도 위에 마커를 표출합니다
                    markers.push(marker);
                        
                    var itemEl = document.createElement('li'),
                    itemStr = '<span class="markerbg marker_' + (i+1) + '"></span>' + '<div class="info">' +'   <h5>' + places.place_name + '</h5>';

                    if (places.road_address_name) {
                        itemStr += '    <span>' + places.road_address_name + '</span>' +'   <span class="jibun gray">' +  places.address_name  + '</span>';
                    } else {
                        itemStr += '    <span>' +  places.address_name  + '</span>'; 
                    }
                    itemStr += '  <span class="tel">' + places.phone  + '</span>' + '</div>';           
                    itemEl.innerHTML = itemStr;
                    itemEl.className = 'item';

                    bounds.extend(placePosition);

                    (function(marker, title) {
                        kakao.maps.event.addListener(marker, 'mouseover', function() {
                            var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';
                            infowindow.setContent(content);
                            infowindow.open(map, marker);
                        });
            
                        kakao.maps.event.addListener(marker, 'mouseout', function() {
                            infowindow.close();
                        });
            
                        itemEl.onmouseover =  function () {
                            var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';
                            infowindow.setContent(content);
                            infowindow.open(map, marker);
                        };
            
                        itemEl.onmouseout =  function () {
                            infowindow.close();
                        };
                    })(marker, places[i].place_name);
            
                    fragment.appendChild(itemEl);
                }
                listEl.appendChild(fragment);
                menuEl.scrollTop = 0;
                map.setBounds(bounds);

                var paginationEl = document.getElementById('pagination');
            
                while (paginationEl.hasChildNodes()) {
                    paginationEl.removeChild (paginationEl.lastChild);
                }
                for (var i=1; i<=pagination.last; i++) {
                    var el = document.createElement('a');
                    el.href = "#";
                    el.innerHTML = i;
                    if (i===pagination.current) {
                        el.className = 'on';
                    } else {
                        el.onclick = (function(i) {
                            return function() {
                                pagination.gotoPage(i);
                            }
                        })(i);
                    }
                    fragment.appendChild(el);
                }
                paginationEl.appendChild(fragment);

            }
            else if (status === kakao.maps.services.Status.ZERO_RESULT) {

                alert('검색 결과가 존재하지 않습니다.');
                return;
        
            } else if (status === kakao.maps.services.Status.ERROR) {
        
                alert('검색 결과 중 오류가 발생했습니다.');
                return;
        
            }

        });

    });

    return(
        <div class="map_wrap">
            <div id="map" style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}></div>
                <div id="menu_wrap" class="bg_white">
                    <div class="option">
                        <div>
                            <form onsubmit="Map()">
                                숙소 : <input type="text" value="이태원 맛집" id="keyword" size="10"></input>
                                <button type="submit">검색하기</button>
                            </form>
                        </div>
                    </div>
                    <hr></hr>
                    <ul id="placesList"></ul>
                    <div id="pagination"></div>
                </div>
        </div>    
    )
    
}

export default Map;
