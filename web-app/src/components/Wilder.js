import blankProfilePicture from "../medias/blank-profile-picture.png";
import Skill from "./Skill";

const Wilder = ({ firstname, lastname, name, numberOfVotes }) => {
  return (
    <article className="card">
      <img src={blankProfilePicture} alt={`${firstname}'s profile`} />
      <h3>
        {firstname} {lastname}
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        <li>
          <Skill name="JavaScript" numberOfVotes={3} />
        </li>
        <li>
          <Skill name="PHP" numberOfVotes={4} />
        </li>
      </ul>
    </article>
  );
};

export default Wilder;
