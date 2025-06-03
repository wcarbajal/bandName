
import { SocketProvider } from './context/socketContex';
import HomePage from "./pages/HomePage";


export const BandNameApp = () => {
  return (
    <SocketProvider>
      <HomePage />
    </SocketProvider>
  );
};
