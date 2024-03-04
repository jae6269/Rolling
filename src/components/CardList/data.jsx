import React, { useState, useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData';
import Carousel from './Carousel';
import mockData from './mock.json';

// 카드리스트 데이터 사용하는 임시 파일
// 페이지 작성할때 사용 후 삭제 해주세요
const MyComponent = () => {
  // // 서버 데이터
  //
  // // url constant만들면 수정예정
  // const url = 'https://rolling-api.vercel.app/2-12/recipients/?limit=16';
  // const recipientsData = useFetchData(url);
  // // recipientsData가 유효하고 results 배열이 존재하는지 확인
  // const recipients =
  //   recipientsData && recipientsData.results ? recipientsData.results : [];
  // return <Carousel cards={recipients} />;
  //
  // 목데이터
  const [recipientsData, setRecipientsData] = useState(null);

  useEffect(() => {
    // mock.json 파일의 내용을 가져와 recipientsData 상태에 설정합니다.
    setRecipientsData(mockData);
  }, []);

  // recipientsData가 유효하고 results 배열이 존재하는지 확인
  const recipients =
    recipientsData && recipientsData.results ? recipientsData.results : [];

  return <Carousel cards={recipients} />;
};

export default MyComponent;
