const Grid = ({
  children,
  className = '',
  columns = 2,
  gap = 4,
  style,
}) => {
  return (
    <div
      className={`grid grid-cols-${columns} gap-${gap} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Grid;
