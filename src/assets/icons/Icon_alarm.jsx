import * as React from "react";
import styles from './icons.module.css';
const Icon_alarm = (props) => (
  <div className={styles.icon}>
  <svg
    width={40}
    height={42}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.235 32.692v1.462c0 1.55-.689 3.037-1.915 4.134C23.093 39.384 21.43 40 19.696 40c-1.735 0-3.398-.616-4.625-1.712-1.226-1.097-1.915-2.584-1.915-4.134v-1.462m24.083-2.975c-2.624-2.87-4.477-4.332-4.477-12.247 0-7.249-4.14-9.831-7.548-11.085-.453-.167-.88-.548-1.017-.964C23.599 3.602 21.923 2 19.696 2c-2.228 0-3.905 1.603-4.497 3.423-.138.42-.564.795-1.016.962C10.77 7.64 6.634 10.214 6.634 17.47c-.005 7.915-1.858 9.376-4.482 12.247-1.087 1.19-.135 2.975 1.767 2.975h31.563c1.892 0 2.838-1.791 1.757-2.975Z"
      stroke="#000"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    </svg>
    </div>
    
);

export default Icon_alarm;
