import styles from '../styles/ProgressBar.module.css'
import styled, { keyframes } from 'styled-components';



export const ProgressBar = ({ percentage }) => {
    const rotate360 = keyframes`
    to{
        stroke-dashoffset:${90 - parseInt(percentage.slice(0,2)) };
        }
`;

    const Circle = styled.circle`
    width: 20vh;
    fill: none;
    stroke:url(#linear);
    stroke-width: 18px;
    stroke-dasharray: 85;
    stroke-dashoffset: 85;
    stroke-linecap: round;
  animation: ${rotate360} 2s linear forwards;
`;


    return (
        <div className={styles.skill}>

            <div className={styles.outer}>

                <div className={styles.inner}>
                    <div className={styles.number}>
                        {percentage}
                    </div>
                </div>
            </div>

            <svg viewBox="0 0 130 130" className={styles.svg}>
                <defs>
                    <linearGradient id='linear'>
                        <stop offset="0%" stopColor={"#49266a"} />
                        <stop offset="100%" stopColor={"#c44079"} />
                    </linearGradient>
                </defs>
                <Circle  cx="65" cy="65" r="55" pathLength={100}></Circle>

            </svg>
        </div>

    );
}


export default ProgressBar