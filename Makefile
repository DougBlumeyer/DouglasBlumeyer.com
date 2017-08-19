deploy:
	cf login -a api.run.pivotal.io -o ${PWS_ORG} -s ${PWS_SPACE} -u ${PWS_USERNAME} -p ${PWS_PASSWORD} && cf push douglas-blumeyer -b https://github.com/cloudfoundry/ruby-buildpack.git -m 64m