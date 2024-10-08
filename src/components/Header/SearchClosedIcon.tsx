interface SearchClosed {
    color?: string;
    width?: string;
    height?: string;
  }
  
  const SearchClosedIcon: React.FC<SearchClosed> = ({
    color = "black",
    width = "24",
    height = "24",
  }) => {
    return (
      <>
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="7.56126"
            height="1.89031"
            transform="matrix(0.713342 0.700816 -0.713342 0.700816 18.6064 17.3762)"
            fill={color}
          />
          <path
            d="M20.9303 10.7726C20.9303 16.1533 16.4855 20.5452 10.9652 20.5452C5.44478 20.5452 1 16.1533 1 10.7726C1 5.39198 5.44478 1 10.9652 1C16.4855 1 20.9303 5.39198 20.9303 10.7726Z"
            stroke={color}
            strokeWidth="2"
          />
        </svg>
      </>
    );
  };
  
  export default SearchClosedIcon;
  