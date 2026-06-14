FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -e .

EXPOSE 5050

CMD ["python", "-c", "from examples.todo_simple import app; app.run(host='0.0.0.0', port=5050, debug=False)"]
