import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { FloatButton } from "../../components/FloatButton";

import { Summary } from "../../containers/Summary";

export const Home: React.FC = () => (
  <>
    <Header />
    <Main>
      <Summary />
      <FloatButton />
    </Main>
  </>
);