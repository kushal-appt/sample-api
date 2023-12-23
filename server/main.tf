# Configure the AWS provider
provider "aws" {
  region = "var.AWS_REGION"
}

# Create an EC2 instance
resource "aws_instance" "aws_instance_custom" {
  ami           = "var.AMI"
  instance_type = "t2.micro"
  key_name      = "var.KEY_NAME"
  security_groups = [
    "default",
    "allow-ssh"
  ]

# Provision Docker
user_data = <<-EOF
#!/bin/bash
yum update -y
yum install -y docker
service docker start
usermod -a -G docker ec2-user
EOF
}

terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

# Configure the Docker provider
provider "docker" {
    host = "tcp://${aws_instance.aws_instance_custom.private_ip}:2375/"
    registry_auth {
        address  = "https://hub.docker.com/repositories/apptDevOps"
        username = "var.DOCKER_SERVER_NAME"
        password = "var.DOCKER_PASSWORD"
      }
}

 
resource "docker_registry_image" "graph_ql" {
    name = "apptDevOps/graph_ql:latest"
}
 
resource "docker_registry_image" "postgres" {
    name = "apptDevOps/postgres:latest"
}


# Create a named volume
resource "docker_volume" "postgres_data" {
    name = "postgres-data"
} 


# Create a Docker network
resource "docker_network" "custom" {
    name = "custom"
}

  
# Create the Postgres Container
resource "docker_container" "postgres" {
    image = docker_registry_image.postgres.name
    name = "postgres"
    env = [
        "POSTGRES_USER=",
        "POSTGRES_PASSWORD=",
        "POSTGRES_DB="
        ] 

    ports {
        internal = 5432
        external = 5432
        }
    volumes {
        host_path = docker_volume.postgres_data.name
        container_path = "/var/lib/postgresql/data"
        }
    networks_advanced {
        name = docker_network.custom.name
        }
}  
    
 
# Create the Graph QL Container
resource "docker_container" "graph_ql" {
    image = docker_registry_image.graph_ql.name
    name = "graph_ql"
    ports {
        internal = 5000
        external = 5000
    }
    networks_advanced {
        name = docker_network.custom.name
    }
    volumes {
        host_path = docker_volume.postgres_data.name
        container_path = "/var/lib/postgresql/data"
    }
    depends_on = [docker_container.postgres]
}   

 
 



