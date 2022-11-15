import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import FriendsRefer from "./pages/FriendsRefer";
import ReferEarn from "./pages/ReferEarn";

function App() {
  return (
    <div className="h-full w-full">
      <Header />
      <FriendsRefer/>
      {/* <ReferEarn/> */}
    </div>
  );
}

export default App;
