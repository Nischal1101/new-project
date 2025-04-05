import { ISvgProps } from "@/types";

const TopLeft = ({ className, selected }: ISvgProps) => {
  return (
    <svg
      width="169"
      height="81"
      viewBox="0 0 169 81"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M160.763 63.0538C158.985 63.0583 157.256 63.6556 155.834 64.7566C154.413 65.8577 153.375 67.4032 152.876 69.1624H73.0435C72.1489 69.166 71.2625 68.9863 70.4358 68.6338C69.6091 68.2812 68.8586 67.7627 68.2281 67.1086L43.0265 41.1667C41.9695 40.0719 40.7124 39.2039 39.3278 38.6129C37.9433 38.022 36.4588 37.7199 34.9603 37.7241H17.3332C15.5281 37.7223 13.7975 36.9825 12.5211 35.6669C11.2447 34.3513 10.5268 32.5675 10.5251 30.707V16.7915C12.4267 16.221 14.0647 14.9625 15.1383 13.2472C16.2119 11.5319 16.6491 9.47501 16.3695 7.45421C16.0899 5.43341 15.1124 3.5844 13.6164 2.24677C12.1204 0.90915 10.2064 0.172729 8.22597 0.172729C6.24549 0.172729 4.33149 0.90915 2.8355 2.24677C1.33951 3.5844 0.361967 5.43341 0.0823935 7.45421C-0.19718 9.47501 0.239992 11.5319 1.31362 13.2472C2.38724 14.9625 4.02525 16.221 5.92679 16.7915V30.707C5.93017 33.824 7.133 36.8123 9.27139 39.0163C11.4098 41.2203 14.3091 42.46 17.3332 42.4635H34.9603C35.8548 42.4609 36.7409 42.6411 37.5674 42.9937C38.394 43.3462 39.1445 43.864 39.7757 44.5172L64.9453 70.4591C66.0053 71.5591 67.2674 72.4302 68.6579 73.0213C70.0484 73.6125 71.5394 73.9118 73.0435 73.9018H112.96H152.876C153.303 75.4139 154.13 76.7736 155.265 77.8283C156.4 78.883 157.797 79.5911 159.3 79.8733C160.804 80.1554 162.354 80.0004 163.776 79.4256C165.199 78.8509 166.438 77.879 167.355 76.6191C168.272 75.3592 168.83 73.861 168.967 72.2924C169.104 70.7238 168.814 69.1469 168.131 67.7385C167.447 66.33 166.396 65.1457 165.096 64.3182C163.796 63.4908 162.298 63.0529 160.77 63.0538H160.763Z"
        fill={selected ? "url(#leftGradient)" : "gray-300"}
        // fill="url(#leftGradient)"
      />
      <defs>
        <linearGradient
          id="leftGradient"
          x1="0"
          y1="40"
          x2="169"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#556DD9" />
          <stop offset="100%" stopColor="#FAFAFA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TopLeft;
