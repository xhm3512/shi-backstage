import React from 'react';
export default ()=>{
  const url ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAAXNSR0IArs4c6QAAARRJREFUSEvtls8OwUAQxr/xHNv4E2dn4e4hcPMgeBe8BgecPYCDNsNDCEYqbcKimXY3cdBNmjTN7Pfrfrszs4QfDUq4ZEy1D1Az6z+I6EZ0XUZRtE7jgqDeE5E2gFQrQ0L2zOECgDyCjakOQDRTLv4MuTSY+WhMvQWSnQ6aqIsMmcN5Aq6NQZgowbhVpHsKw61fsGAFPB57jEAI4o8pOH53tPppxYIJ82FqU42pbUDo2GCtS3bcu9UlOPHom9U+91h9uPyeasVp8ZhOxQqIczrFladoyVQY9DFEUV+LSmfP+1+wao/dTXdri27817aYK538gbXp5EaMZ1tWuwvmVyjTKfOWmd9Qe0aZTsru5N1qd8H8CndPxfQdYQaPDgAAAABJRU5ErkJggg=='
  return (
    <img
      style={{ width: '15px', height: '15px' }}
      src={url}
      alt=''

    />
  );
}
