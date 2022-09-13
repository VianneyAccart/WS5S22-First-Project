const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Wilder",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    firstname: {
      type: "text",
    },
    lastname: {
      type: "text",
    },
  },
});
