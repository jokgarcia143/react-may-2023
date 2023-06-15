pipeline {
    agent any
    
    environment {
        // Define any environment variables required for the pipeline
        NODE_VERSION = '14.17.0'
        NPM_REGISTRY = 'https://registry.npmjs.org/'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your version control system
                checkout scm
                sh 'cd react-may-2023'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Node.js using Node Version Manager (NVM)
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash'
                sh 'source ~/.nvm/nvm.sh && nvm install $NODE_VERSION'
                
                // Install project dependencies
                sh 'npm install --registry $NPM_REGISTRY'
            }
        }
        
        stage('Build') {
            steps {
                // Build the React application
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                // Run tests (if applicable)
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                // Perform deployment steps
                // For example, you might upload the build artifacts to a web server or deploy to a hosting platform
                
                // Example deployment using AWS S3
                sh 'aws s3 sync build/ s3://your-s3-bucket/'
                
                // Example deployment using FTP
                sh 'lftp -c "open -u <username>,<password> <ftp-server>; put -O <remote-directory> build/*"'
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
pipeline {
    agent any
    
    environment {
        // Define any environment variables required for the pipeline
        NODE_VERSION = '14.17.0'
        NPM_REGISTRY = 'https://registry.npmjs.org/'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your version control system
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Node.js using Node Version Manager (NVM)
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash'
                sh 'source ~/.nvm/nvm.sh && nvm install $NODE_VERSION'
                
                // Install project dependencies
                sh 'npm install --registry $NPM_REGISTRY'
            }
        }
        
        stage('Build') {
            steps {
                // Build the React application
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                // Run tests (if applicable)
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                // Perform deployment steps
                // For example, you might upload the build artifacts to a web server or deploy to a hosting platform
                
                // Example deployment using AWS S3
                sh 'aws s3 sync build/ s3://your-s3-bucket/'
                
                // Example deployment using FTP
                sh 'lftp -c "open -u <username>,<password> <ftp-server>; put -O <remote-directory> build/*"'
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
