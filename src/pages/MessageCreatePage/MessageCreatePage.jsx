import React from 'react';
import Dropdown from '../../components/Textfield';

function MessageCreatePage() {
  const options = ['Apple', 'Banana', 'Orange', 'Grape'];

  return (
    <div className="App">
      <h1>Dropdown 예시</h1>
      <Dropdown options={options} />
      <h1>Dropdown 예시</h1>
    </div>
  );
}
export default MessageCreatePage;
