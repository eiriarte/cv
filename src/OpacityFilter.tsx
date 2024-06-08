import { FilterOption } from "./MainAppBar";

interface OpacityFilterProps {
  keywords: string[];
  query: FilterOption[];
  inline?: boolean;
}

export default function OpacityFilter({
  keywords,
  query,
  children,
  inline = false
}: React.PropsWithChildren<OpacityFilterProps>) {
  const style = inline ? { display: "inline" } : undefined;
  let opaque = true;
  if (keywords.length && query.length) {
    opaque = query.filter((keyword) => keywords.includes(keyword)).length > 0;
  }
  const className = "transition-opacity duration-200 " + (opaque ? "opacity-100" : "opacity-10");
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
}
