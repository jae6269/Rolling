import React from 'react';
import CardList from './index';
import useFetchData from '../../hooks/useFetchData';

// 카드리스트 데이터 사용하는 임시 파일
// 페이지 작성할때 사용 후 삭제 해주세요
const MyComponent = () => {
  // url constant만들면 수정예정
  const url =
    'https://rolling-api.vercel.app/2-12/recipients/?limit=16&offset=16';
  const recipientsData = useFetchData(url);

  // recipientsData가 유효하고 results 배열이 존재하는지 확인
  const recipients =
    recipientsData && recipientsData.results ? recipientsData.results : [];

  return <CardList recipients={recipients} />;
};

export default MyComponent;
