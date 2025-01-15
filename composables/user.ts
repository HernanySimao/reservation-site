export const user = () => {
    return {
      token: localStorage.getItem('token'),
      id: localStorage.getItem('userId')
    };
  };
  