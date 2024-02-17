import { Header } from '../components/Header'

import  ChatBoard  from './ChatBoard';


export default function Home() {

  return (
    <main className="h-full dark:bg-gray-900">
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
