import gitHubLogo from "../assets/github-mark-white.svg";

const Footer = () => {
  return (
    <footer>
      <hr />
      This app uses the{" "}
      <a href="https://nexushub.co/developers/api/General/foo">
        NexusHub.co API
      </a>{" "}
      to retrieve recent auction house data for servers on{" "}
      <a href="https://wowclassic.blizzard.com/en-us/">WoW Classic: WotLK</a>.
      Results are not guaranteed to be recent or accurate. Verify prices ingame
      before making any trade decisions.
      <br />
      <a href="https://github.com/CMcManamon/alchemy-market">
        <img
          src={gitHubLogo}
          className="gitHubLogo"
          alt="Alchemy Price Checker on GitHub"
        />
        &nbsp;View on GitHub
      </a>
    </footer>
  );
};
export default Footer;
