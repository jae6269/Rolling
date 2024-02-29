import React from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const mockData = {
    id: 32,
    recipientId: 2,
    sender: '김하은',
    profileImageURL:
      'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
    relationship: '가족',
    content:
      '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
    font: 'Pretendard',
    createdAt: '2023-11-01T08:05:25.399056Z',
  };
  return <Modal props={mockData} />;
}

export default App;
