pipeline {

	// More info about the Declarative Pipeline Syntax on https://www.jfrog.com/confluence/display/JFROG/Declarative+Pipeline+Syntax
	// Declarative syntax is available from version 3.0.0 of the Jenkins Artifactory Plugin.

	agent any

	

	
	stages {
		
		stage ("Clone") {
			steps {
				git branch: "master",
				url: "https://github.com/sverdlov93/jfrog-pipelines-matrix-example"
				// credentialsId: 'git_cred_id' (If cloning the code requires credentials, set credentials to artifactory server assined in Jenkins > Configure System > credentials > "username with password" > ID: "git-cred-id" )
			}
		}

		stage ("Artifactory configuration") {
			steps {
				rtServer (
					id: "ci-setup-cmd",
					url: "https://michaelsv.jfrog.io/artifactory/",
					credentialsId: 'rt-credentials', // (Credentials to artifactory server assined in Jenkins > Configure System > credentials > "username with password" > ID: "rt-cred-id" )

 					// bypassProxy: true, (If Jenkins is configured to use an http proxy, you can bypass the proxy when using this Artifactory server)
					// timeout: 300 , (Configure the connection timeout (in seconds). The default value (if not configured) is 300 seconds)
				)
				rtNpmDeployer (
					id: "NPM_DEPLOYER",
					serverId: "ci-setup-cmd",
					repo: "default-npm-local",

					// threads: 6, (Optional - Attach custom properties to the published artifacts)
					// properties: ['key1=value1', 'key2=value2'], (Optional - Attach custom properties to the published artifacts)
				)
				rtNpmResolver (
					id: "NPM_RESOLVER",
					serverId: "ci-setup-cmd",
					repo: "default-npm-virtual"
				)
			}
		}

		stage ("Exec Npm install") {
			steps {
				rtNpmInstall (
					resolverId: "NPM_RESOLVER",

					// tool: {build installation name}, (Npm tool installation from jenkins from : Jenkins > Manage jenkins > Global Tool Configuration > NodeJS installations
					// path: '',  (Optional path to the project root. If not set, the root of the workspace is assumed as the root project path.)
					// args: '--verbose',  (Optional npm flags or arguments.)
					// javaArgs: '-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005' , (Jenkins spawns a new java process during this step's execution. You have the option of passing any java args to this new process.)
					// buildName: 'my-build-name', (If the build name and build number are not set here, the current job name and number will be used:)
					// buildNumber: '17',
					// project: 'my-project-key' (Optional - Only if this build is associated with a project in Artifactory, set the project key as follows.)
				)
			}
		}

		stage ("Exec Npm publish") {
			steps {
				rtNpmPublish (
					deployerId: "NPM_DEPLOYER",

					// tool: {build installation name}, (Npm tool installation from jenkins from : Jenkins > Manage jenkins > Global Tool Configuration > NodeJS installations
					// path: '',  (Optional path to the project root. If not set, the root of the workspace is assumed as the root project path.)
					// javaArgs: '-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005' , (Jenkins spawns a new java process during this step's execution. You have the option of passing any java args to this new process.)
					// buildName: 'my-build-name', (If the build name and build number are not set here, the current job name and number will be used:)
					// buildNumber: '17',
					// project: 'my-project-key' (Optional - Only if this build is associated with a project in Artifactory, set the project key as follows.)
				)
			}
		}

		stage ("Config build info") {
			steps {
				rtBuildInfo (
					captureEnv: true,
					includeEnvPatterns: ["*"],

  					// excludeEnvPatterns: ['*private*', 'internal-*'],
					// buildName: 'my-build-name', (If the build name and build number are not set here, the current job name and number will be used:)
					// buildNumber: '17',
					// project: 'my-project-key' (Optional - Only if this build is associated with a project in Artifactory, set the project key as follows.)
				)
			}
		}

		stage ("Publish build info") {
			steps {
				rtPublishBuildInfo (
					serverId: "ci-setup-cmd",

					// buildName: 'my-build-name', (If the build name and build number are not set here, the current job name and number will be used:)
					// buildNumber: '17',
					// project: 'my-project-key' (Optional - Only if this build is associated with a project in Artifactory, set the project key as follows.)
				)
			}
		}

	}
}
