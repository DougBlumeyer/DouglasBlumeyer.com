setup:
	bundle install

compile:
	RAILS_ENV=production bundle exec rake assets:precompile

login:
	cf login -a api.run.pivotal.io -o ${PWS_ORG} -s ${PWS_SPACE} -u ${PWS_USERNAME} -p ${PWS_PASSWORD}

deploy:
	make setup && make compile && make login && cf push