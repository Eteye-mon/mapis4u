"use client"
import Navbar from "../components/Navbar";
// import { Provider } from 'react-redux';
// import { store } from '../../../redux/store';


export default function DashboardLayout({ children }) {
  return (
    <>
      {/* <Provider store={store}> */}
      <section className="flex">
        <Navbar/>
        <div className="flex-1 lg:ml-56 relative bg-white h-full px-5 py-4 md:px-[50px]">{children}</div>

      </section>
      {/* </Provider> */}
    </>
  );
}
