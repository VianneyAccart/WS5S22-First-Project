import blankProfilePicture from "../medias/blank-profile-picture.png";
import Skill from "./Skill";

const Wilder = ({ firstname, lastname, skills }) => {
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
        {skills.map((skill) => (
          <li key={skill.id}>
            <Skill skillName={skill.skillName} numberOfVotes="3" />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Wilder;
