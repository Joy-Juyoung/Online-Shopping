import React from 'react'
import { AniSvg, AnimatedCircle, Chart, ChartContainer, Percent } from './DountElements';

const DountChart = ({order,color, percent, size}) => {

    // const cx = 50;
    // const cy = 50;
    // const strokeWidth = 20;
    // const radius = 30;
    // const dashArray = 2 * Math.PI * radius;
    // const startAngle = -90;
  
    // let filled = 0;
  
    // const sum = order?.reduce((sum, item) => {
    //   return sum + item?.status;
    // }, 0);
  
    // const ratio = 100 / sum;
  
    // order?.forEach((obj) => {
    //   const itemRatio = ratio * obj?.value;
  
    //   obj.itemRatio = itemRatio;
    //   obj.angle = (filled * 360) / 100 + startAngle;
    //   obj.offset = dashArray - (dashArray * itemRatio) / 100;
    //   obj.filled = filled;
  
    //   filled += itemRatio;
    // });

  return (
    <Chart size={size}>
    <AniSvg viewBox="0 0 200 200">
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="#ebebeb"
        strokeWidth="20"
      />
      <AnimatedCircle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke={color}
        strokeWidth="20"
        strokeDasharray={`${2 * Math.PI * 90 * percent} ${
          2 * Math.PI * 90 * (1 - percent)
        }`}
        strokeDashoffset={2 * Math.PI * 90 * 0.25}
      />
    </AniSvg>
    <Percent color={color}>{percent * 100}%</Percent>
  </Chart>
);
    // <ChartContainer>
    //   <svg width="300px" height="300px" viewBox="0 0 100 100">
    //     {order?.map((item, index) => (
    //       <circle
    //         key={index}
    //         cx={cx}
    //         cy={cy}
    //         r={radius}
    //         fill="transparent"
    //         strokeWidth={strokeWidth}
    //         stroke={item.color}
    //         strokeDasharray={dashArray}
    //         strokeDashoffset={item.offset}
    //         transform={`rotate(${item.angle} ${cx} ${cy})`}
    //       >
    //         <animateTransform
    //           attributeName="transform"
    //           attributeType="XML"
    //           type="rotate"
    //           from={`${startAngle} ${cx} ${cy}`}
    //           to={`${item.angle} ${cx} ${cy}`}
    //           dur="1s"
    //         />

    //         <title>
    //         {item.status}
    //           {/* {item.name}: {item.value} */}
    //         </title>
    //       </circle>
    //     ))}
    //   </svg>
    //   <ul className="items-names">
    //     {order?.map((item, index) => (
    //       <li
    //         key={index++}
    //         className="item-name"
    //         style={{
    //           background: `linear-gradient(90deg, ${item.color} 0, ${item.color} 20px, transparent 20px, transparent 100%)`
    //         }}
    //       >
    //         {item?.status}
    //       </li>
    //     ))}
    //   </ul>
    // </ChartContainer>

}

export default DountChart;