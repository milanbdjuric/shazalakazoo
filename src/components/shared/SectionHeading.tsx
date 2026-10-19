interface SectionHeadingProps {
  children: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({ children, align }: SectionHeadingProps) {
  return <h2 style={align ? { textAlign: align } : undefined}>{children}</h2>;
}
