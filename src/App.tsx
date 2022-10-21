import React from "react";
import "./App.css";
import { CookiesProvider } from "react-cookie";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <CookiesProvider>
          <BrowserRouter>
            <CLayout>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
          
                <Route path="users/*" element={<Users />} />

                <Route path={"*"} element={<NotFound/>}>
            
              </Switch>
            </CLayout>
          </BrowserRouter>
        </CookiesProvider>
      </ErrorBoundary>
    </div>
  );
}

function Users() {
  return (
    <div>
      <Routes>
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
}

export default App;