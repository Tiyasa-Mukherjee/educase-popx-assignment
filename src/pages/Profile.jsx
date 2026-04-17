function Profile() {
  return (
    <div className="container">
      <h2 className="profile-title">Account Settings</h2>

      <div className="profile-box">
        <img
          src="https://i.pravatar.cc/100?img=5"
          alt="profile"
          className="profile-img"
        />

        <div>
          <h3>Marry Doe</h3>
          <p className="email-text">Marry@example.com</p>
        </div>
      </div>

      <p className="bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
      </p>

      <hr className="divider" />
    </div>
  );
}

export default Profile;