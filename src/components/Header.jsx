import ThemeToggler from "../components/ThemeToggler";

const headerStyles = {
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Header = () => {
  return (
    <header style={headerStyles}>
      <h1 style={{ marginRight: "10px" }}>Context API</h1>
      <ThemeToggler />
    </header>
  );
};

export default Header;
