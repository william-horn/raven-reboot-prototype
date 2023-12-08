

export default function Text({
  children,
  className
}) {
  return (
    <p 
    className={className + " text-primary text-sm leading-6"}>
      {children}
    </p>
  )
}

