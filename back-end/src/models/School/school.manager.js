const {
  getSchoolRepository,
  getWilderRepository,
} = require("../../database/utils");

async function initializeSchools() {
  const schoolRepository = await getSchoolRepository();
  const wilderRepository = await getWilderRepository();
  await wilderRepository.clear();
  await schoolRepository.clear();
  const schools = ["Lyon", "Paris", "Brest", "Angers", "Marseille"];
  schools.forEach((school) => {
    schoolRepository.save({ schoolName: school });
  });
}

async function getSchoolByName(name) {
  const schoolRepository = await getSchoolRepository();
  return schoolRepository.findOneBy({ schoolName: name });
}

async function getSchools() {
  const schoolRepository = await getSchoolRepository();
  return schoolRepository.find();
}

module.exports = {
  initializeSchools,
  getSchoolByName,
  getSchools,
};
