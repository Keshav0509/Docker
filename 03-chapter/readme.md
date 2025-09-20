# Docker

---

1. code base containerized.
2. optimize build time.
3. manual port mapping
   i. single port
   -> docker run -it -p <host>:<local> <projectname>
   ii. muliple ports
   -> docker run -it -p <host>:<local> -p <host>:<local> -p <host>:<local> -p <host>:<local> <projectname>
   iii. dynamic port mapping
   - in the Dockerfile EXPOSE <local> port.
     -> docker run -it -P <projectname>
4. cmd docker run -itd -P --rm <projectname>
   i. -i (Interactive):

- Keeps STDIN (standard input) open, allowing the container to accept input even if not attached to a terminal.
  This is useful for interactive applications or when you might attach to the container later (e.g., with docker attach).

ii. -t (Pseudo-TTY):

- Allocates a pseudo-TTY (terminal) for the container, which is useful for applications that expect a terminal-like environment (e.g., to display formatted logs or handle CLI input).
  Combined with -i, -it is commonly used for interactive sessions, though its effect is limited in detached mode (see -d below).

iii. -d (Detached):

- Runs the container in detached mode, meaning it runs in the background rather than attaching to your terminal.
  This is useful for long-running processes like a Node.js server, as it allows the container to run without keeping your terminal session open.
  Note: Using -it with -d is valid but less common, as -it is typically for interactive foreground sessions. The -it flags ensure the container can handle terminal-like output if you attach to it later.

iv. -P (Publish All Exposed Ports):

- Automatically maps all ports exposed in the Dockerfile (via the EXPOSE instruction) to random host ports.
  For example, if your Dockerfile includes EXPOSE 3000, Docker will map port 3000 in the container to a random high-numbered port on the host (e.g., 49153).
  You can check the port mappings with:
  bashdocker port <container_id_or_name>
  This aligns with the "Dynamic Port Mapping" section

v. --rm:

- Automatically removes the container when it stops.
  This is useful for cleanup, ensuring no stopped containers accumulate on your system, which is especially helpful for testing or development.
