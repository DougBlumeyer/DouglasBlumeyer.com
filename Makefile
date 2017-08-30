start:
	rails server

setup:
	bundle install

compile:
	RAILS_ENV=production bundle exec rake assets:precompile

clean:
	rm -r public/* && rm -r tmp/* && rm -r log/*

deploy:
	make setup && make clean && make compile && git push heroku master
