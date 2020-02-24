import React, { ReactNode } from "react"

type HomePageProps = {
  children?: ReactNode
}

const Home: React.FC<HomePageProps> = () => {
  return <div>HomePage</div>
}

export default Home
