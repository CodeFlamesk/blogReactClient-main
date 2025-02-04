import Header from "components/header/Header";

import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import TabsGame from "./TabsGame";

const LayoutGame = () => {
  return (

    <div>
      <Header />
      <TabsGame />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

    </div>



  )
}

export default LayoutGame;