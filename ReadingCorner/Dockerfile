# Use the official Python image as a base
FROM python:3.10-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /app

RUN apt-get update --fix-missing \
    && apt-get install -y libpq-dev build-essential \
    && rm -rf /var/lib/apt/lists/*


RUN echo "deb http://deb.debian.org/debian stable main" > /etc/apt/sources.list \
    && echo "deb-src http://deb.debian.org/debian stable main" >> /etc/apt/sources.list \
    && apt-get update --fix-missing \
    && apt-get install -y libpq-dev build-essential \
    && rm -rf /var/lib/apt/lists/*



# Install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the project files
COPY . /app/

# Expose the port
EXPOSE 8000

# Run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
