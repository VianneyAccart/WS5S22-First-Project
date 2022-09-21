import blankProfilePicture from "../../medias/blank-profile-picture.png";
import { School, Skill as skill } from "../../types";
import Skill from "../Skill/Skill";
import styles from "./Wilder.module.scss";

const Wilder = ({
  firstname,
  lastname,
  skills,
  school,
}: {
  firstname: string;
  lastname: string;
  skills: skill[];
  school: School;
}) => {
  return (
    <article className={styles.card}>
      <img
        className={styles.img}
        src={blankProfilePicture}
        alt={`${firstname}'s profile`}
      />
      <h3>
        {firstname} {lastname}
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>School</h4>
      <p>{school.schoolName}</p>
      <h4>Wild Skills</h4>
      <ul className={styles.skills}>
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
