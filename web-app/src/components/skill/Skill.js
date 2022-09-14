import styles from "./Skill.module.css";

const Skill = ({ skillName, numberOfVotes }) => {
  return (
    <>
      {skillName}
      <span className={styles.votes}>{numberOfVotes}</span>
    </>
  );
};

export default Skill;
