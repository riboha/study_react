
import React from "react";

// 컴포넌트2: Form
const Form = ({ updateMainCat }) => {
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  const [value, setValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  function handleInputChange(e) {
    const userValue = e.target.value;
    setErrorMessage('');

    if (includesHangul(userValue)) {
      setErrorMessage('no hangul plz');
    }
    setValue(userValue.toUpperCase());
  }
  
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (value === '') {
      setErrorMessage('input is empty');
      return true;
    }
    updateMainCat(value);
  }

  return ( 
    <form onSubmit={handleFormSubmit}>
      <input type="text" 
              name="name" 
              placeholder="영어 대사를 입력해주세요" 
              value={value}
              onChange={handleInputChange}/>
      <button type="submit" >생성</button>
      <p style={{color: 'red'}}>{errorMessage}</p>
    </form>
  )
};
export default Form;