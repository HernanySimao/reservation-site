export const user = () => {
    return {
      token: localStorage.getItem('token'),
    };
  };
  