'use client'
import { Header } from '../components/Header'

import {ChatBoard} from '../components/ChatBoard'

export default function Home() {

  return (
    <main className="h-full ">
      <Header 
            title="Cohesionet"
            description="Cohesionet"
      />

    <div className ="relative min-h-0 min-w-0 py-4">  

    <ChatBoard/>
   </div>
  </main>
  );
}
