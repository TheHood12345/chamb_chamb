// main.tsx
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./page/Home.tsx";
import { Login } from "./Login/Login.tsx";
import { Signup } from "./Signup/Signup.tsx";
import { Market } from "./component/Market.tsx";
import { Asset } from "./component/Asset.tsx";
import { SwapComp } from "./component/SwapComp.tsx";
import { PtoP } from "./component/PtoP.tsx";
import { OrderBook } from "./component/OrderBook.tsx";
import { Chart } from "./component/Chart.tsx";
import { Spot } from "./component/Spot.tsx";
import { GetStarted } from "./component/GetStarted.tsx";
import { Navbar } from "./component/navbar/navbar/Navbar.tsx";
import { Footer } from "./component/footer/Footer.tsx";
import { SubHeaderComp } from "./component/navbar/navbar/SubHeaderComp.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { DepositeCrypto } from "./component/DepositeCrypto.tsx";
import { DepositDetailPage } from "./component/DepositDetailPage.tsx";
import { DepositView } from "./component/DepositView.tsx";
import { Withdrawal } from "./component/Withdrawal.tsx";
import { Finalwithdrawal } from "./component/Finalwithdrawal.tsx";

import { Otp } from "./Signup/otp.tsx";
import { ForgotPassword } from "./Login/forgot_password_1.tsx";
import { ForgotPasswordSuccess } from "./Login/forgot_password_2.tsx";
import { NewPassword } from "./Login/new_password.tsx";
import { Advert } from "./component/Advert.tsx";
import { SecondAdd } from "./component/SeconAdd.tsx";
import { PostAdd } from "./component/PostAdd.tsx";
import { Setting } from "./component/Setting .tsx";
import Successful from "./component/Successful.tsx";
import { GetStartedHeader } from "./component/GetStartedHeader.tsx";
import { AssetBal } from "./component/AssetBal.tsx";
import { ChambSters } from "./component/ChambSters.tsx";
import { PtopSell } from "./component/PtopSell.tsx";
import SellDetail from "./component/SellDetail.tsx";
import BuyDetails from "./component/BuyDetails.tsx";
import PayDetails from "./component/PayDetails.tsx";
import PaymentCompleted from "./component/PaymentCompleted.tsx";
import CancelOrder from "./component/CancelOrder.tsx";

import { Spot11 } from "./component/Spot11.tsx";
import PaymentCompleted_1 from "./component/PaymentCompleted_1.tsx";

const userToken = localStorage.getItem("userToken");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: !userToken ? (
          <>
            <GetStartedHeader />
            <GetStarted />
            <Footer />
          </>
        ) : (
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        ),
      },
      { path: "/login", element: <Login /> },
      {
        path: "/otp",
        element: <Otp />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/forgot-password-success",
        element: <ForgotPasswordSuccess />,
      },
      {
        path: "/new-password",
        element: <NewPassword />,
      },
      { path: "/subHead", element: <SubHeaderComp /> },
      {
        path: "/signup",
        element: (
          <>
            <Signup />
            <Footer />
          </>
        ),
      },
      {
        path: "/home",
        element: (
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        ),
      },
      {
        path: "/market",
        element: (
          <>
            <Navbar />
            <Market />
            <Footer />
          </>
        ),
      },
      {
        path: "/asset",
        element: (
          <>
            <Navbar />
            <Asset />
            <Footer />
          </>
        ),
      },
      {
        path: "/swap",
        element: (
          <>
            <Navbar />
            <SwapComp />
            <Footer />
          </>
        ),
      },
      {
        path: "/pp",
        element: (
          <>
            <Navbar />
            <PtoP />
            <Footer />
          </>
        ),
      },
      {
        path: "/ptopsell",
        element: (
          <>
            <Navbar />
            <PtopSell />
            <Footer />
          </>
        ),
      },
      {
        path: "/selldetail",
        element: (
          <>
            {/* <Navbar /> */}
            <SellDetail />
            <Footer />
          </>
        ),
      },
      {
        path: "/buydetails",
        element: (
          <>
            {/* <Navbar /> */}
            <BuyDetails />
            <Footer />
          </>
        ),
      },
      {
        path: "/payment",
        element: (
          <>
            {/* <Navbar /> */}
            <PayDetails />
            <Footer />
          </>
        ),
      },
      {
        path: "/paycompleted",
        element: (
          <>
            <PaymentCompleted />
          </>
        ),
      },
      {
        path: "/paycompleted_1",
        element: (
          <>
            <PaymentCompleted_1 />
          </>
        ),
      },
      {
        path: "/cancelorder",
        element: (
          <>
            <CancelOrder />
          </>
        ),
      },
      {
        path: "/spot",
        element: (
          <>
            <Navbar />
            <Spot />
            <Footer />
          </>
        ),
      }
      ,
      {
        path: "/spot11",
        element: (
          <>
            <Navbar />
            <Spot11 />
            <Footer />
          </>
        ),
      },

      {
        path: "/chembster",
        element: (
          <>
            <Navbar />
            <ChambSters />
            <Footer />
          </>
        ),
      },
      {
        path: "/orderbook",
        element: (
          <>
            <Navbar />
            <OrderBook />
            <Footer />
          </>
        ),
      },
      {
        path: "/depositdetails",
        element: (
          <>
            <DepositeCrypto />
            <Footer />
          </>
        ),
      },
      {
        path: "/depositcrypto",
        element: (
          <>
            <DepositDetailPage />
            <Footer />
          </>
        ),
      },
      {
        path: "/depositview",
        element: (
          <>
            <DepositView />
            <Footer />
          </>
        ),
      },
      {
        path: "/withdrawal",
        element: (
          <>
            <Withdrawal />
            <Footer />
          </>
        ),
      },
      {
        path: "/finalwithdrawal",
        element: (
          <>
            <Finalwithdrawal />
            <Footer />
          </>
        ),
      },
      {
        path: "/addvert",
        element: (
          <>
            <Advert />
            <Footer />
          </>
        ),
      },
      {
        path: "/secondaddvert",
        element: (
          <>
            <SecondAdd />
            <Footer />
          </>
        ),
      },
      {
        path: "/postadd",
        element: (
          <>
            <PostAdd />
            <Footer />
          </>
        ),
      },
      {
        path: "/sucessful",
        element: (
          <>
            <Successful />
          </>
        ),
      },
      {
        path: "/assetbal",
        element: (
          <>
            <AssetBal />
            <Footer />
          </>
        ),
      },
      {
        path: "/setting",
        element: (
          <>
            <Setting />
          </>
        ),
      },
      {
        path: "/chart",
        element: (
          <>
            <Navbar />
            <Chart />
            <Footer />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
