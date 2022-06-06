FROM node:latest
EXPOSE 7777
COPY hello-p7777.js .
CMD node hello-p7777.js > log.out
