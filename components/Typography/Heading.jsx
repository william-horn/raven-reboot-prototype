

export default function Heading({
  children,
  className
}) {
  return (
    <h2 
    className={className + " text-primary py-3 font-bold"}>
      {children}
    </h2>
  )
}

