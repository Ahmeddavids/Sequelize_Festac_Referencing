module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Kelvin',
        lastName: 'Okafor',
        age: 20,
        isMarried: false,
        email: 'Kelvin@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Chris',
        lastName: 'Ichiogu',
        age: 20,
        isMarried: true,
        email: 'chris@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Zainab',
        lastName: 'Atoloye',
        age: 20,
        isMarried: false,
        email: 'zainab@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};