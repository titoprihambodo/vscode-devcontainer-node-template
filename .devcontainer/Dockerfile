# Using image from microsoft vscode
# FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:14

# Using alpine based image
ARG VARIANT="15.7.0-alpine"

# Using debian based image
# ARG VARIANT="15.7.0-buster"

# source of the container image
FROM node:${VARIANT}

# config for user, packages and shell
ARG INSTALL_ZSH="true"
ARG UPGRADE_PACKAGES="false"
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID
COPY docker-scripts/*.sh /tmp/docker-scripts/

# Common config for alpin
RUN apk update && ash /tmp/docker-scripts/common-alpine.sh "${INSTALL_ZSH}" "${USERNAME}" "${USER_UID}" "${USER_GID}" \
    && rm -rf /tmp/docker-scripts

# Common config for debian
# RUN bash /tmp/docker-scripts/common-debian.sh "${INSTALL_ZSH}" "${USERNAME}" "${USER_UID}" "${USER_GID}" "${UPGRADE_PACKAGES}" \
#     && apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/docker-scripts