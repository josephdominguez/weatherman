import LogUserOut from '@components/auth/LogUserOut';

function LogoutButton() {
  return (
    <LogUserOut>
      <button className="logout-button">
        Log Out
      </button>
    </LogUserOut>
  );
}

export default LogoutButton;
