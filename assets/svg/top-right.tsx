const TopRight = ({
  className,
  selected,
}: {
  className: string;
  selected: boolean;
}) => {
  return (
    <svg
      width="169"
      height="83"
      viewBox="0 0 169 83"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.23659 65.2268C10.0148 65.2314 11.7439 65.847 13.1655 66.9816C14.5872 68.1161 15.625 69.7088 16.124 71.5215H95.9565C96.8511 71.5253 97.7375 71.3401 98.5642 70.9768C99.3909 70.6135 100.141 70.0793 100.772 69.4052L125.973 42.6727C127.03 41.5445 128.288 40.65 129.672 40.0411C131.057 39.4321 132.541 39.1208 134.04 39.1251H151.667C153.472 39.1233 155.203 38.3609 156.479 37.0052C157.755 35.6496 158.473 33.8114 158.475 31.8942V17.5546C156.573 16.9666 154.935 15.6698 153.862 13.9023C152.788 12.1347 152.351 10.0151 152.63 7.93272C152.91 5.85033 153.888 3.94497 155.384 2.56658C156.88 1.18819 158.794 0.429321 160.774 0.429321C162.755 0.429321 164.669 1.18819 166.164 2.56658C167.66 3.94497 168.638 5.85033 168.918 7.93272C169.197 10.0151 168.76 12.1347 167.686 13.9023C166.613 15.6698 164.975 16.9666 163.073 17.5546V31.8942C163.07 35.1062 161.867 38.1855 159.729 40.4567C157.59 42.7279 154.691 44.0054 151.667 44.009H134.04C133.145 44.0063 132.259 44.192 131.433 44.5553C130.606 44.9186 129.855 45.4522 129.224 46.1253L104.055 72.8578C102.995 73.9914 101.733 74.889 100.342 75.4981C98.9516 76.1073 97.4606 76.4157 95.9565 76.4054H56.0402H16.124C15.6969 77.9637 14.8696 79.3648 13.7349 80.4516C12.6001 81.5385 11.2028 82.2682 9.69952 82.5589C8.19623 82.8496 6.64638 82.6899 5.22377 82.0976C3.80115 81.5053 2.562 80.5039 1.64519 79.2055C0.728378 77.9072 0.170166 76.3633 0.0331421 74.747C-0.103897 73.1306 0.185699 71.5057 0.8694 70.0543C1.5531 68.6029 2.60388 67.3825 3.90401 66.5298C5.20412 65.6771 6.70218 65.2259 8.23019 65.2268H8.23659Z"
        fill={selected ? "url(#rightGradient)" : "#E7E7E7"}
      />
      <defs>
        <linearGradient
          id="rightGradient"
          x1="169"
          y1="40"
          x2="0"
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

export default TopRight;
