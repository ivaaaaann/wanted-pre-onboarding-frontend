import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "../../../styles/GlobalStyle";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {children}
    </BrowserRouter>
  );
};

export default Providers;
