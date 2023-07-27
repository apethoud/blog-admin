import { Children, isValidElement, ReactNode } from "react";
import Text from "./Text";

type BlockquoteChildrenType = ('\n' | ReactNode)[]

export default function Blockquote({ children }: { children: BlockquoteChildrenType }) {
  let childElement = null;
  let childString = null;

  Children.map(children, (child) => {
    if (isValidElement(child) && child.type === Text) {
      childElement = Children.only(child)
      childString = childElement.props?.node?.children?.[0]?.value
    }
  })

  if (!childString) {
    return null;
  }

  return (
    <blockquote className="my-8 border-l-4 pl-8 border-violet-600 dark:border-violet-500">
      <div className="font-sans italic text-3xl text-slate-900 dark:text-slate-100 antialiased">
        {childString}
      </div>
    </blockquote>
  )
}