import Header from '../components/Header';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }) => {
  // 고의로 505에러 발생시키기
  //   useEffect(() => {
  //     throw Error();
  //   }, []);
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            margin: 0;
            font-family: Noto Sans, Noto Sans KR;
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
