import { TinyMCEComponent } from "@components/index"
import { useState } from "react"


const DashboardPage = () => {
  const [content, _] = useState<string>('');
  return (
    <div>
      <TinyMCEComponent content={content}  onContentChange={(newContent:string) => {console.log(newContent)}}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odit magni voluptatibus dicta quam blanditiis ex, 
        dolor dolore nulla perspiciatis totam suscipit enim eaque maxime mollitia neque doloribus, harum dolores.</p>
    </div>
  )
}

export default DashboardPage