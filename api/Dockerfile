FROM python:3.9
WORKDIR /api

COPY ./ ./
RUN pip install -r ./requirements.txt
ENV FLASK_ENV production

EXPOSE 5000
# CMD ["gunicorn", "-b", ":5000", "-c docker-gunicorn.conf.py", "api:api"]
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]