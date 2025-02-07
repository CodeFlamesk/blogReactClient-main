import Header from "components/header/Header";

import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import TabsGame from "../TabsGame";
import "./layout-admin.scss"
import Container from "components/Container/Container";
const LayoutGame = () => {
  return (

    <div>
      <Header />
      <main>
        <Container>
          <TabsGame />
          <Suspense>

            <Outlet />

          </Suspense>

        </Container>
      </main>

    </div>



  )
}

export default LayoutGame;