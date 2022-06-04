pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm build'
        echo 'Building'
      }
  }
     stage('Test') {
       steps {
        echo 'Testing'
      }
  }
       stage('Deploy') {
      steps {
        echo 'Deploying'
      }
  }
  }
}
