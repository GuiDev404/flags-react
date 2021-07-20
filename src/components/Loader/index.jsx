import React from "react"
import ContentLoader from "react-content-loader"

const Loader = props => (
  <ContentLoader   
    height={332}
    width={310}
    speed={2}
    style={{ marginTop: '2.5em'}}
    backgroundColor="#ffffff"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="58" y="10"  width="300" height="330" /> 
  </ContentLoader>
)

export default Loader


