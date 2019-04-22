module.exports = {
  development: {
    ports: {
      portal: 3100,
      authentication: 3200,
      accounts: 3400,
      transactions: 3600,
      bills: 3800,
      support: 4000,
      userbase: 4100
    }
  },
  production: {
    ports: {
      portal: 80,
      authentication: 80,
      accounts: 80,
      transactions: 80,
      bills: 80,
      support: 80,
      userbase: 80
    }
  }
};
