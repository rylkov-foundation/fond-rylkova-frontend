module.exports = {
  apps: [
    {
      name: 'far',
      script: 'npm',
      args: 'start',
      log_file: 'logs/combined.log',
      time: true,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
