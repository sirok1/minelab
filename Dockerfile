FROM ubuntu:latest
LABEL authors="sirok"

ENTRYPOINT ["top", "-b"]