import ReactMarkdown from "react-markdown"
import Text from "./Text"
import H1 from "./H1"
import H2 from "./H2"
import H3 from "./H3"
import Li from "./ListItem"
import Ul from "./UnorderedList"
import Ol from "./OrderedList"

export default function Paragraph({ body }: { body: string }) {
  console.log("body is: ", body)
  return (
    <ReactMarkdown components={{ p: Text, h1: H1, h2: H2, h3: H3, ul: Ul, ol: Ol, li: Li }}>{body}</ReactMarkdown>
  )
}