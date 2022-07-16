import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/User/UserCard";
import "./styles.css";

const user = {
  name: "こうせい",
  image: "https://source.unsplash.com/7AIDE8PrvA0",
  email: "12345@example.com",
  phone: "090-1111-1212",
  company: {
    name: "ほげほげ株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
