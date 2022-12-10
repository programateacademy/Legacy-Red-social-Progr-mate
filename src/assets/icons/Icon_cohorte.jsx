import * as React from "react";
import styles from './iconStyles.module.css';
const Icon_cohorte = (props) => {
  const { width, height } = props;
  return (
    <svg width={width} height={height} strokeWidth="1.73" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffcc02"><path d="M1 20v-1a7 7 0 017-7v0a7 7 0 017 7v1" stroke="#ffcc02" strokeWidth="1.73" strokeLinecap="round"></path><path d="M13 14v0a5 5 0 015-5v0a5 5 0 015 5v.5" stroke="#ffcc02" strokeWidth="1.73" strokeLinecap="round"></path><path d="M8 12a4 4 0 100-8 4 4 0 000 8zM18 9a3 3 0 100-6 3 3 0 000 6z" stroke="#ffcc02" strokeWidth="1.73" strokeLinecap="round" strokeLinejoin="round"></path></svg>
  );
};

export default Icon_cohorte;
