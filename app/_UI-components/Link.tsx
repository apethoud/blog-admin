import { PropsWithChildren, AnchorHTMLAttributes } from "react";

export default function Link(props: PropsWithChildren<AnchorHTMLAttributes<any>>) {
  return (
    <a 
      href={props.href} 
      target="_blank"
      className="font-sans font-bold text-lg text-violet-600 dark:text-violet-500 antialiased">
        {props.children}
    </a>
  )
}