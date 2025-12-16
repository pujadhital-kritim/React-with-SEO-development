import React from 'react'
import Card from './component/Card';


const App = () => {
  return (
<>

{/* used props to send data to the cards */}
<Card title="React Course" description="Learn react with me 100 Days challenge"/>
<Card title="SEO Tips" description="Learn SEO with me"/>
<Card title="Web Developemnt" description=" 100 Days Web Development challenge"/>
</>
  )
}

export default App