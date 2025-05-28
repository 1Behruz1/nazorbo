import { Link } from "react-router-dom";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const Header = ({ searchTerm, setSearchTerm }: HeaderProps) => {
  return (
    <header>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <Link to="/" style={{ display: "inline-block" }}>
              <img width={150} height={36} src="/logo.svg" alt="logo" />
            </Link>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <label htmlFor="search">
                <img src="/search.svg" alt="Search" />
              </label>
              <input
                id="search"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for any training you want"
                style={{
                  width: "300px",
                  height: "48px",
                  padding: "0.5rem 0.75rem",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  color: "white",
                  fontSize: "1rem",
                }}
                onFocus={(e) => {
                  e.target.style.outline = "2px solid #7c3aed";
                }}
                onBlur={(e) => {
                  e.target.style.outline = "none";
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <img
              width={24}
              height={24}
              src="/notification.svg"
              alt="Notification"
            />
            <img width={32} height={32} src="/user-image.png" alt="User" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
