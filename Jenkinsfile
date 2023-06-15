pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'mvn clean package'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'mvn test'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add your deployment commands here
                // For example: sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline executed successfully!'
            // Additional actions or notifications can be added here
        }
        
        failure {
            echo 'Pipeline failed!'
            // Additional actions or notifications can be added here
        }
    }
}
