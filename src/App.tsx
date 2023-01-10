import React from "react";
import "./App.css";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import CLayout from "./layout/CLayout";
import { Home } from "./pages/Home";
import store, { persistor } from "./app/store";

function closeEvent() {
  console.log("close event");
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <CookiesProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                <CLayout>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Home closeEvent={() => closeEvent()} openSide={true} />
                      }
                    />

                    {/* <Route path="users/*" element={<Users />} />

                <Route path={"*"} element={<NotFound/>}> */}
                  </Routes>
                </CLayout>
              </BrowserRouter>
            </PersistGate>
          </Provider>
        </CookiesProvider>
      </ErrorBoundary>
    </div>
  );
}

{
  /* function Users() {
  return (
    <div>
      <Routes>
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
} */
}

export default App;
