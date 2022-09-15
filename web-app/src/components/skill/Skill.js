import styles from "./Skill.module.scss";

const Skill = ({ skillName, numberOfVotes }) => {
  return (
    <>
      {skillName}
      <span className={styles.votes}>{numberOfVotes}</span>
    </>
  );
};

export default Skill;
