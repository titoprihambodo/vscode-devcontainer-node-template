# DevContainer Configuration Template for VSCode

### Containers configuration:
- app -> your devcontainer environment
  - alpin or debian image container
  - user non-root
  - install zsh or bash shell (optional)
  - sudo, git, openssh-client, and other packages (the list is in the docker scripts)
- mongodb
  - custom config, mongod.conf
  - external log file, mongo.log
  - persistent data with volumes
- redis
  - custom redis.conf
  - persistent data volume
- prometheus
  - custom config prometheus.yml
  - persistent data volume
- cadvisor
  - resources consumption of the containers

### Directories:
```
.devcontainer/
  config/                   -> mongodb, redis, prometheus configs
  docker-scripts/           -> alpine and debian scripts (helper) for Dockerfile
  logger/                   -> log file goes here, ex: mongo.log
  devcontainer.json
  docker-compose.yml
  Dockerfile
.vscode/
  launch.json
src/
  index.js
package.json
README.md
```
<br/>

#### Note:
> You can share ssh key from the host to devcontainer with ssh-add or ssh-agent (https://code.visualstudio.com/docs/remote/containers#_sharing-git-credentials-with-your-container)