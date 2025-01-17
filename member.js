function skillsMember() {
  return {
    name: 'John Doe',
    age: 32,
    skills: ['HTML', 'CSS', 'JS'],
    getSkills: function() {
      return this.skills;
    },
  };
}