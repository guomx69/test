// Example secure component implementation
import { useState } from 'react';
import { SecurityUtils } from '../libs/utils/apiSecurity';
import { apiUserWithSecurity } from '../libs/utils/apiCalls';
import SecureInput from './SecureInput';
import { useSecureRequest } from './useSecurityRequest';

const SecureComponent = () => {
  const [userInput, setUserInput] = useState('');
  const { data, error, loading } = useSecureRequest('/api/secure-data');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nonce = SecurityUtils.generateNonce();
    
    try {
      await apiUserWithSecurity.post('/api/submit', {
        data: userInput,
        nonce,
      });
    } catch (error) {
      console.error('Secure submission failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SecureInput
        value={userInput}
        onChange={setUserInput}
        type="text"
        className="secure-input"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SecureComponent;