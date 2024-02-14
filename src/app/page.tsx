import { Header } from '../components/Header'

import  ChatBoard  from './ChatBoard';


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header
            title="Cohesionet"
            description="Cohesionet"
      />
      <ChatBoard/>
  </main>
  );
}
