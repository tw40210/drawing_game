FROM python:3.9.16-slim-buster
WORKDIR /app
COPY ./backend/src ./backend/src
COPY ./backend/requirements ./backend/requirements
WORKDIR /app/backend
RUN pip3 install -r ./requirements/requirments.txt
# CMD ["sleep", "1000"]
CMD ["python3", "-m", "src.main"]