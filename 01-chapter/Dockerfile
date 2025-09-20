# Use the official Ubuntu 20.04 as a parent image
FROM ubuntu

# Set the working directory in the container
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_22.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt install nodejs -y
RUN node -v

# set the working directory in the container
WORKDIR /home/myapp

# Copy the current directory contents into the container at /home/myapp
COPY index.js ./
COPY .prettierignore ./
COPY .prettierrc ./
COPY package.json ./
COPY pnpm-lock.yaml ./

# install pnpm
RUN npm install -g pnpm
RUN pnpm install

# run the app when the container launches
# CMD ["pnpm", "start"]