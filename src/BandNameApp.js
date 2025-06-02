import { SocketProvider } from './context/socketContex';
import App from "./App";


export const BandNameApp = () => {
  return (
    <SocketProvider>
      <App />
    </SocketProvider>
  )
}
