import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import Sidebar1 from './Sidebar1'
import ProfileSidebar from './ProfileSidebar'

function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
    <div className="flex flex-1">
    <Sidebar1 />
      <Sidebar />
      <Main />
     <ProfileSidebar />
    </div>
  </div>
  )
}

export default Dashboard