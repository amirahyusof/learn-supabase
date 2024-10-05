import Layout from "@/components/layout/layout"
import React from "react"

const MainLayout = ({ 
  children
}: {
  children: React.ReactNode
}) => {
  return <Layout>{children}</Layout>
}

export default MainLayout