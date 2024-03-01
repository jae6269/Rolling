// useFetchData에서 받아온 데이터를
// 컴포넌트에 맞게 포매팅 해주는 함수입니다

// 함수명 : formatXData
// 예시 : formatCardData, formatProfileData

function formatCardCreatedDate(createdAt) {
  // "createdAt": "2023-11-01T08:05:25.399056Z"

  // 주어진 형식의 날짜 문자열을 Date 객체로 변환
  const date = new Date(createdAt);

  // 월과 일이 한 자리 수인 경우 두 자리로 변경 (예: 2023-11-01 -> 2023-11-01)
  const formattedMonth =
    date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const formattedDay =
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  // 포맷된 날짜 문자열 반환 (예: 2023-11-01 -> 2023.11.01)
  return `${date.getFullYear()}.${formattedMonth}.${formattedDay}`;
}

export default formatCardCreatedDate;
