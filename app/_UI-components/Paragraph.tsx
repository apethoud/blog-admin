import ReactMarkdown from "react-markdown"
import Text from "./Text"
import { H1, H2, H3 } from "./Headers"
import { Ol, Ul, Li } from "./Lists"
import Blockquote from "./Blockquote"
import A from "./Link"

export default function Paragraph({ body }: { body: string }) {
  return (
    <ReactMarkdown components={{ 
      p: Text, 
      h1: H1, 
      h2: H2, 
      h3: H3, 
      ul: Ul, 
      ol: Ol, 
      li: Li, 
      blockquote: Blockquote,
      a: A
    }}>
      {body}
    </ReactMarkdown>
  )
}
